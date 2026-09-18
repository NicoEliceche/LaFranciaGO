/**
 * El fiado.
 *
 * No es la cuenta corriente de un sistema contable: son las dos o tres
 * personas de años que se llevan mercadería y pagan después. El colegio que
 * saca toda la semana, la familia que agarra un jugo, el conocido que paga
 * mañana.
 *
 * Lo que resuelve no es llevar la deuda —eso se anota en cualquier lado—
 * sino que la caja cierre: si alguien se lleva algo sin dejar plata y no
 * queda registrado, al cerrar falta y la persona del mostrador queda bajo
 * sospecha.
 */
import { useCallback, useEffect, useState } from 'react';
import { HandCoins, Plus, UserPlus } from 'lucide-react';

import {
  type CuentaFiadoApi,
  type MetodoPago,
  type MovimientoFiadoApi,
  fiadoApi,
} from '@core/data/services/apiClient';

import { GestionFrame } from '../components/GestionFrame';
import { Total, Totales } from '../components/TablaStyled';
import { leerCentavos, mostrarCentavos } from '../dinero';
import {
  Accion,
  Aviso,
  Campo,
  Fila,
  Formulario,
  Lista,
  Monto,
  Panel,
  TituloPanel,
  Vacio,
} from './CajaScreenStyled';

