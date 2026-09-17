/**
 * Dónde está corriendo el sistema de gestión.
 *
 * El mismo código se usa en tres lados: el navegador, la aplicación
 * instalada en la PC del negocio y las aplicaciones del teléfono. La
 * diferencia no son los datos —todo vive en el mismo backend— sino el
 * hardware: la lectora de códigos, el cajón de dinero y la impresora sólo
 * existen en la PC del local.
 *
 * Por eso el sistema se ve completo en todos lados. Lo que cambia es que
 * algunas acciones quedan atenuadas fuera del mostrador, explicando por qué,
 * en vez de esconderse y hacer creer que no existen.
 */

export type Entorno = 'navegador' | 'escritorio' | 'telefono';

/**
 * La aplicación de escritorio se anuncia al cargar.
 *
 * Se mira una marca puesta por el empaquetador en vez de adivinar por el
 * navegador: así el día que cambie la herramienta con que se empaqueta, esto
 * sigue funcionando igual.
 */
declare global {
  interface Window {
    lafranciagoEscritorio?: {
      version: string;
      /** Qué aparatos encontró conectados al arrancar. */
      hardware?: string[];
    };
  }
}

export function entornoActual(): Entorno {
  if (typeof window === 'undefined') return 'navegador';

  if (window.lafranciagoEscritorio) return 'escritorio';

  /* Las aplicaciones del teléfono corren dentro de una vista web; se
     reconocen por la misma clase de marca, no por el user agent. */
  const enTelefono = /Android|iPhone|iPad/i.test(navigator.userAgent) && !window.matchMedia('(pointer: fine)').matches;

  return enTelefono ? 'telefono' : 'navegador';
}

export const esEscritorio = () => entornoActual() === 'escritorio';

/**
 * Qué necesita cada función para andar.
 *
 * `mostrador` son las que dependen de un aparato físico. Se ven en todos
 * lados —el comercio tiene que saber que existen— pero sólo se pueden usar
 * desde la PC del local.
 */
export type Requiere = 'nada' | 'mostrador';

export const REQUISITOS: Record<string, Requiere> = {
  /* Caja rápida: cobra, abre el cajón e imprime el ticket. */
  cajaRapida: 'mostrador',
  /* Leer un código de barras con la pistola lectora. */
  lectora: 'mostrador',
  /* Imprimir etiquetas de góndola. */
  etiquetas: 'mostrador',
  /* Todo lo demás anda igual en cualquier lado. */
};

export function disponible(funcion: string): boolean {
  return REQUISITOS[funcion] !== 'mostrador' || esEscritorio();
}

/** Por qué no se puede usar acá, en palabras del comercio. */
export const MOTIVO_MOSTRADOR =
  'Esto funciona en la computadora del negocio, donde están la lectora y la impresora.';
