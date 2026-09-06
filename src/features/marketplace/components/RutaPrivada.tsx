import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { hayBackend } from '@core/data/services/apiClient';

import { useSesion } from '../sessionStore';

/**
 * Protege las pantallas que muestran datos de una persona.
 *
 * No se protege toda la app a propósito: mirar comercios y productos tiene que
 * poder hacerse sin cuenta. Si lo primero que aparece es un formulario de
 * ingreso, el vecino que sólo quiere ver qué hay se va antes de entender de
 * qué se trata. Se pide la cuenta recién cuando hace falta: para ver *tus*
 * pedidos, *tus* favoritos o *tu* perfil.
 *
 * Esto es una comodidad de interfaz, no la seguridad: quien conozca la URL de
 * la API igual puede llamarla. La protección de verdad está en el backend,
 * que pide sesión y sólo devuelve lo que pertenece a quien pregunta.
 */
export function RutaPrivada({ children }: { children: ReactNode }) {
  const { estado } = useSesion();
  const location = useLocation();

  /* Sin backend configurado la app corre con datos de ejemplo: bloquear acá
     dejaría la demo inutilizable. */
  if (!hayBackend()) {
    return <>{children}</>;
  }

  /* Mientras se comprueba la cookie no se decide nada: redirigir en este
     momento sacaría de la pantalla a alguien que sí tiene la sesión válida. */
  if (estado === 'cargando') {
    return null;
  }

  if (estado === 'invitado') {
    /* Se recuerda a dónde iba para volver ahí después de entrar, en lugar de
       dejarlo en una pantalla cualquiera. */
    const destino = `${location.pathname}${location.search}`;

    return <Navigate to={`/ingresar?destino=${encodeURIComponent(destino)}`} replace />;
  }

  return <>{children}</>;
}
