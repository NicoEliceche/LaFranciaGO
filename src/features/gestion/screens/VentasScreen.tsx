/**
 * El listado de ventas.
 *
 * Es el patrón que se repite en todo el sistema: totales arriba que
 * responden al filtro —no al negocio entero, porque si no el número de
 * arriba no explica la tabla de abajo—, filtros, y una tabla con acciones.
 *
 * En el teléfono la tabla se convierte en fichas: catorce columnas en 375px
 * no se leen de ninguna manera.
 */
import { useCallback, useEffect, useState } from 'react';

import {
  type TotalesVentasApi,
  type VentaApi,
  gestionApi,
} from '@core/data/services/apiClient';
import { mostrarCentavos } from '../dinero';

import { GestionFrame } from '../components/GestionFrame';
import {
  BarraFiltros,
  BotonPagina,
  Campo,
  Desplazable,
  Etiqueta,
  Marco,
  Pie,
  Tabla,
  Total,
  Totales,
} from '../components/TablaStyled';
import { Aviso, Vacio } from './CajaScreenStyled';

const NOMBRE_METODO: Record<string, string> = {
  efectivo: 'Efectivo',
  transferencia: 'Transferencia',
  tarjeta: 'Tarjeta',
  cheque: 'Cheque',
  cuenta_corriente: 'Fiado',
};

/** Los métodos llegan del backend como "efectivo,tarjeta". */
const leerMetodos = (crudo: string | null) =>
  (crudo ?? '')
    .split(',')
    .filter(Boolean)
    .map((m) => NOMBRE_METODO[m] ?? m)
    .join(' · ');

const fecha = (iso: string) =>
  new Date(`${iso.replace(' ', 'T')}Z`).toLocaleString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

