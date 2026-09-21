/**
 * El aviso de que hay una versión nueva.
 *
 * Dos situaciones que se ven distinto a propósito:
 *
 * **Hay algo nuevo.** Una barra que se puede cerrar y no molesta más en el
 * día. El mostrador sigue cobrando; actualizar puede esperar al cierre.
 *
 * **La versión ya no sirve.** Una pantalla completa que no se puede cerrar,
 * explicando por qué. Es el caso que sin esto termina en alguien creyendo
 * que el sistema anda mal cuando en realidad quedó viejo.
 *
 * Nunca se instala sola en horario de trabajo: reiniciar la caja un sábado a
 * la mañana deja el mostrador parado con gente esperando.
 */
import { useCallback, useEffect, useState } from 'react';
import { ArrowUpCircle, X } from 'lucide-react';

import { type EstadoActualizacion, esEscritorio } from '../entorno';
import {
  Barra,
  Bloqueo,
  Botones,
  Cerrar,
  Cuadro,
  Texto,
} from './AvisoActualizacionStyled';

/** Mientras dure el día, no volver a mostrar el aviso que ya se cerró. */
const CLAVE_POSPUESTO = 'lafranciago:actualizacion:pospuesta';

/** Las opciones de horario, en palabras del negocio. */
function horarios() {
  const ahora = new Date();

  const estaNoche = new Date(ahora);
  estaNoche.setHours(22, 0, 0, 0);

  const manana = new Date(ahora);
  manana.setDate(manana.getDate() + 1);
  manana.setHours(7, 0, 0, 0);

  return [
    /* Si ya pasaron las diez de la noche, esa opción no tiene sentido. */
    ...(estaNoche > ahora
      ? [{ etiqueta: 'Esta noche a las 22', valor: estaNoche.toISOString() }]
      : []),
    { etiqueta: 'Mañana antes de abrir', valor: manana.toISOString() },
  ];
}

export function AvisoActualizacion() {
  const [estado, setEstado] = useState<EstadoActualizacion | null>(null);
  const [cerrado, setCerrado] = useState(false);
  const [trabajando, setTrabajando] = useState(false);

  const mirar = useCallback(async () => {
    const escritorio = window.lafranciagoEscritorio;

    if (!escritorio?.actualizacion) return;

    try {
      setEstado(await escritorio.actualizacion());
    } catch {
      /* Sin respuesta no se sabe, y no saber no es motivo para molestar. */
    }
  }, []);

  useEffect(() => {
    if (!esEscritorio()) return;

    void mirar();

    /* Cada media hora: si sale una versión mientras el negocio está abierto,
       el aviso aparece sin tener que reiniciar. */
    const id = window.setInterval(() => void mirar(), 30 * 60 * 1000);

    return () => window.clearInterval(id);
  }, [mirar]);

  useEffect(() => {
    /* El "más tarde" dura hasta que cambie el día. */
    const pospuesta = localStorage.getItem(CLAVE_POSPUESTO);

    if (pospuesta === new Date().toDateString()) setCerrado(true);
  }, []);

  if (!estado || estado.estado === 'al-dia') return null;

  const obligatoria = estado.estado === 'obligatoria';

  if (!obligatoria && cerrado) return null;

  const instalar = async () => {
    setTrabajando(true);

    try {
      await window.lafranciagoEscritorio?.instalarAhora?.();
    } finally {
      setTrabajando(false);
    }
  };

  const programar = async (cuando: string) => {
    setTrabajando(true);

    try {
      await window.lafranciagoEscritorio?.programarActualizacion?.(cuando);
      await mirar();
      setCerrado(true);
    } finally {
      setTrabajando(false);
    }
  };

  const masTarde = () => {
    localStorage.setItem(CLAVE_POSPUESTO, new Date().toDateString());
    setCerrado(true);
  };

  /* ── Cuando la versión ya no sirve ── */

  if (obligatoria) {
    return (
      <Bloqueo role="alertdialog" aria-labelledby="titulo-actualizacion">
        <Cuadro>
          <ArrowUpCircle size={28} aria-hidden="true" />

          <h2 id="titulo-actualizacion">Hay que actualizar para seguir</h2>

          <Texto>
            {estado.motivoObligatorio ??
              'Esta versión ya no puede comunicarse con el sistema.'}
          </Texto>

          {estado.novedades ? <Texto data-tono="suave">{estado.novedades}</Texto> : null}

          <Texto data-tono="suave">
            {estado.descargada
              ? 'La actualización ya está bajada. Tarda menos de un minuto.'
              : 'Estamos bajando la actualización…'}
          </Texto>

          <Botones>
            <button
              type="button"
              data-tono="fuerte"
              onClick={instalar}
              disabled={trabajando || !estado.descargada}
            >
              {trabajando ? 'Instalando…' : 'Actualizar ahora'}
            </button>
          </Botones>

          <Texto data-tono="suave">
            Las ventas que hayan quedado guardadas sin subir no se pierden: siguen ahí después
            de actualizar.
          </Texto>
        </Cuadro>
      </Bloqueo>
    );
  }

  /* ── Cuando puede esperar ── */

  return (
    <Barra role="status">
      <ArrowUpCircle size={18} aria-hidden="true" />

      <div>
        <strong>Hay una versión nueva{estado.ultima ? ` (${estado.ultima})` : ''}</strong>
        <span>
          {estado.programadaPara
            ? `Se instala el ${new Date(estado.programadaPara).toLocaleString('es-AR', {
                day: '2-digit',
                month: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })} · podés seguir trabajando`
            : (estado.novedades ?? 'Podés seguir trabajando y actualizar cuando cierres.')}
        </span>
      </div>

      {!estado.programadaPara ? (
        <Botones>
          {horarios().map((h) => (
            <button key={h.valor} type="button" onClick={() => programar(h.valor)} disabled={trabajando}>
              {h.etiqueta}
            </button>
          ))}

          <button
            type="button"
            data-tono="fuerte"
            onClick={instalar}
            disabled={trabajando || !estado.descargada}
          >
            Ahora
          </button>
        </Botones>
      ) : null}

      <Cerrar type="button" onClick={masTarde} aria-label="Cerrar el aviso">
        <X size={16} aria-hidden="true" />
      </Cerrar>
    </Barra>
  );
}
