import { useCallback, useEffect, useState } from 'react';
import { Check, MessageSquare, RefreshCw, X } from 'lucide-react';

import { ApiError, adminApi, type PostulacionApi } from '@core/data/services/apiClient';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { SectionHeading } from '../components/SectionHeading';
import { Card, CardPad, SectionInner } from '../ui';
import { CompactSection, SectionStack } from './screenLayout';
import { AuthAviso } from './AuthScreenStyled';
import {
  DatoClave,
  DatoFila,
  DatoValor,
  DecisionRow,
  FiltroChip,
  FiltroRow,
  NotaInput,
  PostulanteMeta,
  PostulanteNombre,
  PostulacionHeader,
  RolChip,
  BotonAprobar,
  BotonCambios,
  BotonRechazar,
} from './AdminPostulacionesScreenStyled';

/**
 * Revisión de postulaciones.
 *
 * Cada alta se aprueba, se rechaza o se devuelve con una nota de qué corregir.
 * Los tres estados existen porque no es lo mismo un dato mal cargado que un
 * comercio que no debería estar: devolver con nota deja seguir el trámite sin
 * empezar de cero.
 */

const FILTROS = [
  { id: 'pendiente', nombre: 'Pendientes' },
  { id: 'cambios', nombre: 'Con cambios' },
  { id: 'aprobado', nombre: 'Aprobadas' },
  { id: 'rechazado', nombre: 'Rechazadas' },
  { id: 'todas', nombre: 'Todas' },
] as const;

const ROL_NOMBRE: Record<string, string> = {
  comercio: 'Comercio',
  delivery: 'Delivery',
  fletero: 'Fletero',
};

/** Etiquetas legibles para los datos que manda cada formulario. */
const CAMPO_NOMBRE: Record<string, string> = {
  nombre: 'Nombre',
  cuit: 'CUIT / CUIL',
  rubro: 'Rubro',
  direccion: 'Dirección',
  telefono: 'Teléfono',
  vehiculo: 'Vehículo',
  patente: 'Patente',
  carnet: 'Carnet',
  zona: 'Zona',
};

export function AdminPostulacionesScreen() {
  const [filtro, setFiltro] = useState<string>('pendiente');
  const [postulaciones, setPostulaciones] = useState<PostulacionApi[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  /* Nota por postulación: cada fila escribe la suya sin pisar las otras. */
  const [notas, setNotas] = useState<Record<string, string>>({});
  const [procesando, setProcesando] = useState<string | null>(null);

  const cargar = useCallback(async () => {
    setCargando(true);
    setError(null);

    try {
      const { postulaciones: filas } = await adminApi.postulaciones(filtro);

      setPostulaciones(filas);
    } catch (fallo) {
      /* El backend responde 404 a quien no es admin, para no confirmar que
         la ruta existe. Acá se traduce a algo entendible. */
      setError(
        fallo instanceof ApiError && fallo.status === 404
          ? 'Esta sección es sólo para administradores.'
          : 'No pudimos cargar las postulaciones.',
      );
    } finally {
      setCargando(false);
    }
  }, [filtro]);

  useEffect(() => {
    void cargar();
  }, [cargar]);

  const decidir = async (
    postulacion: PostulacionApi,
    decision: 'aprobado' | 'rechazado' | 'cambios',
  ) => {
    const nota = (notas[postulacion.id] ?? '').trim();

    if (decision === 'cambios' && nota.length < 5) {
      setError('Escribí qué hay que corregir antes de devolverla.');
      return;
    }

    setProcesando(postulacion.id);
    setError(null);

    try {
      await adminApi.revisar(postulacion.id, decision, nota);
      setNotas((actual) => ({ ...actual, [postulacion.id]: '' }));
      await cargar();
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos guardar la decisión.');
    } finally {
      setProcesando(null);
    }
  };

  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <SectionStack>
            <SectionHeading
              title="Postulaciones"
              chip={cargando ? undefined : `${postulaciones.length}`}
              subtitle="Altas de comercios, delivery y fletes esperando revisión."
            />

            <FiltroRow>
              {FILTROS.map((item) => (
                <FiltroChip
                  key={item.id}
                  type="button"
                  data-active={filtro === item.id}
                  onClick={() => setFiltro(item.id)}
                >
                  {item.nombre}
                </FiltroChip>
              ))}

              <FiltroChip type="button" onClick={() => void cargar()} aria-label="Actualizar">
                <RefreshCw size={14} aria-hidden="true" />
              </FiltroChip>
            </FiltroRow>

            {error ? (
              <AuthAviso role="alert" data-tono="error">
                {error}
              </AuthAviso>
            ) : null}

            {!cargando && postulaciones.length === 0 && !error ? (
              <EmptyState
                icon={Check}
                title="Nada para revisar"
                text="Cuando alguien se postule, aparece acá."
                dashed
              />
            ) : null}

            {postulaciones.map((postulacion) => (
              <Card key={postulacion.id}>
                <CardPad>
                  <SectionStack>
                    <PostulacionHeader>
                      <div>
                        <PostulanteNombre>{postulacion.nombre}</PostulanteNombre>
                        <PostulanteMeta>
                          {postulacion.email}
                          {postulacion.telefono ? ` · ${postulacion.telefono}` : ''}
                        </PostulanteMeta>
                      </div>
                      <RolChip data-estado={postulacion.estado}>
                        {ROL_NOMBRE[postulacion.rol] ?? postulacion.rol}
                      </RolChip>
                    </PostulacionHeader>

                    {Object.entries(postulacion.datos).map(([clave, valor]) => (
                      <DatoFila key={clave}>
                        <DatoClave>{CAMPO_NOMBRE[clave] ?? clave}</DatoClave>
                        <DatoValor>{String(valor)}</DatoValor>
                      </DatoFila>
                    ))}

                    {postulacion.nota_revision ? (
                      <AuthAviso data-tono="aviso">
                        Se le pidió: {postulacion.nota_revision}
                      </AuthAviso>
                    ) : null}

                    {postulacion.estado === 'pendiente' ||
                    postulacion.estado === 'cambios' ? (
                      <>
                        <NotaInput
                          value={notas[postulacion.id] ?? ''}
                          onChange={(evento) =>
                            setNotas((actual) => ({
                              ...actual,
                              [postulacion.id]: evento.target.value,
                            }))
                          }
                          placeholder="Qué hay que corregir (obligatorio para devolver)"
                          rows={2}
                        />

                        <DecisionRow>
                          <BotonAprobar
                            type="button"
                            disabled={procesando === postulacion.id}
                            onClick={() => void decidir(postulacion, 'aprobado')}
                          >
                            <Check size={16} aria-hidden="true" />
                            Aprobar
                          </BotonAprobar>

                          <BotonCambios
                            type="button"
                            disabled={procesando === postulacion.id}
                            onClick={() => void decidir(postulacion, 'cambios')}
                          >
                            <MessageSquare size={16} aria-hidden="true" />
                            Pedir cambios
                          </BotonCambios>

                          <BotonRechazar
                            type="button"
                            disabled={procesando === postulacion.id}
                            onClick={() => void decidir(postulacion, 'rechazado')}
                          >
                            <X size={16} aria-hidden="true" />
                            Rechazar
                          </BotonRechazar>
                        </DecisionRow>
                      </>
                    ) : null}
                  </SectionStack>
                </CardPad>
              </Card>
            ))}
          </SectionStack>
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
