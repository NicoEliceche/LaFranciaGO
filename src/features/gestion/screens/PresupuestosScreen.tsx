/**
 * Los presupuestos.
 *
 * Una venta que todavía no pasó: se arma la lista con precios, se la pasa al
 * cliente, y si acepta se convierte en venta. Mientras tanto no toca stock
 * ni caja, porque un presupuesto no es plata sino una promesa.
 *
 * El vencimiento no es un detalle: con inflación, respetar un precio de hace
 * un mes es perder plata sin darse cuenta.
 */
import { useCallback, useEffect, useState } from 'react';
import { FileText, Trash2 } from 'lucide-react';

import {
  type ClienteApi,
  type PresupuestoApi,
  type ProductoMostradorApi,
  clientesApi,
  gestionApi,
  presupuestosApi,
} from '@core/data/services/apiClient';

import { GestionFrame } from '../components/GestionFrame';
import {
  BarraFiltros,
  Desplazable,
  Etiqueta,
  Marco,
  Tabla,
  Total,
  Totales,
} from '../components/TablaStyled';
import { mostrarCentavos } from '../dinero';
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
import { Buscador, Quitar, Resultado, Resultados } from './CajaRapidaScreenStyled';

interface LineaPresupuesto {
  clave: string;
  productoId: string;
  nombre: string;
  cantidad: number;
  precioCentavos: number;
}

const fecha = (iso: string) =>
  new Date(`${iso.length > 10 ? iso.replace(' ', 'T') + 'Z' : `${iso}T12:00:00`}`).toLocaleDateString(
    'es-AR',
    { day: '2-digit', month: '2-digit' },
  );

