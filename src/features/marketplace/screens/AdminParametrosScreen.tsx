/**
 * Los parámetros del sistema, para administración.
 *
 * Son los datos nuestros que pueden cambiar: el alias donde cobra la
 * plataforma, el teléfono de contacto, hasta dónde se reparte. Antes vivían
 * en el código o en variables del servidor, así que corregir un alias pedía
 * consola y publicar la aplicación de nuevo.
 *
 * Cada parámetro muestra para qué sirve al lado del campo. Quien edita esto
 * no escribió el código y no tiene por qué adivinar qué pasa si cambia un
 * número: la explicación va donde se toma la decisión, no en un manual
 * aparte.
 *
 * Se guarda de a uno y no todo junto a propósito. Un botón que guarda diez
 * campos a la vez esconde cuál se tocó, y si uno falla no se sabe cuáles
 * quedaron.
 */
import { useCallback, useEffect, useState } from 'react';
import { Check, Loader2, RotateCcw } from 'lucide-react';

import { type ParametroApi, parametrosApi } from '@core/data/services/apiClient';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { SectionHeading } from '../components/SectionHeading';
import { SectionInner } from '../ui';
import { CompactSection, SectionStack } from './screenLayout';
import {
  ParamAyuda,
  ParamCampo,
  ParamEditado,
  ParamEtiqueta,
  ParamFila,
  ParamGrupo,
  ParamGrupoTitulo,
  ParamGuardar,
  ParamVacio,
} from './AdminParametrosScreenStyled';

/** Cómo se llama cada grupo en la pantalla. */
const GRUPOS: Record<string, string> = {
  cobros: 'Cobros',
  contacto: 'Contacto',
  operacion: 'Operación',
  general: 'General',
};

/** El tipo de campo que le corresponde a cada formato. */
const TIPOS: Record<string, string> = {
  numero: 'number',
  email: 'email',
  telefono: 'tel',
  texto: 'text',
};

export function AdminParametrosScreen() {
  const [parametros, setParametros] = useState<ParametroApi[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /* Lo que se escribió pero todavía no se guardó, por clave. Se separa del
     valor guardado para poder mostrar el botón sólo cuando hay algo que
     guardar, y para poder volver atrás sin recargar. */
  const [borradores, setBorradores] = useState<Record<string, string>>({});
  const [guardando, setGuardando] = useState<string | null>(null);
  const [guardado, setGuardado] = useState<string | null>(null);

  const cargar = useCallback(async () => {
    try {
      const { parametros: filas } = await parametrosApi.listar();

      setParametros(filas);
      setError(null);
    } catch {
      setError('No pudimos cargar los parámetros.');
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    void cargar();
  }, [cargar]);

  /* El aviso de guardado se va solo: fijo, al guardar otro no se sabría cuál
     de los dos se acaba de guardar. */
  useEffect(() => {
    if (!guardado) {
      return undefined;
    }

    const reloj = window.setTimeout(() => setGuardado(null), 2400);

    return () => window.clearTimeout(reloj);
  }, [guardado]);

  const guardar = async (clave: string) => {
    setGuardando(clave);
    setError(null);

    try {
      await parametrosApi.guardar(clave, borradores[clave] ?? '');

      /* Se refleja el valor nuevo sin volver a pedir toda la lista. */
      setParametros((previos) =>
        previos.map((fila) =>
          fila.clave === clave ? { ...fila, valor: borradores[clave] || null } : fila,
        ),
      );

      setBorradores((previos) => {
        const copia = { ...previos };

        delete copia[clave];

        return copia;
      });

      setGuardado(clave);
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos guardarlo.');
    } finally {
      setGuardando(null);
    }
  };

  /* Agrupados como los ordena el servidor, respetando ese orden. */
  const grupos = parametros.reduce<Record<string, ParametroApi[]>>((acumulado, fila) => {
    (acumulado[fila.grupo] ??= []).push(fila);

    return acumulado;
  }, {});

  return (
    <MarketplaceFrame>
      <CompactSection>
        <SectionInner>
          <SectionStack>
            <SectionHeading
              title="Parámetros"
              subtitle="Los datos del sistema que podés cambiar sin tocar el código."
            />

            {error ? <ParamVacio role="alert">{error}</ParamVacio> : null}

            {cargando ? (
              <ParamVacio>
                <Loader2 size={18} aria-hidden="true" />
                Cargando…
              </ParamVacio>
            ) : null}

            {Object.entries(grupos).map(([grupo, filas]) => (
              <ParamGrupo key={grupo}>
                <ParamGrupoTitulo>{GRUPOS[grupo] ?? grupo}</ParamGrupoTitulo>

                {filas.map((fila) => {
                  const editando = fila.clave in borradores;
                  const valor = editando ? borradores[fila.clave] : fila.valor ?? '';
                  const cambio = editando && borradores[fila.clave] !== (fila.valor ?? '');

                  return (
                    <ParamFila key={fila.clave}>
                      <ParamEtiqueta htmlFor={`param-${fila.clave}`}>
                        {fila.etiqueta}
                      </ParamEtiqueta>

                      <ParamAyuda>{fila.descripcion}</ParamAyuda>

                      <ParamCampo
                        id={`param-${fila.clave}`}
                        type={TIPOS[fila.formato] ?? 'text'}
                        value={valor}
                        placeholder="Sin cargar"
                        onChange={(evento) =>
                          setBorradores((previos) => ({
                            ...previos,
                            [fila.clave]: evento.target.value,
                          }))
                        }
                      />

                      {cambio ? (
                        <ParamGuardar
                          type="button"
                          onClick={() => void guardar(fila.clave)}
                          disabled={guardando === fila.clave}
                        >
                          {guardando === fila.clave ? (
                            <Loader2 size={15} aria-hidden="true" />
                          ) : (
                            <Check size={15} aria-hidden="true" />
                          )}
                          Guardar
                        </ParamGuardar>
                      ) : null}

                      {guardado === fila.clave ? (
                        <ParamEditado role="status" data-recien>
                          <Check size={13} aria-hidden="true" />
                          Guardado
                        </ParamEditado>
                      ) : fila.editado_en ? (
                        <ParamEditado>
                          <RotateCcw size={13} aria-hidden="true" />
                          Lo cambió {fila.editado_por ?? 'administración'}
                        </ParamEditado>
                      ) : null}
                    </ParamFila>
                  );
                })}
              </ParamGrupo>
            ))}
          </SectionStack>
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
