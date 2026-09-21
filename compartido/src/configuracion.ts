/**
 * Lo que cambia entre la web y el teléfono.
 *
 * El resto del código compartido —el cliente de la API, los tipos, las
 * cuentas de plata— es idéntico en los dos lados. Estas dos cosas no:
 *
 * **De dónde sale la dirección del servidor.** La web la lee de Vite; el
 * teléfono, de la configuración de la aplicación. Que cada lado la escriba
 * acá evita que el código compartido sepa en cuál de los dos está.
 *
 * **Cómo viaja la sesión.** En el navegador es una cookie que se manda sola.
 * En el teléfono no hay cookies persistentes que sirvan entre reinicios, así
 * que la sesión viaja como cabecera y hay que guardarla a mano.
 *
 * Sin esta separación, el cliente de la API tendría un `if` preguntando
 * dónde corre, y ese `if` se multiplicaría por cada cosa que se agregue.
 */

export interface Configuracion {
  /** La dirección del backend, sin barra al final. */
  apiUrl: string;
  /**
   * Cómo se manda la sesión.
   *
   * 'cookie'    → el navegador la manda sola (web).
   * 'cabecera'  → se agrega a mano en cada pedido (teléfono).
   */
  sesion: 'cookie' | 'cabecera';
  /** Devuelve el token guardado, cuando la sesión va por cabecera. */
  leerToken?: () => string | null | Promise<string | null>;
  /** Guarda el token que devolvió el login. */
  guardarToken?: (token: string | null) => void | Promise<void>;
}

let configuracion: Configuracion = {
  apiUrl: '',
  sesion: 'cookie',
};

/**
 * La aplicación la llama una vez al arrancar, antes de cualquier pedido.
 *
 * Se hace así y no con una variable de entorno porque el teléfono no tiene
 * las de Vite: cada aplicación sabe de dónde saca su configuración y la
 * entrega ya resuelta.
 */
export function configurar(nueva: Configuracion) {
  configuracion = { ...nueva, apiUrl: nueva.apiUrl.replace(/\/$/, '') };
}

export function leerConfiguracion(): Configuracion {
  return configuracion;
}

/** Si hay backend configurado. Sin él, la aplicación usa datos de ejemplo. */
export const hayBackend = () => configuracion.apiUrl.length > 0;
