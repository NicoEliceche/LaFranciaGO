/**
 * Los informes.
 *
 * La pregunta que responde no es "cuánto vendí" —eso ya está en el
 * listado— sino "cuánto me quedó". Por eso el margen va arriba de todo: es
 * el número que decide qué conviene tener en góndola.
 */
import { useCallback, useEffect, useState } from 'react';
import { PackageSearch, TrendingUp, Wallet } from 'lucide-react';

import { type InformeApi, informesApi } from '@core/data/services/apiClient';

import { GestionFrame } from '../components/GestionFrame';
import {
  BarraFiltros,
  Campo,
  Desplazable,
  Etiqueta,
  Marco,
  Tabla,
  Total,
  Totales,
} from '../components/TablaStyled';
import { mostrarCentavos } from '../dinero';
import { Aviso, Panel, TituloPanel, Vacio } from './CajaScreenStyled';
import { Barra, BarraDia, Grafico } from './InformesScreenStyled';

const NOMBRE_METODO: Record<string, string> = {
  efectivo: 'Efectivo',
  transferencia: 'Transferencia',
  tarjeta: 'Tarjeta',
  cheque: 'Cheque',
  cuenta_corriente: 'Fiado',
};

const dia = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' });

export function InformesScreen() {
  const [informe, setInforme] = useState<InformeApi | null>(null);
  const [reponer, setReponer] = useState<Array<{ id: string; nombre: string; stock: number }>>([]);
  const [cargando, setCargando] = useState(true);
  const [aviso, setAviso] = useState<string | null>(null);

  const [desde, setDesde] = useState('');
  const [hasta, setHasta] = useState('');

  const traer = useCallback(async () => {
    setCargando(true);
    setAviso(null);

    try {
      const [datos, stock] = await Promise.all([
        informesApi.general({ desde: desde || undefined, hasta: hasta || undefined }),
        informesApi.porReponer(5),
      ]);

      setInforme(datos);
      setReponer(stock.productos);
    } catch {
      setAviso('No pudimos armar el informe. Probá de nuevo.');
    } finally {
      setCargando(false);
    }
  }, [desde, hasta]);

  useEffect(() => {
    void traer();
  }, [traer]);

  /* La barra más alta marca la escala; el resto se mide contra ella. */
  const maximo = informe?.porDia.reduce((alto, d) => Math.max(alto, d.total), 0) ?? 0;

  return (
    <GestionFrame titulo="Informes">
      {aviso ? <Aviso role="status">{aviso}</Aviso> : null}

      <Totales>
        <Total>
          <span>Vendiste</span>
          <strong>{informe ? mostrarCentavos(informe.ventas.total) : '—'}</strong>
        </Total>

        <Total data-tono="cobrado">
          <span>Te quedó</span>
          <strong>{informe ? mostrarCentavos(informe.ganancia) : '—'}</strong>
        </Total>

        <Total>
          <span>De cada $100 que vendés</span>
          <strong>
            {informe ? `te quedan $ ${informe.margen.toFixed(0)}` : '—'}
          </strong>
        </Total>

        <Total data-tono="debe">
          <span>Le debés a proveedores</span>
          <strong>{informe ? mostrarCentavos(informe.compras.adeudado) : '—'}</strong>
        </Total>
      </Totales>

      <BarraFiltros>
        <Campo>
          <span>Desde</span>
          <input type="date" value={desde} onChange={(e) => setDesde(e.target.value)} />
        </Campo>

        <Campo>
          <span>Hasta</span>
          <input type="date" value={hasta} onChange={(e) => setHasta(e.target.value)} />
        </Campo>
      </BarraFiltros>

      {cargando ? (
        <Vacio>Armando el informe…</Vacio>
      ) : !informe ? null : (
        <>
          <Panel>
            <TituloPanel>
              <TrendingUp size={16} aria-hidden="true" />
              Día por día
            </TituloPanel>

            {informe.porDia.length === 0 ? (
              <Vacio>No hubo ventas en ese período.</Vacio>
            ) : (
              <Grafico>
                {informe.porDia.map((d) => (
                  <BarraDia key={d.dia} title={`${dia(d.dia)}: ${mostrarCentavos(d.total)}`}>
                    <Barra
                      style={{ height: `${maximo > 0 ? (d.total / maximo) * 100 : 0}%` }}
                      aria-hidden="true"
                    />
                    <span>{dia(d.dia)}</span>
                  </BarraDia>
                ))}
              </Grafico>
            )}
          </Panel>

          <Panel>
            <TituloPanel>
              <TrendingUp size={16} aria-hidden="true" />
              Lo que más te deja
            </TituloPanel>

            {informe.productos.length === 0 ? (
              <Vacio>Todavía no hay ventas para comparar.</Vacio>
            ) : (
              <Marco>
                <Desplazable>
                  <Tabla>
                    <thead>
                      <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cuánto salió</th>
                        <th scope="col">Vendiste</th>
                        <th scope="col">Te quedó</th>
                        <th scope="col">De cada $100</th>
                      </tr>
                    </thead>

                    <tbody>
                      {informe.productos.map((p) => {
                        const margen = p.total > 0 ? (p.ganancia / p.total) * 100 : 0;

                        return (
                          <tr key={p.nombre}>
                            <td data-etiqueta="Producto">{p.nombre}</td>
                            <td data-etiqueta="Cuánto salió" data-tipo="numero">
                              {p.unidades.toLocaleString('es-AR', { maximumFractionDigits: 2 })}
                            </td>
                            <td data-etiqueta="Vendiste" data-tipo="numero">
                              {mostrarCentavos(p.total)}
                            </td>
                            <td data-etiqueta="Te quedó" data-tipo="numero">
                              {mostrarCentavos(p.ganancia)}
                            </td>
                            <td data-etiqueta="De cada $100">
                              <Etiqueta
                                data-tono={margen >= 30 ? 'bien' : margen >= 15 ? 'espera' : 'mal'}
                              >
                                te quedan $ {margen.toFixed(0)}
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
              <Wallet size={16} aria-hidden="true" />
              Cómo te pagan
            </TituloPanel>

            {informe.metodos.length === 0 ? (
              <Vacio>Sin cobros en el período.</Vacio>
            ) : (
              <Marco>
                <Desplazable>
                  <Tabla>
                    <thead>
                      <tr>
                        <th scope="col">Forma de pago</th>
                        <th scope="col">Veces</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      {informe.metodos.map((m) => (
                        <tr key={m.metodo}>
                          <td data-etiqueta="Forma de pago">
                            {NOMBRE_METODO[m.metodo] ?? m.metodo}
                          </td>
                          <td data-etiqueta="Veces" data-tipo="numero">
                            {m.veces}
                          </td>
                          <td data-etiqueta="Total" data-tipo="numero">
                            {mostrarCentavos(m.total)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Tabla>
                </Desplazable>
              </Marco>
            )}
          </Panel>

          <Panel>
            <TituloPanel>
              <PackageSearch size={16} aria-hidden="true" />
              Qué hay que reponer
            </TituloPanel>

            {reponer.length === 0 ? (
              <Vacio>No hay nada por debajo de cinco unidades.</Vacio>
            ) : (
              <Marco>
                <Desplazable>
                  <Tabla>
                    <thead>
                      <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Quedan</th>
                      </tr>
                    </thead>

                    <tbody>
                      {reponer.map((p) => (
                        <tr key={p.id}>
                          <td data-etiqueta="Producto">{p.nombre}</td>
                          <td data-etiqueta="Quedan" data-tipo="numero">
                            <Etiqueta data-tono={p.stock === 0 ? 'mal' : 'espera'}>
                              {p.stock === 0 ? 'Sin stock' : p.stock}
                            </Etiqueta>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Tabla>
                </Desplazable>
              </Marco>
            )}
          </Panel>
        </>
      )}
    </GestionFrame>
  );
}
