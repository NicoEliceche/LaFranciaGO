import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { hayBackend, miComercioApi } from '@core/data/services/apiClient';

import { RutaPrivada } from '@features/marketplace/components/RutaPrivada';

/**
 * Protege el sistema de gestión, que se paga aparte.
 *
 * Son dos condiciones, no una: hay que tener comercio, y hay que haber
 * contratado el plan. Un comercio sin el plan usa la aplicación como siempre
 * —su perfil, sus productos, sus precios, sus ofertas y sus fotos— pero la
 * caja, las compras y los informes no le aparecen.
 *
 * Esto es comodidad de interfaz, no la seguridad. Quien escriba la dirección
 * a mano llega igual, y por eso la decisión de verdad está en el backend, que
 * responde 403 a todo lo que cuelga de /gestion si el comercio no lo tiene
 * activo. Acá se evita mostrar un menú que después no funcionaría.
 */
export function RutaGestion({ children }: { children: ReactNode }) {
  return (
    <RutaPrivada>
      <ConPlan>{children}</ConPlan>
    </RutaPrivada>
  );
}

function ConPlan({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<'cargando' | 'si' | 'no'>(
    /* Sin backend la app corre con datos de ejemplo: pedir el plan dejaría la
       demo inutilizable. */
    hayBackend() ? 'cargando' : 'si',
  );

  useEffect(() => {
    if (!hayBackend()) return;

    let vigente = true;

    void miComercioApi
      .ver()
      .then((datos) => {
        if (!vigente) return;

        setPlan(datos.comercio?.gestionActiva ? 'si' : 'no');
      })
      .catch(() => {
        /* Si la consulta falla no se deja pasar: mostrar el panel y que
           después cada pantalla dé error es peor que no mostrarlo. */
        if (vigente) setPlan('no');
      });

    return () => {
      vigente = false;
    };
  }, []);

  /* Mientras se consulta no se decide nada: redirigir acá sacaría de la
     pantalla a un comercio que sí tiene el plan. */
  if (plan === 'cargando') return null;

  if (plan === 'no') return <Navigate to="/panel/comercio" replace />;

  return <>{children}</>;
}
