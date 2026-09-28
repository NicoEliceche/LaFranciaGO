/**
 * La caja del día.
 *
 * Un turno de trabajo: se abre con lo que hay en el cajón, se van anotando
 * los movimientos, y al cerrar se cuenta la plata y se compara con lo que el
 * sistema calculó. La diferencia es el dato que importa, y por eso se
 * muestra sin suavizar: si falta plata, hay que verlo.
 */
import { useCallback, useEffect, useState } from 'react';
import { ArrowDownToLine, ArrowUpFromLine, Lock, Receipt, Wallet } from 'lucide-react';

import {
  type CajaApi,
  type CierreApi,
  type MovimientoCajaApi,
  gestionApi,
} from '@core/data/services/apiClient';
import { formatearMientrasEscribe, leerCentavos, mostrarCentavos } from '../dinero';

import { GestionFrame } from '../components/GestionFrame';
import { Total, Totales } from '../components/TablaStyled';
import {
  Accion,
  Acciones,
  Aviso,
  Campo,
  Cierre,
  Diferencia,
  Fila,
  Formulario,
  Lista,
  Monto,
  Panel,
  TituloPanel,
  Vacio,
} from './CajaScreenStyled';

const NOMBRE_MOVIMIENTO: Record<string, string> = {
  venta: 'Venta',
  retiro: 'Retiro',
  deposito: 'Depósito',
  egreso: 'Gasto',
  ajuste: 'Ajuste',
};

