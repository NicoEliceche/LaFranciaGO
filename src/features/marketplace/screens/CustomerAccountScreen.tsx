import { useRef, useState } from 'react';
import {
  Bell,
  Camera,
  Heart,
  LogOut,
  MapPin,
  PackageSearch,
  Phone,
  ShieldCheck,
  Store,
  Truck,
  UserRound,
  X,
} from 'lucide-react';

import { MotoDeliveryIcon } from '@shared/components/icons/MotoDeliveryIcon';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { SectionHeading } from '../components/SectionHeading';
import { SettingsList, SettingsRow } from '../components/SettingsList';
import { addresses } from '../marketplaceContent';
import { Avatar, AvatarImage } from '@shared/components/Media';
import { IMAGE_ACCEPT, processImage, validateImageFile } from '@core/data/services/mediaService';
import { useProfilePhoto } from '../profileStore';
import { SectionInner } from '../ui';
import { CompactSection, SectionStack } from './screenLayout';
import {
  AccountProfileCard,
  AccountProfileCopy,
  AccountProfileMail,
  AccountProfileName,
  AccountProfileTag,
  AvatarButton,
  AvatarEditBadge,
  AvatarError,
  AvatarRemove,
  AvatarSlot,
} from './CustomerAccountScreenStyled';

const primaryAddress = addresses.find((address) => address.primary) ?? addresses[0];

export function CustomerAccountScreen() {
  const { photo, setPhoto, clearPhoto } = useProfilePhoto();
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * La foto se comprime antes de guardarla y se convierte a data URL: un
   * object URL se pierde al recargar, y acá tiene que sobrevivir.
   */
  const handleFile = async (file: File) => {
    const invalid = validateImageFile(file);

    if (invalid) {
      setError(invalid);
      return;
    }

    setError(null);

    try {
      const processed = await processImage(file);
      const reader = new FileReader();

      reader.onload = () => setPhoto(String(reader.result));
      reader.onerror = () => setError('No pudimos leer la imagen. Probá con otra.');
      reader.readAsDataURL(processed.blob);

      /* El preview del procesado no se usa acá: se libera para no filtrar. */
      URL.revokeObjectURL(processed.previewUrl);
    } catch {
      setError('No pudimos procesar la imagen. Probá con otra.');
    }
  };

  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <AccountProfileCard>
            <AvatarSlot>
              <AvatarButton
                type="button"
                onClick={() => fileRef.current?.click()}
                aria-label={photo ? 'Cambiar la foto de perfil' : 'Subir una foto de perfil'}
              >
                <Avatar $size="3.75rem" $tone="blue">
                  {photo ? (
                    <AvatarImage src={photo} alt="" />
                  ) : (
                    <UserRound size={26} aria-hidden="true" />
                  )}
                </Avatar>

                <AvatarEditBadge aria-hidden="true">
                  <Camera size={13} />
                </AvatarEditBadge>
              </AvatarButton>

              {photo ? (
                <AvatarRemove
                  type="button"
                  onClick={() => {
                    clearPhoto();
                    setError(null);
                  }}
                  aria-label="Quitar la foto de perfil"
                >
                  <X size={13} aria-hidden="true" />
                </AvatarRemove>
              ) : null}

              <input
                ref={fileRef}
                type="file"
                accept={IMAGE_ACCEPT}
                hidden
                onChange={(event) => {
                  const file = event.target.files?.[0];

                  if (file) {
                    void handleFile(file);
                  }

                  /* Se limpia para poder volver a elegir el mismo archivo. */
                  event.target.value = '';
                }}
              />
            </AvatarSlot>

            <AccountProfileCopy>
              <AccountProfileName>Vecino de La Francia</AccountProfileName>
              <AccountProfileMail>cuenta@lafranciago.com</AccountProfileMail>
              <AccountProfileTag>Cliente</AccountProfileTag>
              {error ? <AvatarError role="status">{error}</AvatarError> : null}
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