export function FiadoScreen() {
  const [cuentas, setCuentas] = useState<CuentaFiadoApi[]>([]);
  const [totalAdeudado, setTotalAdeudado] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [aviso, setAviso] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  const [nombreNueva, setNombreNueva] = useState('');
  const [telefonoNueva, setTelefonoNueva] = useState('');

  /* La cuenta abierta, con su historial. */
  const [abierta, setAbierta] = useState<CuentaFiadoApi | null>(null);
  const [movimientos, setMovimientos] = useState<MovimientoFiadoApi[]>([]);
  const [montoPago, setMontoPago] = useState('');
  const [metodoPago, setMetodoPago] = useState<MetodoPago>('efectivo');

  const traer = useCallback(async () => {
    setCargando(true);

    try {
      const datos = await fiadoApi.listar();

      setCuentas(datos.cuentas);
      setTotalAdeudado(datos.totalAdeudado);
    } catch {
      setAviso('No pudimos traer las cuentas. Probá de nuevo.');
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    void traer();
  }, [traer]);

  const abrirCuenta = async (cuenta: CuentaFiadoApi) => {
    try {
      const datos = await fiadoApi.detalle(cuenta.id);

      setAbierta(datos.cuenta);
      setMovimientos(datos.movimientos);
    } catch {
      setAviso('No pudimos abrir esa cuenta');
    }
  };

  const crear = async () => {
    const nombre = nombreNueva.trim();

    if (nombre.length < 2) {
      setAviso('Poné un nombre para la cuenta');
      return;
    }

    setGuardando(true);
    setAviso(null);

    try {
      await fiadoApi.crear({ nombre, telefono: telefonoNueva || undefined });
      setNombreNueva('');
      setTelefonoNueva('');
      await traer();
    } catch (fallo) {
      setAviso(fallo instanceof Error ? fallo.message : 'No pudimos crear la cuenta');
    } finally {
      setGuardando(false);
    }
  };

  const cobrar = async () => {
    if (!abierta) return;

    const centavos = leerCentavos(montoPago);

    if (centavos === null || centavos === 0) {
      setAviso('Poné cuánto te paga');
      return;
    }

    setGuardando(true);
    setAviso(null);

    try {
      const resultado = await fiadoApi.cobrar(abierta.id, {
        montoCentavos: centavos,
        metodo: metodoPago,
      });

      setAviso(
        resultado.saldo_centavos === 0
          ? `${abierta.nombre} quedó al día.`
          : `${abierta.nombre} queda debiendo ${mostrarCentavos(resultado.saldo_centavos)}.`,
      );
      setMontoPago('');
      await abrirCuenta(abierta);
      await traer();
    } catch (fallo) {
      setAviso(fallo instanceof Error ? fallo.message : 'No pudimos registrar el pago');
    } finally {
      setGuardando(false);
    }
  };

  const conDeuda = cuentas.filter((c) => c.saldo_centavos > 0);

  return (
    <GestionFrame titulo="Fiado">
      {aviso ? <Aviso role="status">{aviso}</Aviso> : null}

      <Totales>
        <Total data-tono="debe">
          <span>Te deben</span>
          <strong>{mostrarCentavos(totalAdeudado)}</strong>
        </Total>

        <Total>
          <span>Cuentas con deuda</span>
          <strong>{conDeuda.length}</strong>
        </Total>

        <Total>
          <span>Cuentas abiertas</span>
          <strong>{cuentas.filter((c) => c.activa).length}</strong>
        </Total>

        <Total>
          <span>La que más debe</span>
          <strong>
            {conDeuda.length > 0 ? mostrarCentavos(conDeuda[0].saldo_centavos) : mostrarCentavos(0)}
          </strong>
        </Total>
      </Totales>

      <Panel>
        <TituloPanel>
          <HandCoins size={16} aria-hidden="true" />
          Quiénes tienen cuenta
        </TituloPanel>

        {cargando ? (
          <Vacio>Buscando…</Vacio>
        ) : cuentas.length === 0 ? (
          <Vacio>
            Todavía no hay cuentas. Creá una para anotar lo que se lleva alguien sin pagar en el
            momento.
          </Vacio>
        ) : (
          <Lista>
            {cuentas.map((cuenta) => (
              <Fila key={cuenta.id}>
                <div>
                  <strong>{cuenta.nombre}</strong>
                  <span>
                    {cuenta.telefono ? `${cuenta.telefono} · ` : ''}
                    {cuenta.ultimo_movimiento
                      ? `último movimiento el ${new Date(
                          `${cuenta.ultimo_movimiento.replace(' ', 'T')}Z`,
                        ).toLocaleDateString('es-AR')}`
                      : 'sin movimientos'}
                  </span>
                </div>

                <Monto data-signo={cuenta.saldo_centavos > 0 ? 'menos' : 'mas'}>
                  {cuenta.saldo_centavos > 0 ? mostrarCentavos(cuenta.saldo_centavos) : 'Al día'}
                </Monto>

                <Accion type="button" onClick={() => abrirCuenta(cuenta)}>
                  Ver
                </Accion>
              </Fila>
            ))}
          </Lista>
        )}
      </Panel>

      {abierta ? (
        <Panel>
          <TituloPanel>
            <HandCoins size={16} aria-hidden="true" />
            {abierta.nombre} · debe {mostrarCentavos(abierta.saldo_centavos)}
          </TituloPanel>

          <Formulario>
            <Campo>
              <span>Cuánto te paga</span>
              <input
                value={montoPago}
                onChange={(evento) => setMontoPago(evento.target.value)}
                inputMode="decimal"
                placeholder="0,00"
              />
            </Campo>

            <Campo>
              <span>Cómo te paga</span>
              <select
                value={metodoPago}
                onChange={(evento) => setMetodoPago(evento.target.value as MetodoPago)}
              >
                <option value="efectivo">Efectivo</option>
                <option value="transferencia">Transferencia</option>
                <option value="tarjeta">Tarjeta</option>
              </select>
            </Campo>

            <Accion type="button" data-tono="fuerte" onClick={cobrar} disabled={guardando}>
              Anotar el pago
            </Accion>
          </Formulario>

          {movimientos.length === 0 ? (
            <Vacio>Sin movimientos todavía.</Vacio>
          ) : (
            <Lista>
              {movimientos.map((mov) => (
                <Fila key={mov.id}>
                  <div>
                    <strong>
                      {mov.venta_numero ? `Se llevó (venta #${mov.venta_numero})` : 'Pagó'}
                    </strong>
                    <span>
                      {new Date(`${mov.creado_en.replace(' ', 'T')}Z`).toLocaleDateString('es-AR')}
                      {mov.concepto ? ` · ${mov.concepto}` : ''}
                    </span>
                  </div>

                  <Monto data-signo={mov.monto_centavos > 0 ? 'menos' : 'mas'}>
                    {mov.monto_centavos > 0 ? '+' : '−'}
                    {mostrarCentavos(Math.abs(mov.monto_centavos))}
                  </Monto>
                </Fila>
              ))}
            </Lista>
          )}
        </Panel>
      ) : null}

      <Panel>
        <TituloPanel>
          <UserPlus size={16} aria-hidden="true" />
          Abrir una cuenta nueva
        </TituloPanel>

        <Formulario>
          <Campo>
            <span>Cómo le decís</span>
            <input
              value={nombreNueva}
              onChange={(evento) => setNombreNueva(evento.target.value)}
              placeholder="Fiado Diego, Colegio San José…"
            />
          </Campo>

          <Campo>
            <span>Teléfono</span>
            <input
              value={telefonoNueva}
              onChange={(evento) => setTelefonoNueva(evento.target.value)}
              inputMode="tel"
              placeholder="Para avisarle cuando hay que cobrar"
            />
          </Campo>

          <Accion type="button" onClick={crear} disabled={guardando}>
            <Plus size={15} aria-hidden="true" /> Crear
          </Accion>
        </Formulario>
      </Panel>
    </GestionFrame>
  );
}
