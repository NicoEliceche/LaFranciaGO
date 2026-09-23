/**
 * El registro de errores, para quien programa.
 *
 * No es para Diego ni para ningún comercio: acá se ven mensajes internos,
 * cuerpos de peticiones y stacks. Es la pantalla que responde "¿por qué se
 * rompió esto?" sin tener que reproducir el problema.
 *
 * Lo primero que se ve es lo último que pasó, porque cuando alguien avisa que
 * algo falló, casi siempre acaba de fallar.
 */
import { useCallback, useEffect, useState } from 'react';
import { AlertCircle, Info, RefreshCw, Search, AlertTriangle, X } from 'lucide-react';

import {
  registroApi,
  type DetalleRegistroApi,
  type LineaRegistroApi,
} from '@core/data/services/apiClient';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { SectionHeading } from '../components/SectionHeading';
import { SectionInner } from '../ui';
import { CompactSection, SectionStack } from './screenLayout';
import {
  Buscador,
  Cerrar,
  Chip,
  Chips,
  Detalle,
  DetalleCaja,
  DetalleTitulo,
  Fila,
  FilaCuando,
  FilaDonde,
  FilaMensaje,
  Lineas,
  Numero,
  Numeros,
  Pila,
  Recordatorio,
} from './AdminRegistroScreenStyled';

const ICONOS = {
  error: AlertCircle,
  aviso: AlertTriangle,
  info: Info,
} as const;

