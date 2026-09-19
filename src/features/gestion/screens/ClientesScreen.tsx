/**
 * Los clientes.
 *
 * Hasta acá había pedidos, no personas: se sabía que el pedido #966237 fue a
 * Barrio Los Aromos, pero no que esa misma señora compra todos los viernes.
 *
 * La ficha junta las dos mitades que el comercio nunca veía juntas: lo que
 * compró en el mostrador y lo que pidió por la aplicación.
 */
import { useCallback, useEffect, useState } from 'react';
import { ShoppingBag, UserPlus, Users } from 'lucide-react';

import { type ClienteApi, clientesApi } from '@core/data/services/apiClient';

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
  Monto,
  Panel,
  TituloPanel,
  Vacio,
} from './CajaScreenStyled';

interface Ficha {
  cliente: ClienteApi;
  ventas: Array<{ id: string; numero: number; total_centavos: number; creado_en: string }>;
  pedidos: Array<{ id: string; codigo: string; total_centavos: number; estado: string }>;
  favoritos: Array<{ nombre: string; unidades: number; total: number }>;
  presupuestos: Array<{ id: string; numero: number; total_centavos: number; estado: string }>;
}

const cuando = (iso: string | null) =>
  iso
    ? new Date(`${iso.replace(' ', 'T')}Z`).toLocaleDateString('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      })
    : '—';

export function ClientesScreen() {
  const [clientes, setClientes] = useState<ClienteApi[]>([]);
  const [ficha, setFicha] = useState<Ficha | null>(null);
  const [cargando, setCargando] = useState(true);
  const [aviso, setAviso] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  const [busqueda, setBusqueda] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nota, setNota] = useState('');

  const traer = useCallback(async () => {
    setCargando(true);

    try {
      const datos = await clientesApi.listar(busqueda || undefined);

      setClientes(datos.clientes);
    } catch {
      setAviso('No pudimos traer los clientes. Probá de nuevo.');
    } finally {
      setCargando(false);
    }
  }, [busqueda]);

  useEffect(() => {
    /* Espera a que termine de escribir: sin esto cada tecla es un viaje. */
    const id = window.setTimeout(() => void traer(), 250);

    return () => window.clearTimeout(id);
  }, [traer]);

  const abrir = async (cliente: ClienteApi) => {
    try {
      const datos = await clientesApi.ficha(cliente.id);

      setFicha(datos as Ficha);
    } catch {
      setAviso('No pudimos abrir esa ficha');
    }
  };

  const crear = async () => {
    if (nombre.trim().length < 2) {
      setAviso('Poné el nombre del cliente');
      return;
    }

    setGuardando(true);
    setAviso(null);

    try {
      await clientesApi.crear({
        nombre: nombre.trim(),
        telefono: telefono || undefined,
        nota: nota || undefined,
      });
      setNombre('');
      setTelefono('');
      setNota('');
      await traer();
    } catch (fallo) {
      setAviso(fallo instanceof Error ? fallo.message : 'No pudimos crear el cliente');
    } finally {
      setGuardando(false);
    }
  };

  const gastadoTotal = clientes.reduce((suma, c) => suma + c.gastado_centavos, 0);
  const debenTotal = clientes.reduce((suma, c) => suma + c.debe_centavos, 0);

  return (
    <GestionFrame titulo="Clientes">
      {aviso ? <Aviso role="status">{aviso}</Aviso> : null}

      <Totales>
        <Total>
          <span>Clientes</span>
          <strong>{clientes.length}</strong>
        </Total>

        <Total data-tono="cobrado">
          <span>Te compraron por</span>
          <strong>{mostrarCentavos(gastadoTotal)}</strong>
        </Total>

        <Total data-tono="debe">
          <span>Te deben</span>
          <strong>{mostrarCentavos(debenTotal)}</strong>
        </Total>

        <Total>
          <span>Con cuenta en la app</span>
          <strong>{clientes.filter((c) => c.usuario_id).length}</strong>
        </Total>
      </Totales>

      <BarraFiltros>
        <Campo>
          <span>Buscar</span>
          <input
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            placeholder="Nombre o teléfono"
          />
        </Campo>
      </BarraFiltros>

      <Panel>
        <TituloPanel>
          <Users size={16} aria-hidden="true" />
          Quiénes te compran
        </TituloPanel>

        {cargando ? (
          <Vacio>Buscando…</Vacio>
        ) : clientes.length === 0 ? (
          <Vacio>
            {busqueda
              ? 'No hay nadie con ese nombre o teléfono.'
              : 'Todavía no cargaste clientes. Sirve para saber qué lleva cada uno y tener a quién llamar.'}
          </Vacio>
        ) : (
          <Marco>
            <Desplazable>
              <Tabla>
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Compras</th>
                    <th scope="col">Te compró por</th>
                    <th scope="col">Debe</th>
                    <th scope="col">Última vez</th>
                    <th scope="col"> </th>
                  </tr>
                </thead>

                <tbody>
                  {clientes.map((cliente) => (
                    <tr key={cliente.id}>
                      <td data-etiqueta="Nombre">
                        {cliente.nombre}
                        {cliente.usuario_id ? (
                          <>
                            {' '}
                            <Etiqueta data-tono="bien">Usa la app</Etiqueta>
                          </>
                        ) : null}
                      </td>
                      <td data-etiqueta="Teléfono">{cliente.telefono || '—'}</td>
                      <td data-etiqueta="Compras" data-tipo="numero">
                        {cliente.compras}
                      </td>
                      <td data-etiqueta="Te compró por" data-tipo="numero">
                        {mostrarCentavos(cliente.gastado_centavos)}
                      </td>
                      <td data-etiqueta="Debe" data-tipo="numero">
                        {cliente.debe_centavos > 0 ? mostrarCentavos(cliente.debe_centavos) : '—'}
                      </td>
                      <td data-etiqueta="Última vez">{cuando(cliente.ultima_compra)}</td>
                      <td data-etiqueta=" ">
                        <Accion type="button" onClick={() => abrir(cliente)}>
                          Ver
                        </Accion>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Tabla>
            </Desplazable>
          </Marco>
        )}
      </Panel>

      {ficha ? (
        <Panel>
          <TituloPanel>
            <ShoppingBag size={16} aria-hidden="true" />
            {ficha.cliente.nombre}
            {ficha.cliente.telefono ? ` · ${ficha.cliente.telefono}` : ''}
          </TituloPanel>

          {ficha.cliente.nota ? <Aviso role="note">{ficha.cliente.nota}</Aviso> : null}

          {ficha.favoritos.length > 0 ? (
            <>
              <p style={{ margin: '0 0 0.5rem', fontSize: '0.8rem', opacity: 0.7 }}>
                Lo que más lleva
              </p>
              <Lista>
                {ficha.favoritos.map((f) => (
                  <Fila key={f.nombre}>
                    <div>
                      <strong>{f.nombre}</strong>
                      <span>
                        {f.unidades.toLocaleString('es-AR', { maximumFractionDigits: 2 })} en total
                      </span>
                    </div>
                    <Monto data-signo="mas">{mostrarCentavos(f.total)}</Monto>
                  </Fila>
                ))}
              </Lista>
            </>
          ) : null}

          {ficha.ventas.length > 0 ? (
            <>
              <p style={{ margin: '1rem 0 0.5rem', fontSize: '0.8rem', opacity: 0.7 }}>
                Compras en el mostrador
              </p>
              <Lista>
                {ficha.ventas.slice(0, 10).map((v) => (
                  <Fila key={v.id}>
                    <div>
                      <strong>Venta #{v.numero}</strong>
                      <span>{cuando(v.creado_en)}</span>
                    </div>
                    <Monto data-signo="mas">{mostrarCentavos(v.total_centavos)}</Monto>
                  </Fila>
                ))}
              </Lista>
            </>
          ) : null}

          {ficha.pedidos.length > 0 ? (
            <>
              <p style={{ margin: '1rem 0 0.5rem', fontSize: '0.8rem', opacity: 0.7 }}>
                Pedidos por la aplicación
              </p>
              <Lista>
                {ficha.pedidos.slice(0, 10).map((p) => (
                  <Fila key={p.id}>
                    <div>
                      <strong>{p.codigo}</strong>
                      <span>{p.estado}</span>
                    </div>
                    <Monto data-signo="mas">{mostrarCentavos(p.total_centavos)}</Monto>
                  </Fila>
                ))}
              </Lista>
            </>
          ) : null}

          {ficha.ventas.length === 0 && ficha.pedidos.length === 0 ? (
            <Vacio>Todavía no te compró nada.</Vacio>
          ) : null}
        </Panel>
      ) : null}

      <Panel>
        <TituloPanel>
          <UserPlus size={16} aria-hidden="true" />
          Agregar un cliente
        </TituloPanel>

        <Formulario>
          <Campo>
            <span>Nombre</span>
            <input
              value={nombre}
              onChange={(evento) => setNombre(evento.target.value)}
              placeholder="Marta González"
            />
          </Campo>

          <Campo>
            <span>Teléfono</span>
            <input
              value={telefono}
              onChange={(evento) => setTelefono(evento.target.value)}
              inputMode="tel"
              placeholder="Para encontrarlo después"
            />
          </Campo>

          <Campo>
            <span>Algo para recordar</span>
            <input
              value={nota}
              onChange={(evento) => setNota(evento.target.value)}
              placeholder="Compra los viernes"
            />
          </Campo>

          <Accion type="button" onClick={crear} disabled={guardando}>
            Agregar
          </Accion>
        </Formulario>
      </Panel>
    </GestionFrame>
  );
}