export function CajaScreen() {
  const [caja, setCaja] = useState<CajaApi | null>(null);
  const [movimientos, setMovimientos] = useState<MovimientoCajaApi[]>([]);
  const [anteriores, setAnteriores] = useState<CierreApi[]>([]);
  const [cargando, setCargando] = useState(true);
  const [aviso, setAviso] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  const [inicial, setInicial] = useState('');
  const [montoMov, setMontoMov] = useState('');
  const [conceptoMov, setConceptoMov] = useState('');
  const [tipoMov, setTipoMov] = useState<'retiro' | 'deposito' | 'egreso'>('retiro');
  const [contado, setContado] = useState('');

  const traer = useCallback(async () => {
    setCargando(true);

    try {
      const datos = await gestionApi.caja();

      setCaja(datos.caja);
      setMovimientos(datos.movimientos ?? []);
      setAnteriores(datos.anteriores ?? []);
    } catch {
      setAviso('No pudimos traer la caja. Probá de nuevo.');
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    void traer();
  }, [traer]);

  const abrir = async () => {
    const centavos = leerCentavos(inicial || '0');

    if (centavos === null) {
      setAviso('Ese monto no se entiende. Escribilo como 1.500,00');
      return;
    }

    setGuardando(true);
    setAviso(null);

    try {
      await gestionApi.abrirCaja(centavos);
      setInicial('');
      await traer();
    } catch (fallo) {
      setAviso(fallo instanceof Error ? fallo.message : 'No pudimos abrir la caja');
    } finally {
      setGuardando(false);
    }
  };

  const anotar = async () => {
    const centavos = leerCentavos(montoMov);

    if (centavos === null || centavos === 0) {
      setAviso('Poné cuánto entra o sale');
      return;
    }

    setGuardando(true);
    setAviso(null);

    try {
      await gestionApi.movimiento({
        tipo: tipoMov,
        montoCentavos: centavos,
        concepto: conceptoMov || undefined,
      });
      setMontoMov('');
      setConceptoMov('');
      await traer();
    } catch (fallo) {
      setAviso(fallo instanceof Error ? fallo.message : 'No pudimos anotar el movimiento');
    } finally {
      setGuardando(false);
    }
  };

  const cerrar = async () => {
    const centavos = leerCentavos(contado);

    if (centavos === null) {
      setAviso('Contá el efectivo del cajón antes de cerrar');
      return;
    }

    setGuardando(true);
    setAviso(null);

    try {
      const resultado = await gestionApi.cerrarCaja(centavos);
      const dif = resultado.diferencia_centavos;

      setAviso(
        dif === 0
          ? 'Caja cerrada. La cuenta dio justo.'
          : dif > 0
            ? `Caja cerrada. Sobraron ${mostrarCentavos(dif)}.`
            : `Caja cerrada. Faltaron ${mostrarCentavos(Math.abs(dif))}.`,
      );
      setContado('');
      await traer();
    } catch (fallo) {
      setAviso(fallo instanceof Error ? fallo.message : 'No pudimos cerrar la caja');
    } finally {
      setGuardando(false);
    }
  };

  /* Lo que se cobró en efectivo durante el turno, para que el cierre no
     obligue a sumar la lista a mano. */
  const enVentas = movimientos
    .filter((m) => m.tipo === 'venta')
    .reduce((suma, m) => suma + m.monto_centavos, 0);

  const salidas = movimientos
    .filter((m) => m.monto_centavos < 0)
    .reduce((suma, m) => suma + m.monto_centavos, 0);

  return (
    <GestionFrame titulo="Caja">
      {aviso ? <Aviso role="status">{aviso}</Aviso> : null}

      {cargando ? (
        <Vacio>Buscando la caja…</Vacio>
      ) : caja ? (
        <>
          <Totales>
            <Total>
              <span>Arrancó con</span>
              <strong>{mostrarCentavos(caja.inicial_centavos)}</strong>
            </Total>

            <Total data-tono="cobrado">
              <span>Cobrado en efectivo</span>
              <strong>{mostrarCentavos(enVentas)}</strong>
            </Total>

            <Total data-tono="debe">
              <span>Salió del cajón</span>
              <strong>{mostrarCentavos(Math.abs(salidas))}</strong>
            </Total>

            <Total>
              <span>Tiene que haber</span>
              <strong>{mostrarCentavos(caja.esperado_centavos)}</strong>
            </Total>
          </Totales>

          <Panel>
            <TituloPanel>
              <ArrowUpFromLine size={16} aria-hidden="true" />
              Anotar un movimiento
            </TituloPanel>

            <Formulario>
              <Campo>
                <span>Qué es</span>
                <select
                  value={tipoMov}
                  onChange={(evento) =>
                    setTipoMov(evento.target.value as 'retiro' | 'deposito' | 'egreso')
                  }
                >
                  <option value="retiro">Saco plata del cajón</option>
                  <option value="deposito">Pongo plata en el cajón</option>
                  <option value="egreso">Pago un gasto</option>
                </select>
              </Campo>

              <Campo>
                <span>Cuánto</span>
                <input
                  value={montoMov}
                  onChange={(evento) => setMontoMov(evento.target.value)}
                  inputMode="decimal"
                  placeholder="0,00"
                />
              </Campo>

              <Campo>
                <span>Por qué</span>
                <input
                  value={conceptoMov}
                  onChange={(evento) => setConceptoMov(evento.target.value)}
                  placeholder="Pago al proveedor"
                />
              </Campo>

              <Accion type="button" onClick={anotar} disabled={guardando}>
                Anotar
              </Accion>
            </Formulario>
          </Panel>

          <Panel>
            <TituloPanel>
              <Receipt size={16} aria-hidden="true" />
              Lo que pasó en el turno
            </TituloPanel>

            {movimientos.length === 0 ? (
              <Vacio>Todavía no se movió nada.</Vacio>
            ) : (
              <Lista>
                {movimientos.map((mov) => (
                  <Fila key={mov.id}>
                    <div>
                      <strong>{NOMBRE_MOVIMIENTO[mov.tipo] ?? mov.tipo}</strong>
                      <span>{mov.concepto || mov.creado_por_nombre}</span>
                    </div>

                    <Monto data-signo={mov.monto_centavos < 0 ? 'menos' : 'mas'}>
                      {mov.monto_centavos < 0 ? '−' : '+'}
                      {mostrarCentavos(Math.abs(mov.monto_centavos))}
                    </Monto>
                  </Fila>
                ))}
              </Lista>
            )}
          </Panel>

          <Panel>
            <TituloPanel>
              <Lock size={16} aria-hidden="true" />
              Cerrar la caja
            </TituloPanel>

            <Formulario>
              <Campo>
                <span>Cuánto contaste</span>
                <input
                  value={contado}
                  onChange={(evento) => setContado(evento.target.value)}
                  inputMode="decimal"
                  placeholder="0,00"
                />
              </Campo>

              <Accion type="button" onClick={cerrar} disabled={guardando} data-tono="fuerte">
                Cerrar el día
              </Accion>
            </Formulario>
          </Panel>
        </>
      ) : (
        <>
          <Panel>
            <TituloPanel>
              <Wallet size={16} aria-hidden="true" />
              Abrir la caja
            </TituloPanel>

            <Formulario>
              <Campo>
                <span>Con cuánto arrancás</span>
                <input
                  value={inicial}
                  /* Los separadores se ponen solos mientras escribe: en un
                     campo de plata es donde más se equivoca quien atiende
                     apurado, y un cero de más acá hace que la caja cierre con
                     una diferencia que nadie sabe de dónde salió. */
                  onChange={(evento) => setInicial(formatearMientrasEscribe(evento.target.value))}
                  inputMode="decimal"
                  placeholder="$ 0,00"
                />
              </Campo>

              <Accion type="button" onClick={abrir} disabled={guardando} data-tono="fuerte">
                Abrir
              </Accion>
            </Formulario>
          </Panel>

          {anteriores.length > 0 ? (
            <Panel>
              <TituloPanel>
                <ArrowDownToLine size={16} aria-hidden="true" />
                Los últimos cierres
              </TituloPanel>

              <Lista>
                {anteriores.map((cierre) => (
                  <Cierre key={cierre.id}>
                    <div>
                      <strong>{new Date(cierre.cerrada_en).toLocaleDateString('es-AR')}</strong>
                      <span>
                        Contó {mostrarCentavos(cierre.contado_centavos)} sobre{' '}
                        {mostrarCentavos(cierre.esperado_centavos)}
                      </span>
                    </div>

                    <Diferencia data-tono={cierre.diferencia_centavos === 0 ? 'justo' : 'dispar'}>
                      {cierre.diferencia_centavos === 0
                        ? 'Justo'
                        : cierre.diferencia_centavos > 0
                          ? `Sobró ${mostrarCentavos(cierre.diferencia_centavos)}`
                          : `Faltó ${mostrarCentavos(Math.abs(cierre.diferencia_centavos))}`}
                    </Diferencia>
                  </Cierre>
                ))}
              </Lista>
            </Panel>
          ) : null}
        </>
      )}
    </GestionFrame>
  );
}
