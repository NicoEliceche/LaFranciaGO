/**
 * Si el comercio tiene contratado el sistema de gestión.
 *
 * Vive fuera de los componentes porque el menú se vuelve a montar en cada
 * pantalla: con el estado adentro, la consulta arrancaba de cero cada vez y
 * la entrada al sistema de gestión desaparecía y reaparecía al navegar.
 *
 * Se consulta una sola vez por sesión. Cambia cuando alguien contrata o da de
 * baja, y en los dos casos la pantalla que lo hace avisa acá.
 */
import { planGestionApi } from '@core/data/services/apiClient';

type Estado = 'sin-preguntar' | 'consultando' | 'si' | 'no';

const oyentes = new Set<() => void>();

let estado: Estado = 'sin-preguntar';
let deQuien: string | null = null;

const avisar = () => oyentes.forEach((oyente) => oyente());

/**
 * Pregunta si el comercio tiene el plan, salvo que ya se sepa.
 *
 * `usuarioId` sirve para no arrastrar la respuesta de otra cuenta cuando
 * alguien sale y entra con otra en la misma pestaña.
 */
export function consultarPlan(usuarioId: string) {
  if (deQuien === usuarioId && estado !== 'sin-preguntar') return;

  deQuien = usuarioId;
  estado = 'consultando';
  avisar();

  planGestionApi
    .ver()
    .then((datos) => {
      /* Puede haber cambiado de cuenta mientras tanto. */
      if (deQuien !== usuarioId) return;

      estado = datos.activo ? 'si' : 'no';
      avisar();
    })
    .catch(() => {
      if (deQuien !== usuarioId) return;

      /* Si la consulta falla se ofrece contratarlo: es lo que le sirve a
         quien todavía no lo tiene, y quien sí lo tiene entra por su panel
         igual. */
      estado = 'no';
      avisar();
    });
}

/** Lo que devuelve el backend al contratar o dar de baja, sin volver a preguntar. */
export function anotarPlan(activo: boolean) {
  estado = activo ? 'si' : 'no';
  avisar();
}

/** Al cerrar sesión: si no, la próxima cuenta hereda esta respuesta. */
export function olvidarPlan() {
  estado = 'sin-preguntar';
  deQuien = null;
  avisar();
}

export function leerPlan() {
  return estado;
}

export function escucharPlan(oyente: () => void) {
  oyentes.add(oyente);

  return () => {
    oyentes.delete(oyente);
  };
}
