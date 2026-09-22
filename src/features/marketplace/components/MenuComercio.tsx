import { useEffect, useSyncExternalStore } from 'react';
import { ArrowRight, LayoutDashboard, Sparkles } from 'lucide-react';

import { hayBackend } from '@core/data/services/apiClient';

import { consultarPlan, escucharPlan, leerPlan } from '../planGestionStore';
import { useSesion } from '../sessionStore';
import {
  DrawerItemArrow,
  DrawerItemIcon,
  DrawerItemSubtitle,
  DrawerItemText,
  DrawerItemTitle,
  DrawerList,
  DrawerSection,
  DrawerSectionLabel,
} from './MarketplaceFrameStyled';
import { ItemGestion } from './MenuComercioStyled';

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
 * Si el plan todavía no se consultó se muestra igual, ofreciéndolo. Antes se
 * escondía hasta tener la respuesta, y como el menú se vuelve a montar en
 * cada pantalla, la entrada desaparecía y reaparecía al navegar.
 */
export function MenuComercio({ onNavegar }: { onNavegar?: () => void }) {
  const { usuario } = useSesion();
  const esComercio = usuario?.rol === 'comercio';

  const plan = useSyncExternalStore(escucharPlan, leerPlan);

  useEffect(() => {
    if (!esComercio || !hayBackend() || !usuario?.id) return;

    consultarPlan(usuario.id);
  }, [esComercio, usuario?.id]);

  if (!esComercio) return null;

  const tiene = plan === 'si';

  return (
    <DrawerSection>
      <DrawerSectionLabel>MI NEGOCIO</DrawerSectionLabel>
      <DrawerList aria-label="Sistema de gestión">
        <ItemGestion
          to={tiene ? '/gestion' : '/gestion/contratar'}
          data-contratado={tiene}
          onClick={() => onNavegar?.()}
        >
          <DrawerItemIcon aria-hidden="true">
            {tiene ? (
              <LayoutDashboard size={18} aria-hidden="true" />
            ) : (
              <Sparkles size={18} aria-hidden="true" />
            )}
          </DrawerItemIcon>
          <DrawerItemText>
            <DrawerItemTitle>
              {tiene ? 'Sistema de gestión' : 'Activar el sistema de gestión'}
            </DrawerItemTitle>
            <DrawerItemSubtitle>
              {tiene ? 'Caja, ventas, compras e informes' : 'Caja, costos y stock del mostrador'}
            </DrawerItemSubtitle>
          </DrawerItemText>
          <DrawerItemArrow aria-hidden="true">
            <ArrowRight size={16} aria-hidden="true" />
          </DrawerItemArrow>
        </ItemGestion>
      </DrawerList>
    </DrawerSection>
  );
}
