import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { hayBackend } from '@core/data/services/apiClient';

import { useSesion } from '../sessionStore';

/**
 * Lo primero que se ve al abrir la aplicación.
 *
 * Sin sesión va al ingreso, y no a la portada. Así un comercio entra
 * directamente con su cuenta en lugar de aterrizar como cliente y tener que
 * descubrir que existe "Cambiar de cuenta" al pie del menú.
 *
 * Pero mirar el pueblo no pide cuenta. Desde el ingreso hay un enlace para
 * entrar igual, y quien lo usa navega el marketplace como siempre: se le pide
 * la cuenta recién al confirmar el pedido, cuando ya sabe qué está comprando
 * y la cuenta aparece como el último paso y no como un peaje.
 *
 * Esa decisión se recuerda en el navegador, no en el servidor: es una
 * preferencia de esta persona en este aparato, y guardarla en la base
 * obligaría a tener cuenta para decir que no se quiere tener cuenta.
 */

const CLAVE_INVITADO = 'lafranciago:mirar-sin-cuenta';

/** Deja anotado que esta persona eligió mirar sin entrar. */
export function recordarInvitado() {
  try {
    window.sessionStorage.setItem(CLAVE_INVITADO, '1');
  } catch {
    /* Modo privado o almacenamiento bloqueado: se vuelve a preguntar. */
  }
}

/** Olvida esa elección: se usa al cerrar sesión. */
export function olvidarInvitado() {
  try {
    window.sessionStorage.removeItem(CLAVE_INVITADO);
  } catch {
    /* Si no se puede borrar, la próxima visita lo resuelve igual. */
  }
}

function eligioMirarSinCuenta() {
  try {
    return window.sessionStorage.getItem(CLAVE_INVITADO) === '1';
  } catch {
    return false;
  }
}

export function PortadaOIngreso({ children }: { children: React.ReactNode }) {
  const { estado } = useSesion();

  /* Se lee una sola vez al montar: si cambiara en medio de la navegación, la
     portada se reemplazaría por el ingreso con la persona mirando. */
  const [invitado] = useState(eligioMirarSinCuenta);

  /* Volver a la portada desde el ingreso cuenta como querer mirar. Sin esto,
     tocar "Mirar sin cuenta" devolvería al ingreso en el acto. */
  useEffect(() => {
    if (estado === 'invitado' && invitado) recordarInvitado();
  }, [estado, invitado]);

  /* Sin backend la aplicación corre con datos de ejemplo: mandar al ingreso
     dejaría la demostración sin manera de entrar. */
  if (!hayBackend()) return <>{children}</>;

  /* Mientras se comprueba la cookie no se decide nada: redirigir en este
     momento sacaría del lugar a quien sí tiene la sesión válida. */
  if (estado === 'cargando') return null;

  if (estado === 'invitado' && !invitado) return <Navigate to="/ingresar" replace />;

  return <>{children}</>;
}
