/**
 * Compras y proveedores.
 *
 * El otro lado del mostrador: lo que entra al negocio y lo que se le debe a
 * quien lo trajo. Cargar la compra es lo que mantiene el costo al día sin
 * que nadie tenga que escribirlo dos veces, y de ese costo sale la ganancia
 * que muestran los informes.
 */
import { useCallback, useEffect, useState } from 'react';
import { PackagePlus, Truck } from 'lucide-react';

import {
  type CompraApi,
  type MetodoPago,
  type ProductoMostradorApi,
  type ProveedorApi,
  comprasApi,
  gestionApi,
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
import { Buscador, Resultado, Resultados } from './CajaRapidaScreenStyled';

interface LineaCompra {
  clave: string;
  productoId: string | null;
  nombre: string;
  /** Unidades enteras: una compra se recibe por bulto, no por gramo. */
  cantidad: number;
  costoCentavos: number;
}

const fecha = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' });

export function ComprasScreen() {
  const [compras, setCompras] = useState<CompraApi[]>([]);
  const [totales, setTotales] = useState<{
    cantidad: number;
    total: number;
    pagado: number;
    adeudado: number;
  } | null>(null);
  const [proveedores, setProveedores] = useState<ProveedorApi[]>([]);
  const [deudaTotal, setDeudaTotal] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [aviso, setAviso] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  const [pago, setPago] = useState<'' | 'pagada' | 'debe'>('');

  /* La compra que se está cargando. */
  const [proveedorElegido, setProveedorElegido] = useState('');
  const [comprobante, setComprobante] = useState('');
  const [lineas, setLineas] = useState<LineaCompra[]>([]);
  const [termino, setTermino] = useState('');
  const [resultados, setResultados] = useState<ProductoMostradorApi[]>([]);
  const [pagoAhora, setPagoAhora] = useState('');
  const [metodoPago, setMetodoPago] = useState<MetodoPago>('efectivo');

  const [nombreProveedor, setNombreProveedor] = useState('');
  const [telefonoProveedor, setTelefonoProveedor] = useState('');

  const total = lineas.reduce((suma, l) => suma + l.costoCentavos * l.cantidad, 0);

  const traer = useCallback(async () => {
    setCargando(true);

    try {
      const [lista, provs] = await Promise.all([
        comprasApi.listar({ pago: pago || undefined }),
        comprasApi.proveedores(),
      ]);

      setCompras(lista.compras);
      setTotales(lista.totales);
      setProveedores(provs.proveedores);
      setDeudaTotal(provs.totalDeuda);
    } catch {
      setAviso('No pudimos traer las compras. Probá de nuevo.');
    } finally {
      setCargando(false);
    }
  }, [pago]);

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
        /* Arranca con el último costo conocido: lo normal es que cambie
           poco, y así hay menos que escribir. */
        costoCentavos: producto.costo_centavos ?? 0,
      },
    ]);
    setTermino('');
    setResultados([]);
  };

  const cambiar = (clave: string, campo: 'cantidad' | 'costoCentavos', valor: number) => {
    setLineas((previas) =>
      previas.map((l) => (l.clave === clave ? { ...l, [campo]: valor } : l)),
    );
  };

  const registrar = async () => {
    if (lineas.length === 0) {
      setAviso('Agregá lo que compraste');
      return;
    }

    if (lineas.some((l) => l.costoCentavos <= 0)) {
      setAviso('Poné cuánto te salió cada cosa');
      return;
    }

    const pagoCentavos = pagoAhora ? leerCentavos(pagoAhora) : 0;

    if (pagoCentavos === null) {
      setAviso('Ese importe no se entiende');
      return;
    }

    setGuardando(true);
    setAviso(null);

    try {
      const compra = await comprasApi.crear({
        proveedorId: proveedorElegido || undefined,
        comprobante: comprobante || undefined,
        items: lineas.map((l) => ({
          productoId: l.productoId,
          nombre: l.nombre,
          cantidadMilesimos: l.cantidad * 1000,
          costoCentavos: l.costoCentavos,
        })),
        pagos: pagoCentavos > 0 ? [{ metodo: metodoPago, montoCentavos: pagoCentavos }] : [],
      });

      setAviso(
        `Compra #${compra.numero} cargada por ${mostrarCentavos(compra.total_centavos)}. El stock y el costo quedaron al día.`,
      );
      setLineas([]);
      setComprobante('');
      setPagoAhora('');
      await traer();
    } catch (fallo) {
      setAviso(fallo instanceof Error ? fallo.message : 'No pudimos cargar la compra');
    } finally {
      setGuardando(false);
    }
  };

  const crearProveedor = async () => {
    const nombre = nombreProveedor.trim();

    if (nombre.length < 2) {
      setAviso('Poné el nombre del proveedor');
      return;
    }

    setGuardando(true);

    try {
      await comprasApi.crearProveedor({ nombre, telefono: telefonoProveedor || undefined });
      setNombreProveedor('');
      setTelefonoProveedor('');
      await traer();
    } catch (fallo) {
      setAviso(fallo instanceof Error ? fallo.message : 'No pudimos crear el proveedor');
    } finally {
      setGuardando(false);
    }
  };

  return (
    <GestionFrame titulo="Compras">
      {aviso ? <Aviso role="status">{aviso}</Aviso> : null}

      <Totales>
        <Total>
          <span>Compras</span>
          <strong>{totales?.cantidad ?? '—'}</strong>
        </Total>

        <Total>
          <span>Compraste por</span>
          <strong>{totales ? mostrarCentavos(totales.total) : '—'}</strong>
        </Total>

        <Total data-tono="debe">
          <span>Debés</span>
          <strong>{mostrarCentavos(deudaTotal)}</strong>
        </Total>

        <Total>
          <span>Proveedores</span>
          <strong>{proveedores.filter((p) => p.activo).length}</strong>
        </Total>
      </Totales>

      <Panel>
        <TituloPanel>
          <PackagePlus size={16} aria-hidden="true" />
          Cargar lo que llegó
        </TituloPanel>

        <Formulario>
          <Campo>
            <span>De quién</span>
            <select
              value={proveedorElegido}
              onChange={(evento) => setProveedorElegido(evento.target.value)}
            >
              <option value="">Sin proveedor</option>
              {proveedores
                .filter((p) => p.activo)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nombre}
                  </option>
                ))}
            </select>
          </Campo>

          <Campo>
            <span>Número de factura</span>
            <input
              value={comprobante}
              onChange={(evento) => setComprobante(evento.target.value)}
              placeholder="A-0001-00012345"
            />
          </Campo>
        </Formulario>

        <Buscador>
          <input
            value={termino}
            onChange={(evento) => setTermino(evento.target.value)}
            placeholder="Buscá el producto que llegó"
          />
        </Buscador>

        {resultados.length > 0 ? (
          <Resultados>
            {resultados.map((producto) => (
              <Resultado key={producto.id} type="button" onClick={() => agregar(producto)}>
                <strong>{producto.nombre}</strong>
                <span>
                  te salía {mostrarCentavos(producto.costo_centavos ?? 0)}
                  {producto.stock !== null ? ` · quedan ${producto.stock}` : ''}
                </span>
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
                  <span>{mostrarCentavos(linea.costoCentavos * linea.cantidad)} en total</span>
                </div>

                <Campo>
                  <span>Cuántos</span>
                  <input
                    type="number"
                    min="1"
                    value={linea.cantidad}
                    onChange={(evento) =>
                      cambiar(linea.clave, 'cantidad', Math.max(1, Number(evento.target.value)))
                    }
                  />
                </Campo>

                <Campo>
                  <span>Cuánto salió cada uno</span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={linea.costoCentavos / 100}
                    onChange={(evento) =>
                      cambiar(
                        linea.clave,
                        'costoCentavos',
                        Math.round(Number(evento.target.value) * 100),
                      )
                    }
                  />
                </Campo>

                <Accion
                  type="button"
                  onClick={() => setLineas((p) => p.filter((l) => l.clave !== linea.clave))}
                >
                  Sacar
                </Accion>
              </Fila>
            ))}
          </Lista>
        )}

        <Formulario>
          <Campo>
            <span>Cuánto pagaste ahora</span>
            <input
              value={pagoAhora}
              onChange={(evento) => setPagoAhora(evento.target.value)}
              inputMode="decimal"
              placeholder={`0,00 de ${mostrarCentavos(total)}`}
            />
          </Campo>

          <Campo>
            <span>Cómo pagaste</span>
            <select
              value={metodoPago}
              onChange={(evento) => setMetodoPago(evento.target.value as MetodoPago)}
            >
              <option value="efectivo">Efectivo</option>
              <option value="transferencia">Transferencia</option>
              <option value="cheque">Cheque</option>
            </select>
          </Campo>

          <Accion type="button" data-tono="fuerte" onClick={registrar} disabled={guardando}>
            Cargar por {mostrarCentavos(total)}
          </Accion>
        </Formulario>
      </Panel>

      <Panel>
        <TituloPanel>
          <Truck size={16} aria-hidden="true" />
          Lo que compraste
        </TituloPanel>

        <BarraFiltros>
          <Campo>
            <span>Cómo está</span>
            <select
              value={pago}
              onChange={(evento) => setPago(evento.target.value as '' | 'pagada' | 'debe')}
            >
              <option value="">Todas</option>
              <option value="pagada">Pagadas</option>
              <option value="debe">Falta pagar</option>
            </select>
          </Campo>
        </BarraFiltros>

        {cargando ? (
          <Vacio>Buscando…</Vacio>
        ) : compras.length === 0 ? (
          <Vacio>Todavía no cargaste ninguna compra.</Vacio>
        ) : (
          <Marco>
            <Desplazable>
              <Tabla>
                <thead>
                  <tr>
                    <th scope="col">Número</th>
                    <th scope="col">Cuándo</th>
                    <th scope="col">Proveedor</th>
                    <th scope="col">Factura</th>
                    <th scope="col">Total</th>
                    <th scope="col">Pagaste</th>
                    <th scope="col">Debés</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>

                <tbody>
                  {compras.map((compra) => {
                    const debe = compra.total_centavos - compra.pagado_centavos;

                    return (
                      <tr key={compra.id}>
                        <td data-etiqueta="Número">#{compra.numero}</td>
                        <td data-etiqueta="Cuándo">{fecha(compra.fecha)}</td>
                        <td data-etiqueta="Proveedor">{compra.proveedor_nombre || '—'}</td>
                        <td data-etiqueta="Factura">{compra.comprobante || '—'}</td>
                        <td data-etiqueta="Total" data-tipo="numero">
                          {mostrarCentavos(compra.total_centavos)}
                        </td>
                        <td data-etiqueta="Pagaste" data-tipo="numero">
                          {mostrarCentavos(compra.pagado_centavos)}
                        </td>
                        <td data-etiqueta="Debés" data-tipo="numero">
                          {debe > 0 ? mostrarCentavos(debe) : '—'}
                        </td>
                        <td data-etiqueta="Estado">
                          <Etiqueta data-tono={debe > 0 ? 'espera' : 'bien'}>
                            {debe > 0 ? 'Falta pagar' : 'Pagada'}
                          </Etiqueta>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Tabla>
            </Desplazable>
          </Marco>
        )}
      </Panel>

      <Panel>
        <TituloPanel>
          <Truck size={16} aria-hidden="true" />
          A quién le comprás
        </TituloPanel>

        {proveedores.length > 0 ? (
          <Lista>
            {proveedores.map((p) => (
              <Fila key={p.id}>
                <div>
                  <strong>{p.nombre}</strong>
                  <span>
                    {p.telefono ? `${p.telefono} · ` : ''}
                    {p.compras} {p.compras === 1 ? 'compra' : 'compras'}
                  </span>
                </div>

                <Monto data-signo={p.deuda_centavos > 0 ? 'menos' : 'mas'}>
                  {p.deuda_centavos > 0 ? mostrarCentavos(p.deuda_centavos) : 'Al día'}
                </Monto>
              </Fila>
            ))}
          </Lista>
        ) : null}

        <Formulario>
          <Campo>
            <span>Nombre</span>
            <input
              value={nombreProveedor}
              onChange={(evento) => setNombreProveedor(evento.target.value)}
              placeholder="Distribuidora del Centro"
            />
          </Campo>

          <Campo>
            <span>Teléfono</span>
            <input
              value={telefonoProveedor}
              onChange={(evento) => setTelefonoProveedor(evento.target.value)}
              inputMode="tel"
              placeholder="Para pedirle mercadería"
            />
          </Campo>

          <Accion type="button" onClick={crearProveedor} disabled={guardando}>
            Agregar
          </Accion>
        </Formulario>
      </Panel>
    </GestionFrame>
  );
}
