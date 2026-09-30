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
      /** Imprime el ticket de una venta y abre el cajón. */
      imprimir?: (datos: TicketVenta) => Promise<{ ok: boolean; error?: string }>;
      /** Las impresoras que ve Windows. */
      impresoras?: () => Promise<Array<{ nombre: string; predeterminada: boolean }>>;
      /** Imprime una hoja de prueba. */
      probarImpresora?: (impresora?: string) => Promise<{ ok: boolean; error?: string }>;
      /** Qué recuerda esta instalación. */
      ajustes?: () => Promise<AjustesEscritorio>;
      /** Guarda los cambios y devuelve cómo quedó. */
      guardarAjustes?: (cambios: Partial<AjustesEscritorio>) => Promise<AjustesEscritorio>;
      /** Versión y plataforma, más los ajustes. */
      info?: () => Promise<AjustesEscritorio & { version: string; plataforma: string }>;
      /** Guarda la venta en disco y la sube cuando haya internet. */
      encolar?: (venta: unknown) => Promise<{ idLocal: string; pendientes: number }>;
      /** Cuántas ventas están esperando subir. */
      pendientes?: () => Promise<{ cantidad: number; masVieja: string | null; conError: number }>;
      /** Fuerza un intento de subida. */
      sincronizar?: () => Promise<{ subidas: number; pendientes: number }>;
      /** Si hay una versión nueva, y si es obligatoria. */
      actualizacion?: () => Promise<EstadoActualizacion>;
      /** Le pregunta al servidor ahora mismo. */
      buscarActualizacion?: () => Promise<EstadoActualizacion>;
      /** Instala y reinicia. */
      instalarAhora?: () => Promise<{ ok: boolean; error?: string }>;
      /** Deja programado cuándo instalar. Sin fecha, cancela. */
      programarActualizacion?: (
        cuando: string | null,
      ) => Promise<{ ok: boolean; programadaPara?: string | null }>;
      /** Minimizar, achicar y cerrar: la ventana no tiene marco propio. */
      ventana?: {
        minimizar: () => Promise<void>;
        alternarTamano: () => Promise<{ completa: boolean }>;
        tamano: () => Promise<{ completa: boolean }>;
        cerrar: () => Promise<void>;
      };
    };
  }
}

/**
 * Qué hacer con la versión instalada.
 *
 * Son tres situaciones distintas y conviene no mezclarlas: no pasa nada, hay
 * algo nuevo que puede esperar, o la versión ya no sirve para hablar con el
 * sistema.
 */
export interface EstadoActualizacion {
  estado: 'al-dia' | 'hay-nueva' | 'obligatoria';
  ultima?: string;
  instalada?: string;
  novedades?: string;
  descarga?: string;
  motivoObligatorio?: string;
  /** Si el instalador ya está bajado y listo. */
  descargada?: boolean;
  /** Cuándo quedó programada, si el comercio eligió un horario. */
  programadaPara?: string | null;
}

/** Lo que esta instalación recuerda entre sesiones. */
export interface AjustesEscritorio {
  /** Vacío significa "la predeterminada de Windows". */
  impresora: string;
  /** Cómo se llama esta caja. Va adelante del número de venta. */
  puesto: string;
  /** Si imprime el ticket sin preguntar al terminar la venta. */
  imprimirSolo: boolean;
  /** Si abre el cajón al imprimir. */
  abrirCajon: boolean;
}

/** Lo que necesita la impresora para armar el ticket. */
export interface TicketVenta {
  comercio?: { nombre: string; direccion?: string };
  numero: number;
  fecha?: string;
  items: Array<{
    nombre: string;
    cantidadMilesimos: number;
    precioCentavos: number;
    subtotalCentavos: number;
  }>;
  total: number;
  pagos?: Array<{ metodo: string; montoCentavos: number }>;
  impresora?: string;
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