/** La hora, que es lo que se busca al leer: "¿esto fue recién?". */
function cuando(iso: string) {
  /* El backend guarda en UTC sin la Z, así que se agrega para que el
     navegador no lo lea como hora local y muestre tres horas de menos. */
  const fecha = new Date(iso.includes('Z') ? iso : `${iso.replace(' ', 'T')}Z`);
  const hoy = new Date().toDateString() === fecha.toDateString();

  return fecha.toLocaleString('es-AR', {
    ...(hoy ? {} : { day: '2-digit', month: '2-digit' }),
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

export function AdminRegistroScreen() {
  const [lineas, setLineas] = useState<LineaRegistroApi[]>([]);
  const [resumen, setResumen] = useState<Array<{ nivel: string; cuantas: number }>>([]);
  const [total, setTotal] = useState(0);
  const [areas, setAreas] = useState<Array<{ area: string; cuantas: number }>>([]);

  const [nivel, setNivel] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [buscar, setBuscar] = useState('');
  const [texto, setTexto] = useState('');

  const [abierta, setAbierta] = useState<DetalleRegistroApi | null>(null);
  const [cargando, setCargando] = useState(true);
  const [fallo, setFallo] = useState<string | null>(null);

  const cargar = useCallback(async () => {
    setCargando(true);
    setFallo(null);

    try {
      const datos = await registroApi.ver({ nivel, area, buscar });

      setLineas(datos.lineas);
      setResumen(datos.resumen);
      setTotal(datos.total);
    } catch (error) {
      setFallo(error instanceof Error ? error.message : 'No pudimos leer el registro.');
    } finally {
      setCargando(false);
    }
  }, [nivel, area, buscar]);

  useEffect(() => {
    void cargar();
  }, [cargar]);

  useEffect(() => {
    registroApi
      .areas()
      .then((datos) => setAreas(datos.areas))
      .catch(() => undefined);
  }, []);

  const abrir = async (id: string) => {
    try {
      const datos = await registroApi.linea(id);

      setAbierta(datos.linea);
    } catch {
      setFallo('No pudimos abrir el detalle.');
    }
  };

  const deNivel = (id: string) => resumen.find((r) => r.nivel === id)?.cuantas ?? 0;

  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <SectionStack>
            <SectionHeading
              title="Registro"
              subtitle="Qué se rompió, dónde y por qué. Lo último, primero."
            />

            {/* Se dice acá y no en la documentación: quien abre esta pantalla
                está viendo datos internos, y conviene que lo sepa. */}
            <Recordatorio>
              Esta pantalla muestra mensajes internos y cuerpos de peticiones. Es para
              desarrollo, no para mostrarla a nadie más.
            </Recordatorio>

            {/* Los números de las últimas 24 horas: si hay algo raro pasando
                ahora, se ve sin leer línea por línea. */}
            <Numeros>
              <Numero data-nivel="error">
                <strong>{deNivel('error')}</strong>
                <span>errores hoy</span>
              </Numero>
              <Numero data-nivel="aviso">
                <strong>{deNivel('aviso')}</strong>
                <span>avisos hoy</span>
              </Numero>
              <Numero>
                <strong>{total}</strong>
                <span>líneas guardadas</span>
              </Numero>
            </Numeros>

            <Buscador
              onSubmit={(evento) => {
                evento.preventDefault();
                setBuscar(texto.trim());
              }}
            >
              <Search size={16} aria-hidden="true" />
              <input
                value={texto}
                onChange={(evento) => setTexto(evento.target.value)}
                placeholder="Buscar en el mensaje, el detalle o la ruta"
                aria-label="Buscar en el registro"
              />
              <button type="submit">Buscar</button>
              <button type="button" onClick={() => void cargar()} aria-label="Recargar">
                <RefreshCw size={16} aria-hidden="true" />
              </button>
            </Buscador>

            <Chips>
              <Chip type="button" data-activo={nivel === ''} onClick={() => setNivel('')}>
                Todo
              </Chip>
              <Chip type="button" data-activo={nivel === 'error'} onClick={() => setNivel('error')}>
                Errores
              </Chip>
              <Chip type="button" data-activo={nivel === 'aviso'} onClick={() => setNivel('aviso')}>
                Avisos
              </Chip>

              {areas.slice(0, 8).map((item) => (
                <Chip
                  key={item.area}
                  type="button"
                  data-activo={area === item.area}
                  onClick={() => setArea(area === item.area ? '' : item.area)}
                >
                  {item.area} ({item.cuantas})
                </Chip>
              ))}
            </Chips>

            {fallo ? <Recordatorio role="alert">{fallo}</Recordatorio> : null}

            {cargando && lineas.length === 0 ? null : lineas.length === 0 ? (
              <EmptyState
                icon={Info}
                title="No hay nada registrado"
                text="Cuando algo falle, va a aparecer acá con el detalle de por qué."
                dashed
              />
            ) : (
              <Lineas>
                {lineas.map((linea) => {
                  const Icono = ICONOS[linea.nivel] ?? Info;

                  return (
                    <Fila
                      key={linea.id}
                      type="button"
                      data-nivel={linea.nivel}
                      onClick={() => void abrir(linea.id)}
                    >
                      <Icono size={16} aria-hidden="true" />

                      <Pila>
                        <FilaMensaje>{linea.mensaje}</FilaMensaje>
                        <FilaDonde>
                          {linea.metodo ? `${linea.metodo} ` : ''}
                          {linea.ruta ?? 'sin ruta'}
                          {linea.estado ? ` · ${linea.estado}` : ''}
                          {linea.ms !== null ? ` · ${linea.ms} ms` : ''}
                          {linea.area ? ` · ${linea.area}` : ''}
                        </FilaDonde>
                      </Pila>

                      <FilaCuando>{cuando(linea.creado_en)}</FilaCuando>
                    </Fila>
                  );
                })}
              </Lineas>
            )}
          </SectionStack>
        </SectionInner>
      </CompactSection>

      {/* El detalle, que es donde está la respuesta: el stack dice en qué
          línea rompió y el cuerpo, con qué datos. */}
      {abierta ? (
        <DetalleCaja role="dialog" aria-label="Detalle del error">
          <DetalleTitulo>
            <span>{abierta.mensaje}</span>
            <Cerrar type="button" onClick={() => setAbierta(null)} aria-label="Cerrar">
              <X size={18} aria-hidden="true" />
            </Cerrar>
          </DetalleTitulo>

          <Detalle>
            {[
              ['Cuándo', cuando(abierta.creado_en)],
              ['Dónde', `${abierta.metodo ?? ''} ${abierta.ruta ?? '-'}`.trim()],
              ['Estado', abierta.estado ? String(abierta.estado) : '-'],
              ['Tardó', abierta.ms !== null ? `${abierta.ms} ms` : '-'],
              ['Área', abierta.area ?? '-'],
              ['Usuario', abierta.usuario_id ?? 'sin sesión'],
              ['IP', abierta.ip ?? '-'],
            ].map(([clave, valor]) => (
              <p key={clave}>
                <strong>{clave}</strong>
                {valor}
              </p>
            ))}

            <pre>{formatearDetalle(abierta.detalle)}</pre>
          </Detalle>
        </DetalleCaja>
      ) : null}
    </MarketplaceFrame>
  );
}

/**
 * El detalle viene como JSON en una línea: así no se lee.
 *
 * Se formatea con saltos y sangría, y el stack se separa en líneas, que es
 * como se lee un stack.
 */
function formatearDetalle(crudo: string | null) {
  if (!crudo) return 'Sin detalle.';

  try {
    const datos = JSON.parse(crudo) as Record<string, unknown>;
    const partes: string[] = [];

    if (typeof datos.stack === 'string') {
      partes.push(datos.stack);
    }

    if (datos.causa) {
      partes.push(`\nCausado por: ${String(datos.causa)}`);
    }

    if (datos.extra !== undefined) {
      partes.push(`\nDatos que llegaron:\n${JSON.stringify(datos.extra, null, 2)}`);
    }

    return partes.length > 0 ? partes.join('\n') : JSON.stringify(datos, null, 2);
  } catch {
    /* No era JSON: se muestra tal cual, que es mejor que no mostrar nada. */
    return crudo;
  }
}
