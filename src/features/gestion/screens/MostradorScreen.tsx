/**
 * La configuración de esta computadora.
 *
 * Es lo único del sistema que no es igual en todos lados: qué impresora usa
 * esta caja, cómo se llama, y qué ventas le quedaron por subir.
 *
 * Se ve desde cualquier lado —así el comercio sabe que existe— pero sólo
 * tiene algo para configurar en la computadora del negocio.
 */
import { useCallback, useEffect, useState } from 'react';
import { CloudOff, Cpu, Monitor, Printer, RefreshCw } from 'lucide-react';

import { GestionFrame } from '../components/GestionFrame';
import { RevisionEquipo } from '../components/RevisionEquipo';
import { Total, Totales } from '../components/TablaStyled';
import { type AjustesEscritorio, esEscritorio } from '../entorno';
import {
  Accion,
  Aviso,
  Campo,
  Fila,
  Formulario,
  Lista,
  Panel,
  TituloPanel,
  Vacio,
} from './CajaScreenStyled';

interface Impresora {
  nombre: string;
  predeterminada: boolean;
}

interface Pendientes {
  cantidad: number;
  masVieja: string | null;
  conError: number;
}

const cuando = (iso: string | null) =>
  iso ? new Date(iso).toLocaleString('es-AR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }) : '—';

export function MostradorScreen() {
  const enMostrador = esEscritorio();

  const [ajustes, setAjustes] = useState<AjustesEscritorio | null>(null);
  const [impresoras, setImpresoras] = useState<Impresora[]>([]);
  const [pendientes, setPendientes] = useState<Pendientes | null>(null);
  const [version, setVersion] = useState<string>('');
  const [aviso, setAviso] = useState<string | null>(null);
  const [trabajando, setTrabajando] = useState(false);

  const traer = useCallback(async () => {
    const escritorio = window.lafranciagoEscritorio;

    if (!escritorio) return;

    try {
      const [config, lista, cola, info] = await Promise.all([
        escritorio.ajustes?.() ?? Promise.resolve(null),
        escritorio.impresoras?.() ?? Promise.resolve([]),
        escritorio.pendientes?.() ?? Promise.resolve(null),
        escritorio.info?.() ?? Promise.resolve(null),
      ]);

      if (config) setAjustes(config);
      setImpresoras(lista);
      setPendientes(cola);
      if (info) setVersion(info.version);
    } catch {
      setAviso('No pudimos leer la configuración de esta computadora.');
    }
  }, []);

  useEffect(() => {
    void traer();

    /* Las pendientes cambian solas cuando vuelve internet: sin refrescar,
       la pantalla diría que hay cinco esperando cuando ya subieron. */
    const id = window.setInterval(() => void traer(), 15_000);

    return () => window.clearInterval(id);
  }, [traer]);

  const guardar = async (cambios: Partial<AjustesEscritorio>) => {
    const escritorio = window.lafranciagoEscritorio;

    if (!escritorio?.guardarAjustes) return;

    setTrabajando(true);

    try {
      const guardados = await escritorio.guardarAjustes(cambios);

      setAjustes(guardados);
      setAviso('Listo, quedó guardado.');
    } catch {
      setAviso('No pudimos guardar el cambio.');
    } finally {
      setTrabajando(false);
    }
  };

  const probar = async () => {
    const escritorio = window.lafranciagoEscritorio;

    if (!escritorio?.probarImpresora) return;

    setTrabajando(true);
    setAviso(null);

    try {
      const salida = await escritorio.probarImpresora(ajustes?.impresora);

      setAviso(
        salida.ok
          ? 'Mandamos una hoja de prueba. Fijate si salió.'
          : `No se pudo imprimir: ${salida.error}`,
      );
    } finally {
      setTrabajando(false);
    }
  };

  const subirAhora = async () => {
    const escritorio = window.lafranciagoEscritorio;

    if (!escritorio?.sincronizar) return;

    setTrabajando(true);
    setAviso(null);

    try {
      const salida = await escritorio.sincronizar();

      setAviso(
        salida.subidas > 0
          ? `Subieron ${salida.subidas} ventas. Quedan ${salida.pendientes}.`
          : salida.pendientes > 0
            ? 'No pudimos subirlas todavía. Reintenta solo cuando vuelva internet.'
            : 'No había nada esperando.',
      );
      await traer();
    } finally {
      setTrabajando(false);
    }
  };

  if (!enMostrador) {
    return (
      <GestionFrame titulo="Este mostrador">
        <Aviso role="note">
          Acá se configura la computadora del negocio: qué impresora usa, cómo se llama esa caja y
          qué ventas le quedaron por subir. Se ve desde cualquier lado, pero sólo hay algo para
          tocar en la computadora del local.
        </Aviso>

        <Panel>
          <TituloPanel>
            <Monitor size={16} aria-hidden="true" />
            Qué se configura ahí
          </TituloPanel>

          <Lista>
            <Fila>
              <div>
                <strong>La impresora del ticket</strong>
                <span>Cuál de las que tiene Windows, y si abre el cajón al imprimir</span>
              </div>
            </Fila>

            <Fila>
              <div>
                <strong>El nombre de la caja</strong>
                <span>Va adelante del número de venta, para que dos cajas no lo repitan</span>
              </div>
            </Fila>

            <Fila>
              <div>
                <strong>Las ventas que esperan subir</strong>
                <span>Cuando no hay internet quedan guardadas y suben solas al volver</span>
              </div>
            </Fila>
          </Lista>
        </Panel>
      </GestionFrame>
    );
  }

  return (
    <GestionFrame titulo="Este mostrador">
      {aviso ? <Aviso role="status">{aviso}</Aviso> : null}

      <Totales>
        <Total data-tono={pendientes?.cantidad ? 'debe' : 'cobrado'}>
          <span>Ventas esperando subir</span>
          <strong>{pendientes?.cantidad ?? 0}</strong>
        </Total>

        <Total>
          <span>La más vieja</span>
          <strong style={{ fontSize: '0.95rem' }}>{cuando(pendientes?.masVieja ?? null)}</strong>
        </Total>

        <Total data-tono={pendientes?.conError ? 'debe' : undefined}>
          <span>Con problema</span>
          <strong>{pendientes?.conError ?? 0}</strong>
        </Total>

        <Total>
          <span>Esta caja</span>
          <strong style={{ fontSize: '1rem' }}>{ajustes?.puesto ?? '—'}</strong>
        </Total>
      </Totales>

      {pendientes && pendientes.cantidad > 0 ? (
        <Panel>
          <TituloPanel>
            <CloudOff size={16} aria-hidden="true" />
            Ventas guardadas en esta computadora
          </TituloPanel>

          <p style={{ margin: '0 0 0.75rem', fontSize: '0.85rem', opacity: 0.75 }}>
            Se hicieron sin internet y todavía no llegaron al sistema. Suben solas cuando vuelve la
            conexión; no hace falta hacer nada.
          </p>

          <Formulario>
            <Accion type="button" onClick={subirAhora} disabled={trabajando} data-tono="fuerte">
              <RefreshCw size={15} aria-hidden="true" /> Intentar ahora
            </Accion>
          </Formulario>
        </Panel>
      ) : null}

      <Panel>
        <TituloPanel>
          <Printer size={16} aria-hidden="true" />
          La impresora del ticket
        </TituloPanel>

        {impresoras.length === 0 ? (
          <Vacio>Windows no ve ninguna impresora instalada.</Vacio>
        ) : (
          <Formulario>
            <Campo>
              <span>Cuál usar</span>
              <select
                value={ajustes?.impresora ?? ''}
                onChange={(evento) => void guardar({ impresora: evento.target.value })}
              >
                <option value="">La que Windows tiene por defecto</option>
                {impresoras.map((i) => (
                  <option key={i.nombre} value={i.nombre}>
                    {i.nombre}
                    {i.predeterminada ? ' (la de siempre)' : ''}
                  </option>
                ))}
              </select>
            </Campo>

            <Accion type="button" onClick={probar} disabled={trabajando}>
              Imprimir una prueba
            </Accion>
          </Formulario>
        )}

        <Formulario>
          <Campo>
            <span>Al terminar la venta</span>
            <select
              value={ajustes?.imprimirSolo ? 'si' : 'no'}
              onChange={(evento) => void guardar({ imprimirSolo: evento.target.value === 'si' })}
            >
              <option value="si">Imprimir el ticket sin preguntar</option>
              <option value="no">No imprimir</option>
            </select>
          </Campo>

          <Campo>
            <span>El cajón de la plata</span>
            <select
              value={ajustes?.abrirCajon ? 'si' : 'no'}
              onChange={(evento) => void guardar({ abrirCajon: evento.target.value === 'si' })}
            >
              <option value="si">Se abre al imprimir</option>
              <option value="no">No se abre</option>
            </select>
          </Campo>
        </Formulario>
      </Panel>

      <Panel>
        <TituloPanel>
          <Monitor size={16} aria-hidden="true" />
          Cómo se llama esta caja
        </TituloPanel>

        <p style={{ margin: '0 0 0.75rem', fontSize: '0.85rem', opacity: 0.75 }}>
          Va adelante del número de cada venta hecha sin internet. Si hay dos cajas, cada una tiene
          que llamarse distinto para que no repitan números.
        </p>

        <Formulario>
          <Campo>
            <span>Nombre</span>
            <input
              defaultValue={ajustes?.puesto ?? ''}
              onBlur={(evento) => {
                const nuevo = evento.target.value.trim().toUpperCase();

                if (nuevo && nuevo !== ajustes?.puesto) void guardar({ puesto: nuevo });
              }}
              placeholder="CAJA1"
            />
          </Campo>
        </Formulario>

        {version ? (
          <p style={{ margin: '0.75rem 0 0', fontSize: '0.78rem', opacity: 0.6 }}>
            LaFranciaGO {version}
          </p>
        ) : null}
      </Panel>

      {/* Último, por orden de importancia: que la impresora y la lectora
          anden es lo que decide si hoy se puede cobrar. Que la computadora
          sea lenta molesta, pero no frena la venta. */}
      {enMostrador ? (
        <Panel>
          <TituloPanel>
            <Cpu size={16} aria-hidden="true" />
            Cómo anda esta computadora
          </TituloPanel>

          <RevisionEquipo />
        </Panel>
      ) : null}
    </GestionFrame>
  );
}
