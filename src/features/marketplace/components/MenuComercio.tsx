import { useEffect, useState } from 'react';
import { ArrowRight, LayoutDashboard, Wallet } from 'lucide-react';

import { hayBackend, planGestionApi } from '@core/data/services/apiClient';

import { useSesion } from '../sessionStore';
import {
  DrawerItem,
  DrawerItemArrow,
  DrawerItemIcon,
  DrawerItemSubtitle,
  DrawerItemText,
  DrawerItemTitle,
  DrawerList,
  DrawerSection,
  DrawerSectionLabel,
} from './MarketplaceFrameStyled';

/**
 * La sección del menú que sólo ve el comercio.
 *
 * Aparece únicamente con el rol comercio activo: al cliente no le dice nada,
 * y al repartidor menos. Y muestra una cosa distinta según tenga o no el
 * sistema de gestión contratado.
 *
 * Sin el plan, la opción de contratarlo tiene que estar acá y no escondida
 * adentro del panel del comercio: quien no lo tiene no sabe que existe, y un
 * producto que no se ofrece no se vende.
 *
 * Vive en su propio archivo porque el menú se dibuja dos veces —la barra de
 * escritorio y el cajón del teléfono— y duplicar la consulta del plan haría
 * dos llamadas por cada carga de página.
 */
export function MenuComercio({ onNavegar }: { onNavegar?: () => void }) {
  const { usuario } = useSesion();
  const esComercio = usuario?.rol === 'comercio';

  const [plan, setPlan] = useState<'cargando' | 'si' | 'no'>('cargando');

  useEffect(() => {
    if (!esComercio || !hayBackend()) return;

    let vigente = true;

    planGestionApi
      .ver()
      .then((datos) => {
        if (vigente) setPlan(datos.activo ? 'si' : 'no');
      })
      .catch(() => {
        /* Si no se pudo consultar se ofrece contratarlo: es lo que le sirve a
           quien todavía no lo tiene, y quien sí lo tiene llega al panel por
           su propia pantalla igual. */
        if (vigente) setPlan('no');
      });

    return () => {
      vigente = false;
    };
  }, [esComercio, usuario?.id]);

  if (!esComercio || plan === 'cargando') return null;

  const tiene = plan === 'si';

  return (
    <DrawerSection>
      <DrawerSectionLabel>MI NEGOCIO</DrawerSectionLabel>
      <DrawerList aria-label="Sistema de gestión">
        <DrawerItem
          to={tiene ? '/gestion' : '/gestion/contratar'}
          onClick={() => onNavegar?.()}
        >
          <DrawerItemIcon aria-hidden="true">
            {tiene ? (
              <LayoutDashboard size={18} aria-hidden="true" />
            ) : (
              <Wallet size={18} aria-hidden="true" />
            )}
          </DrawerItemIcon>
          <DrawerItemText>
            <DrawerItemTitle>
              {tiene ? 'Sistema de gestión' : 'Activar el sistema de gestión'}
            </DrawerItemTitle>
            <DrawerItemSubtitle>
              {tiene
                ? 'Caja, ventas, compras e informes'
                : 'Caja, costos y stock del mostrador'}
            </DrawerItemSubtitle>
          </DrawerItemText>
          <DrawerItemArrow aria-hidden="true">
            <ArrowRight size={16} aria-hidden="true" />
          </DrawerItemArrow>
        </DrawerItem>
      </DrawerList>
    </DrawerSection>
  );
}
