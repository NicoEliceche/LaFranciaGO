import {
  Bell,
  Heart,
  LogOut,
  MapPin,
  PackageSearch,
  Phone,
  ShieldCheck,
  Store,
  Truck,
  UserRound,
} from 'lucide-react';

import { MotoDeliveryIcon } from '@shared/components/icons/MotoDeliveryIcon';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { SectionHeading } from '../components/SectionHeading';
import { SettingsList, SettingsRow } from '../components/SettingsList';
import { addresses } from '../marketplaceContent';
import { Avatar } from '@shared/components/Media';
import { SectionInner } from '../ui';
import { CompactSection, SectionStack } from './screenLayout';
import {
  AccountProfileCard,
  AccountProfileCopy,
  AccountProfileMail,
  AccountProfileName,
  AccountProfileTag,
} from './CustomerAccountScreenStyled';

const primaryAddress = addresses.find((address) => address.primary) ?? addresses[0];

export function CustomerAccountScreen() {
  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <AccountProfileCard>
            <Avatar $size="3.75rem" $tone="blue">
              <UserRound size={26} aria-hidden="true" />
            </Avatar>

            <AccountProfileCopy>
              <AccountProfileName>Vecino de La Francia</AccountProfileName>
              <AccountProfileMail>cuenta@lafranciago.com</AccountProfileMail>
              <AccountProfileTag>Cliente</AccountProfileTag>
            </AccountProfileCopy>
          </AccountProfileCard>
        </SectionInner>
      </CompactSection>

      <CompactSection>
        <SectionInner>
          <SectionStack>
            <SectionHeading title="Mi actividad" />

            <SettingsList>
              <SettingsRow
                icon={PackageSearch}
                title="Mis pedidos"
                subtitle="Seguimiento y historial"
                to="/pedidos"
              />
              <SettingsRow
                icon={Heart}
                title="Favoritos"
                subtitle="Productos y comercios guardados"
                to="/favoritos"
              />
              <SettingsRow
                icon={Bell}
                title="Notificaciones"
                subtitle="Alertas y seguimientos"
                to="/notificaciones"
              />
            </SettingsList>
          </SectionStack>
        </SectionInner>
      </CompactSection>

      <CompactSection>
        <SectionInner>
          <SectionStack>
            <SectionHeading title="Mis datos" />

            <SettingsList>
              <SettingsRow icon={UserRound} title="Nombre visible" subtitle="Vecino de La Francia" />
              <SettingsRow
                icon={MapPin}
                title="Tus direcciones"
                subtitle={primaryAddress?.address ?? 'Sin direcciones guardadas'}
              />
              <SettingsRow icon={Phone} title="Número de contacto" subtitle="+54 9 3564 000000" />
              <SettingsRow
                icon={ShieldCheck}
                title="Seguridad"
                subtitle="Contraseña y acceso"
              />
            </SettingsList>
          </SectionStack>
        </SectionInner>
      </CompactSection>

      <CompactSection>
        <SectionInner>
          <SectionStack>
            <SectionHeading title="Sumate" />

            <SettingsList>
              <SettingsRow
                icon={Store}
                title="Publicar mi comercio"
                subtitle="Registrá tu negocio"
                to="/registro/comercio"
              />
              <SettingsRow
                icon={MotoDeliveryIcon}
                title="Registrate como delivery"
                subtitle="Trabajá repartiendo pedidos"
                to="/trabaja-con-nosotros"
              />
              <SettingsRow
                icon={Truck}
                title="Registrate como fletero"
                subtitle="Trabajá haciendo fletes"
                to="/registro/fletero"
              />
            </SettingsList>
          </SectionStack>
        </SectionInner>
      </CompactSection>

      <CompactSection>
        <SectionInner>
          <SettingsList>
            <SettingsRow icon={LogOut} title="Cerrar sesión" tone="danger" />
          </SettingsList>
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