export function PresupuestosScreen() {
  const [presupuestos, setPresupuestos] = useState<PresupuestoApi[]>([]);
  const [totales, setTotales] = useState<{
    cantidad: number;
    pendiente: number;
    aceptado: number;
  } | null>(null);
  const [clientes, setClientes] = useState<ClienteApi[]>([]);
  const [cargando, setCargando] = useState(true);
  const [aviso, setAviso] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  const [filtro, setFiltro] = useState<'' | 'pendiente' | 'aceptado' | 'rechazado'>('');

  const [clienteElegido, setClienteElegido] = useState('');
  const [nombreSuelto, setNombreSuelto] = useState('');
  const [dias, setDias] = useState('7');
  const [lineas, setLineas] = useState<LineaPresupuesto[]>([]);
  const [termino, setTermino] = useState('');
  const [resultados, setResultados] = useState<ProductoMostradorApi[]>([]);

  const total = lineas.reduce((suma, l) => suma + l.precioCentavos * l.cantidad, 0);

  const traer = useCallback(async () => {
    setCargando(true);

    try {
      const [lista, clis] = await Promise.all([
        presupuestosApi.listar(filtro || undefined),
        clientesApi.listar(),
      ]);

      setPresupuestos(lista.presupuestos);
      setTotales(lista.totales);
      setClientes(clis.clientes);
    } catch {
      setAviso('No pudimos traer los presupuestos. Probá de nuevo.');
    } finally {
      setCargando(false);
    }
  }, [filtro]);

  useEffect(() => {
    void traer();
  }, [traer]);

  useEffect(() => {
    if (termino.trim().length < 2) {
      setResultados([]);
      return;
    }

    const id = window.setTimeout(() => {
      void gestionApi
        .buscar(termino.trim())
        .then((datos) => setResultados(datos.productos))
        .catch(() => setResultados([]));
    }, 220);

    return () => window.clearTimeout(id);
  }, [termino]);

  const agregar = (producto: ProductoMostradorApi) => {
    setLineas((previas) => [
      ...previas,
      {
        clave: `${producto.id}-${Date.now()}`,
        productoId: producto.id,
        nombre: producto.nombre,
        cantidad: 1,
        precioCentavos: producto.precio_centavos,
      },
    ]);
    setTermino('');
    setResultados([]);
  };

  const armar = async () => {
    if (lineas.length === 0) {
      setAviso('Agregá lo que le vas a presupuestar');
      return;
    }

    setGuardando(true);
    setAviso(null);

    try {
      const creado = await presupuestosApi.crear({
        items: lineas.map((l) => ({
          productoId: l.productoId,
          cantidadMilesimos: l.cantidad * 1000,
          precioCentavos: l.precioCentavos,
        })),
        clienteId: clienteElegido || undefined,
        clienteNombre:
          nombreSuelto ||
          clientes.find((c) => c.id === clienteElegido)?.nombre ||
          undefined,
        diasValidez: Number(dias) || 7,
      });

      setAviso(
        `Presupuesto #${creado.numero} por ${mostrarCentavos(creado.total_centavos)}, vale ${creado.dias} días.`,
      );
      setLineas([]);
      setNombreSuelto('');
      await traer();
    } catch (fallo) {
      setAviso(fallo instanceof Error ? fallo.message : 'No pudimos armar el presupuesto');
    } finally {
      setGuardando(false);
    }
  };

  const aceptar = async (presupuesto: PresupuestoApi, igualmente = false) => {
    setGuardando(true);
    setAviso(null);

    try {
      const venta = await presupuestosApi.aceptar(presupuesto.id, {
        pagos: [{ metodo: 'efectivo', montoCentavos: presupuesto.total_centavos }],
        igualmente,
      });

      setAviso(`Se convirtió en la venta #${venta.numero}.`);
      await traer();
    } catch (fallo) {
      const mensaje = fallo instanceof Error ? fallo.message : 'No pudimos aceptarlo';

      /* Si venció, se ofrece respetarlo igual en vez de dejar a la persona
         sin salida: la decisión es del comercio, pero tiene que ser a
         propósito. */
      if (mensaje.includes('vencio')) {
        setAviso(`${mensaje} Tocá "Aceptar igual" si querés respetarlo.`);
      } else {
        setAviso(mensaje);
      }
    } finally {
      setGuardando(false);
    }
  };

  const rechazar = async (id: string) => {
    setGuardando(true);

    try {
      await presupuestosApi.rechazar(id);
      await traer();
    } catch (fallo) {
      setAviso(fallo instanceof Error ? fallo.message : 'No pudimos rechazarlo');
    } finally {
      setGuardando(false);
    }
  };

  return (
    <GestionFrame titulo="Presupuestos">
      {aviso ? <Aviso role="status">{aviso}</Aviso> : null}

      <Totales>
        <Total>
          <span>Presupuestos</span>
          <strong>{totales?.cantidad ?? '—'}</strong>
        </Total>

        <Total data-tono="debe">
          <span>Esperando respuesta</span>
          <strong>{totales ? mostrarCentavos(totales.pendiente) : '—'}</strong>
        </Total>

        <Total data-tono="cobrado">
          <span>Se convirtieron en venta</span>
          <strong>{totales ? mostrarCentavos(totales.aceptado) : '—'}</strong>
        </Total>

        <Total>
          <span>Vencidos sin respuesta</span>
          <strong>{presupuestos.filter((p) => p.vencido).length}</strong>
        </Total>
      </Totales>

      <Panel>
        <TituloPanel>
          <FileText size={16} aria-hidden="true" />
          Armar uno nuevo
        </TituloPanel>

        <Formulario>
          <Campo>
            <span>Para quién</span>
            <select
              value={clienteElegido}
              onChange={(evento) => setClienteElegido(evento.target.value)}
            >
              <option value="">Alguien que no es cliente todavía</option>
              {clientes.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nombre}
                </option>
              ))}
            </select>
          </Campo>

          {!clienteElegido ? (
            <Campo>
              <span>Su nombre</span>
              <input
                value={nombreSuelto}
                onChange={(evento) => setNombreSuelto(evento.target.value)}
                placeholder="Cómo se llama"
              />
            </Campo>
          ) : null}

          <Campo>
            <span>Cuántos días vale</span>
            <select value={dias} onChange={(evento) => setDias(evento.target.value)}>
              <option value="3">3 días</option>
              <option value="7">Una semana</option>
              <option value="15">15 días</option>
              <option value="30">Un mes</option>
            </select>
          </Campo>
        </Formulario>

        <Buscador>
          <input
            value={termino}
            onChange={(evento) => setTermino(evento.target.value)}
            placeholder="Buscá lo que le vas a presupuestar"
          />
        </Buscador>

        {resultados.length > 0 ? (
          <Resultados>
            {resultados.map((producto) => (
              <Resultado key={producto.id} type="button" onClick={() => agregar(producto)}>
                <strong>{producto.nombre}</strong>
                <span>{mostrarCentavos(producto.precio_centavos)}</span>
              </Resultado>
            ))}
          </Resultados>
        ) : null}

        {lineas.length === 0 ? (
          <Vacio>Todavía no agregaste nada.</Vacio>
        ) : (
          <Lista>
            {lineas.map((linea) => (
              <Fila key={linea.clave}>
                <div>
                  <strong>{linea.nombre}</strong>
                  <span>{mostrarCentavos(linea.precioCentavos)} cada uno</span>
                </div>

                <Campo>
                  <span>Cuántos</span>
                  <input
                    type="number"
                    min="1"
                    value={linea.cantidad}
                    onChange={(evento) =>
                      setLineas((p) =>
                        p.map((l) =>
                          l.clave === linea.clave
                            ? { ...l, cantidad: Math.max(1, Number(evento.target.value)) }
                            : l,
                        ),
                      )
                    }
                  />
                </Campo>

                <Quitar
                  type="button"
                  onClick={() => setLineas((p) => p.filter((l) => l.clave !== linea.clave))}
                  aria-label={`Sacar ${linea.nombre}`}
                >
                  <Trash2 size={15} aria-hidden="true" />
                </Quitar>
              </Fila>
            ))}
          </Lista>
        )}

        <Formulario>
          <Accion type="button" data-tono="fuerte" onClick={armar} disabled={guardando}>
            Armar por {mostrarCentavos(total)}
          </Accion>
        </Formulario>
      </Panel>

      <Panel>
        <TituloPanel>
          <FileText size={16} aria-hidden="true" />
          Los que hiciste
        </TituloPanel>

        <BarraFiltros>
          <Campo>
            <span>Cómo están</span>
            <select
              value={filtro}
              onChange={(evento) =>
                setFiltro(evento.target.value as '' | 'pendiente' | 'aceptado' | 'rechazado')
              }
            >
              <option value="">Todos</option>
              <option value="pendiente">Esperando respuesta</option>
              <option value="aceptado">Aceptados</option>
              <option value="rechazado">Rechazados</option>
            </select>
          </Campo>
        </BarraFiltros>

        {cargando ? (
          <Vacio>Buscando…</Vacio>
        ) : presupuestos.length === 0 ? (
          <Vacio>Todavía no armaste ninguno.</Vacio>
        ) : (
          <Marco>
            <Desplazable>
              <Tabla>
                <thead>
                  <tr>
                    <th scope="col">Número</th>
                    <th scope="col">Para quién</th>
                    <th scope="col">Total</th>
                    <th scope="col">Hasta cuándo</th>
                    <th scope="col">Cómo está</th>
                    <th scope="col"> </th>
                  </tr>
                </thead>

                <tbody>
                  {presupuestos.map((p) => (
                    <tr key={p.id}>
                      <td data-etiqueta="Número">#{p.numero}</td>
                      <td data-etiqueta="Para quién">
                        {p.cliente_ficha_nombre || p.cliente_nombre || '—'}
                      </td>
                      <td data-etiqueta="Total" data-tipo="numero">
                        {mostrarCentavos(p.total_centavos)}
                      </td>
                      <td data-etiqueta="Hasta cuándo">{fecha(p.vence_el)}</td>
                      <td data-etiqueta="Cómo está">
                        <Etiqueta
                          data-tono={
                            p.estado === 'aceptado'
                              ? 'bien'
                              : p.estado === 'rechazado'
                                ? 'mal'
                                : p.vencido
                                  ? 'mal'
                                  : 'espera'
                          }
                        >
                          {p.estado === 'aceptado'
                            ? 'Aceptado'
                            : p.estado === 'rechazado'
                              ? 'Rechazado'
                              : p.vencido
                                ? 'Venció'
                                : 'Esperando'}
                        </Etiqueta>
                      </td>
                      <td data-etiqueta=" ">
                        {p.estado === 'pendiente' ? (
                          <>
                            <Accion
                              type="button"
                              data-tono="fuerte"
                              onClick={() => aceptar(p, Boolean(p.vencido))}
                              disabled={guardando}
                            >
                              {p.vencido ? 'Aceptar igual' : 'Aceptar'}
                            </Accion>{' '}
                            <Accion type="button" onClick={() => rechazar(p.id)} disabled={guardando}>
                              No va
                            </Accion>
                          </>
                        ) : (
                          '—'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Tabla>
            </Desplazable>
          </Marco>
        )}
      </Panel>
    </GestionFrame>
  );
}
