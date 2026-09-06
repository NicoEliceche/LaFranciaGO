import { useCallback, useEffect, useState } from 'react';

import { ApiError, authApi, hayBackend, type UsuarioApi } from '@core/data/services/apiClient';

/**
 * Sesión del usuario.
 *
 * El token nunca pasa por acá: vive en una cookie HttpOnly que el navegador
 * manda sola y el JavaScript no puede leer. Este store sólo guarda los datos
 * del perfil para mostrarlos, así que un XSS no consigue nada útil de él.
 *
 * Sin backend configurado la app sigue funcionando sin sesión, como antes.
 */

export type EstadoSesion = 'cargando' | 'invitado' | 'conectado';

const listeners = new Set<() => void>();
let usuario: UsuarioApi | null = null;
let estado: EstadoSesion = hayBackend() ? 'cargando' : 'invitado';
let consultado = false;

const notify = () => listeners.forEach((listener) => listener());

const aplicar = (siguiente: UsuarioApi | null) => {
  usuario = siguiente;
  estado = siguiente ? 'conectado' : 'invitado';
  notify();
};

/** Pregunta al backend quién es el usuario de la cookie actual. */
async function recuperarSesion() {
  if (!hayBackend()) {
    return;
  }

  try {
    aplicar(await authApi.yo());
  } catch (fallo) {
    /* Un 401 es lo normal cuando nadie inició sesión: no es un error. */
    if (!(fallo instanceof ApiError) || fallo.status !== 401) {
      console.warn('No se pudo recuperar la sesión', fallo);
    }

    aplicar(null);
  }
}

export function useSesion() {
  const [snapshot, setSnapshot] = useState({ usuario, estado });

  useEffect(() => {
    const listener = () => setSnapshot({ usuario, estado });

    listeners.add(listener);

    /* Una sola consulta por carga de página, aunque monten varias pantallas. */
    if (!consultado) {
      consultado = true;
      void recuperarSesion();
    }

    listener();

    return () => {
      listeners.delete(listener);
    };
  }, []);

  const entrar = useCallback(async (email: string, password: string) => {
    aplicar(await authApi.login({ email, password }));
  }, []);

  const registrar = useCallback(
    async (datos: { email: string; password: string; nombre: string; telefono?: string }) => {
      aplicar(await authApi.registro(datos));
    },
    [],
  );

  const salir = useCallback(async () => {
    try {
      await authApi.logout();
    } finally {
      /* Aunque falle el pedido, en esta pestaña la sesión se da por cerrada. */
      aplicar(null);
    }
  }, []);

  return {
    usuario: snapshot.usuario,
    estado: snapshot.estado,
    conectado: snapshot.estado === 'conectado',
    entrar,
    registrar,
    salir,
    refrescar: recuperarSesion,
  };
}

/**
 * Abre el ingreso con Google en una ventana aparte.
 *
 * Se usa una ventana y no un redirect para no perder lo que el usuario tenga
 * a medio hacer (un carrito armado, un formulario a medias). El backend
 * responde con una página que avisa por postMessage y se cierra sola.
 */
export function ingresarConGoogle(): Promise<void> {
  return new Promise((resolve, reject) => {
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
      reject(new Error('El ingreso con Google no está disponible.'));
      return;
    }

    const ancho = 480;
    const alto = 640;
    /* Centrada sobre la ventana actual, no sobre la pantalla: en dos
       monitores, centrar en la pantalla la abre en el lugar equivocado. */
    const izquierda = window.screenX + (window.outerWidth - ancho) / 2;
    const arriba = window.screenY + (window.outerHeight - alto) / 2;

    const ventana = window.open(
      `${apiUrl}/auth/google`,
      'lafranciago-google',
      `width=${ancho},height=${alto},left=${izquierda},top=${arriba}`,
    );

    if (!ventana) {
      reject(new Error('Permití las ventanas emergentes para entrar con Google.'));
      return;
    }

    let terminado = false;

    const limpiar = () => {
      window.removeEventListener('message', alRecibir);
      window.clearInterval(vigilante);
    };

    function alRecibir(evento: MessageEvent) {
      /* Sólo se acepta el mensaje del backend: sin esta comprobación,
         cualquier página abierta podría fingir un ingreso exitoso. */
      if (evento.origin !== new URL(apiUrl).origin) {
        return;
      }

      const datos = evento.data as { tipo?: string; exito?: boolean; mensaje?: string };

      if (datos?.tipo !== 'lafranciago:oauth') {
        return;
      }

      terminado = true;
      limpiar();

      if (datos.exito) {
        void recuperarSesion().then(() => resolve());
      } else {
        reject(new Error(datos.mensaje ?? 'No pudimos completar el ingreso.'));
      }
    }

    window.addEventListener('message', alRecibir);

    /* Si cierran la ventana a mano no llega ningún mensaje: se detecta y se
       corta la promesa para no dejarla colgada para siempre. */
    const vigilante = window.setInterval(() => {
      if (ventana.closed && !terminado) {
        limpiar();
        reject(new Error('Cerraste la ventana antes de terminar.'));
      }
    }, 600);
  });
}