export function VentasScreen() {
  const [ventas, setVentas] = useState<VentaApi[]>([]);
  const [totales, setTotales] = useState<TotalesVentasApi | null>(null);
  const [cargando, setCargando] = useState(true);
  const [aviso, setAviso] = useState<string | null>(null);

  const [desde, setDesde] = useState('');
  const [hasta, setHasta] = useState('');
  const [pago, setPago] = useState<'' | 'cobrada' | 'debe'>('');
  const [busqueda, setBusqueda] = useState('');
  const [pagina, setPagina] = useState(1);

  const porPagina = 25;

  const traer = useCallback(async () => {
    setCargando(true);
    setAviso(null);

    try {
      const datos = await gestionApi.ventas({
        desde: desde || undefined,
        hasta: hasta || undefined,
        pago: pago || undefined,
        q: busqueda || undefined,
        pagina,
        porPagina,
      });

      setVentas(datos.ventas);
      setTotales(datos.totales);
    } catch {
      setAviso('No pudimos traer las ventas. Probá de nuevo.');
    } finally {
      setCargando(false);
    }
  }, [desde, hasta, pago, busqueda, pagina]);

  useEffect(() => {
    void traer();
  }, [traer]);

  /* Al cambiar un filtro se vuelve a la primera página: si no, se queda en
     la cuatro de un resultado que ahora tiene una sola. */
  const cambiarFiltro = (aplicar: () => void) => {
    aplicar();
    setPagina(1);
  };

  const hayMas = totales ? pagina * porPagina < totales.cantidad : false;

  return (
    <GestionFrame titulo="Ventas">
      {aviso ? <Aviso role="status">{aviso}</Aviso> : null}

      <Totales>
        <Total>
          <span>Ventas</span>
          <strong>{totales?.cantidad ?? '—'}</strong>
        </Total>

        <Total data-tono="cobrado">
          <span>Cobrado</span>
          <strong>{totales ? mostrarCentavos(totales.cobrado) : '—'}</strong>
        </Total>

        <Total data-tono="debe">
          <span>Falta cobrar</span>
          <strong>{totales ? mostrarCentavos(totales.adeudado) : '—'}</strong>
        </Total>

        <Total>
          <span>Ganancia</span>
          <strong>{totales ? mostrarCentavos(totales.ganancia) : '—'}</strong>
        </Total>
      </Totales>

      <BarraFiltros>
        <Campo>
          <span>Desde</span>
          <input
            type="date"
            value={desde}
            onChange={(evento) => cambiarFiltro(() => setDesde(evento.target.value))}
          />
        </Campo>

        <Campo>
          <span>Hasta</span>
          <input
            type="date"
            value={hasta}
            onChange={(evento) => cambiarFiltro(() => setHasta(evento.target.value))}
          />
        </Campo>

        <Campo>
          <span>Cómo está</span>
          <select
            value={pago}
            onChange={(evento) =>
              cambiarFiltro(() => setPago(evento.target.value as '' | 'cobrada' | 'debe'))
            }
          >
            <option value="">Todas</option>
            <option value="cobrada">Cobradas</option>
            <option value="debe">Falta cobrar</option>
          </select>
        </Campo>

        <Campo>
          <span>Buscar</span>
          <input
            value={busqueda}
            onChange={(evento) => cambiarFiltro(() => setBusqueda(evento.target.value))}
            placeholder="Número o cliente"
          />
        </Campo>
      </BarraFiltros>

      <Marco>
        <Desplazable>
          <Tabla>
            <thead>
              <tr>
                <th scope="col">Número</th>
                <th scope="col">Cuándo</th>
                <th scope="col">Cliente</th>
                <th scope="col">Quién vendió</th>
                <th scope="col">Cómo pagó</th>
                <th scope="col">Total</th>
                <th scope="col">Cobrado</th>
                <th scope="col">Debe</th>
                <th scope="col">Ganancia</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>

            <tbody>
              {ventas.map((venta) => {
                const debe = venta.total_centavos - venta.cobrado_centavos;
                const ganancia = venta.total_centavos - venta.costo_centavos;

                return (
                  <tr key={venta.id}>
                    <td data-etiqueta="Número">#{venta.numero}</td>
                    <td data-etiqueta="Cuándo">{fecha(venta.creado_en)}</td>
                    <td data-etiqueta="Cliente">{venta.cliente_nombre || 'Mostrador'}</td>
                    <td data-etiqueta="Quién vendió">{venta.vendedor_nombre}</td>
                    <td data-etiqueta="Cómo pagó">{leerMetodos(venta.metodos) || '—'}</td>
                    <td data-etiqueta="Total" data-tipo="numero">
                      {mostrarCentavos(venta.total_centavos)}
                    </td>
                    <td data-etiqueta="Cobrado" data-tipo="numero">
                      {mostrarCentavos(venta.cobrado_centavos)}
                    </td>
                    <td data-etiqueta="Debe" data-tipo="numero">
                      {debe > 0 ? mostrarCentavos(debe) : '—'}
                    </td>
                    <td data-etiqueta="Ganancia" data-tipo="numero">
                      {venta.costo_centavos > 0 ? mostrarCentavos(ganancia) : '—'}
                    </td>
                    <td data-etiqueta="Estado">
                      <Etiqueta data-tono={debe > 0 ? 'espera' : 'bien'}>
                        {debe > 0 ? 'Falta cobrar' : 'Cobrada'}
                      </Etiqueta>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Tabla>
        </Desplazable>

        {cargando ? <Vacio>Buscando…</Vacio> : null}

        {!cargando && ventas.length === 0 ? (
          <Vacio>
            {desde || hasta || pago || busqueda
              ? 'No hay ventas que cumplan con eso.'
              : 'Todavía no vendiste nada por el mostrador.'}
          </Vacio>
        ) : null}

        <Pie>
          <span>
            {totales?.cantidad
              ? `${(pagina - 1) * porPagina + 1} a ${Math.min(pagina * porPagina, totales.cantidad)} de ${totales.cantidad}`
              : 'Sin resultados'}
          </span>

          <BotonPagina
            type="button"
            onClick={() => setPagina((p) => Math.max(1, p - 1))}
            disabled={pagina === 1}
          >
            Anterior
          </BotonPagina>

          <BotonPagina type="button" onClick={() => setPagina((p) => p + 1)} disabled={!hayMas}>
            Siguiente
          </BotonPagina>
        </Pie>
      </Marco>
    </GestionFrame>
  );
}
