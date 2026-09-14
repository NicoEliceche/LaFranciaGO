/**
 * Modo demo: la aplicación real corriendo sin backend.
 *
 * Para mostrarle el producto a alguien en una reunión hace falta que todo
 * responda al instante y que no dependa de la conexión ni del estado de la
 * base. Pero reconstruir las pantallas con datos inventados daría una idea
 * equivocada de lo que hay hecho.
 *
 * Por eso esto no simula pantallas: son las pantallas de verdad. Lo único
 * que cambia es de dónde salen los datos. Las respuestas se grabaron de la
 * API real con las cuentas demo, así que lo que se ve es lo que hay.
 *
 * Se enciende con ?demo=1 en la dirección y queda guardado en la pestaña,
 * para que navegar por la aplicación no lo apague.
 */
import respuestas from './respuestas.json';

type Cuenta = 'vecino' | 'comercio' | 'delivery' | 'flete';
type Grabacion = Record<Cuenta, Record<string, unknown>>;

const GRABACION = respuestas as unknown as Grabacion;

const CUENTAS: Record<string, Cuenta> = {
  'demo-vecino@lafranciago.demo': 'vecino',
  'demo-comercio@lafranciago.demo': 'comercio',
  'demo-delivery@lafranciago.demo': 'delivery',
  'demo-flete@lafranciago.demo': 'flete',
};

const CLAVE_ENCENDIDO = 'lafranciago:demo';
const CLAVE_CUENTA = 'lafranciago:demo:cuenta';

/** Está encendido si lo pidió la dirección o si ya se encendió en esta pestaña. */
export function demoEncendido(): boolean {
  const pedido = new URLSearchParams(window.location.search).get('demo') === '1';

  if (pedido) {
    sessionStorage.setItem(CLAVE_ENCENDIDO, '1');
    return true;
  }

  return sessionStorage.getItem(CLAVE_ENCENDIDO) === '1';
}

const cuentaActual = (): Cuenta =>
  (sessionStorage.getItem(CLAVE_CUENTA) as Cuenta) ?? 'vecino';

const guardarCuenta = (cuenta: Cuenta) => sessionStorage.setItem(CLAVE_CUENTA, cuenta);

/** Qué pantallas puede abrir cada cuenta, para que el cambio de rol funcione. */
const ROLES: Record<Cuenta, string[]> = {
  vecino: ['cliente'],
  comercio: ['cliente', 'comercio'],
  delivery: ['cliente', 'delivery'],
  flete: ['cliente', 'delivery'],
};

const json = (cuerpo: unknown, estado = 200) =>
  new Response(JSON.stringify(cuerpo), {
    status: estado,
    headers: { 'Content-Type': 'application/json' },
  });

/** Busca la ruta tal cual y, si no está, sin los parámetros. */
function buscar(cuenta: Cuenta, ruta: string): unknown {
  const guardadas = GRABACION[cuenta] ?? {};

  if (ruta in guardadas) return guardadas[ruta];

  const pelada = ruta.split('?')[0];
  if (pelada in guardadas) return guardadas[pelada];

  /* Algunas pantallas las sirve la cuenta del vecino aunque las abra otro rol. */
  const delVecino = GRABACION.vecino ?? {};
  if (ruta in delVecino) return delVecino[ruta];
  if (pelada in delVecino) return delVecino[pelada];

  return undefined;
}

/** Lo que devuelve una escritura, para que la pantalla no se rompa. */
function responderEscritura(ruta: string, cuerpo: unknown): Response {
  if (ruta.startsWith('/auth/login')) {
    const datos = cuerpo as { email?: string } | undefined;
    const cuenta = CUENTAS[datos?.email ?? ''] ?? 'vecino';
    guardarCuenta(cuenta);

    const usuario = buscar(cuenta, '/auth/yo');
    return json(usuario ?? { ok: true });
  }

  if (ruta.startsWith('/auth/logout')) {
    sessionStorage.removeItem(CLAVE_CUENTA);
    return json({ ok: true });
  }

  if (ruta.startsWith('/auth/rol')) {
    const datos = cuerpo as { rol?: string } | undefined;
    const usuario = buscar(cuentaActual(), '/auth/yo') as Record<string, unknown>;
    return json({ ...usuario, rol: datos?.rol ?? usuario?.rol });
  }

  /* El resto confirma sin guardar nada: en una demo alcanza con que la
     pantalla avance, y así no hay estado raro entre una prueba y otra. */
  return json({ ok: true });
}

/**
 * Engancha el modo demo. Devuelve si quedó encendido.
 *
 * Reemplaza fetch en vez de tocar el cliente de la API para que ninguna
 * pantalla tenga que enterarse: para ellas, la red responde como siempre.
 */
export function engancharModoDemo(): boolean {
  if (!demoEncendido()) return false;

  fijarUbicacion();

  const base = import.meta.env.VITE_API_URL ?? '';
  const original = window.fetch.bind(window);

  window.fetch = async (entrada: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof entrada === 'string' ? entrada : entrada instanceof URL ? entrada.href : entrada.url;

    /* Lo que no es de la API (mapas, imágenes) sigue saliendo a la red. */
    if (!base || !url.startsWith(base)) return original(entrada, init);

    const ruta = url.slice(base.length) || '/';
    const metodo = (init?.method ?? 'GET').toUpperCase();

    /* Un respiro corto: sin esto las pantallas parpadean del vacío al dato
       y no se llega a ver el estado de carga. */
    await new Promise((seguir) => setTimeout(seguir, 90));

    if (metodo !== 'GET') {
      let cuerpo: unknown;
      try {
        cuerpo = init?.body ? JSON.parse(String(init.body)) : undefined;
      } catch {
        cuerpo = undefined;
      }
      return responderEscritura(ruta, cuerpo);
    }

    const guardada = buscar(cuentaActual(), ruta);

    if (guardada !== undefined) {
      /* /auth/yo lleva los roles de la cuenta para que el menú los muestre. */
      if (ruta.startsWith('/auth/yo')) {
        const cuenta = cuentaActual();
        return json({ ...(guardada as object), roles: ROLES[cuenta] });
      }
      return json(guardada);
    }

    /* Sin grabación: se responde vacío en vez de fallar, así la pantalla
       muestra su estado de "todavía no hay nada" y no un error. */
    return json({});
  };

  return true;
}

/**
 * Pone al usuario en La Francia.
 *
 * Sin esto el navegador pide permiso de ubicación en medio de la
 * presentación, y si se lo niega las pantallas muestran distancias de miles
 * de kilómetros: el reparto se ordena por cercanía y el flete se cotiza por
 * kilómetro, así que sin una posición creíble esos números no se entienden.
 */
function fijarUbicacion(): void {
  /* La plaza de La Francia, Córdoba. */
  const posicion = {
    coords: {
      latitude: -31.0286,
      longitude: -62.0489,
      accuracy: 20,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      speed: null,
      toJSON() {
        return this;
      },
    },
    timestamp: Date.now(),
    toJSON() {
      return this;
    },
  } as GeolocationPosition;

  navigator.geolocation.getCurrentPosition = (alListo) => alListo(posicion);
  navigator.geolocation.watchPosition = (alListo) => {
    alListo(posicion);
    return 0;
  };
}

/** Con qué cuenta está andando la demo, para mostrarlo en pantalla. */
export const cuentaDemo = cuentaActual;
