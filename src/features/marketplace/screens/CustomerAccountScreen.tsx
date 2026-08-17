import {
  Bell,
  KeyRound,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
} from 'lucide-react';
import { FormEvent } from 'react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { addresses } from '../marketplaceContent';
import {
  Badge,
  Button,
  Card,
  CardText,
  CardTitle,
  LinkButton,
  SectionInner,
  SectionKicker,
} from '../ui';
import {
  CardStack,
  CardTopRow,
  CompactCardPad,
  CompactCardStack,
  CompactSection,
  CompactSectionStack,
  CompactTitle,
} from './screenLayout';
import {
  AccountGrid,
  CompactFormCard,
  CompactSidePanel,
  ProfileHeroAvatar,
  ProfileHeroCard,
  ProfileHeroCopy,
  ProfileHeroName,
  ProfileHeroStats,
  ProfileHeroText,
  ProfileHeroTop,
  SecurityGrid,
} from './CustomerAccountScreenStyled';
import {
  ActionRow,
  FieldGroup,
  FieldHint,
  FieldInput,
  FieldLabel,
  FieldSelect,
  FieldStack,
  FieldTextarea,
  FormCard,
  FormGrid,
  SidePanel,
  ToggleButton,
  ToggleText,
  ToggleTitle,
  UploadBox,
  UploadText,
  UploadTitle,
} from './formStyles';

export function CustomerAccountScreen() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <MarketplaceFrame
      showSearch={false}
      footerText="Perfil del usuario con Google login, seguridad y direcciones guardadas."
    >
      <CompactSection>
        <SectionInner>
          <ProfileHeroCard>
            <ProfileHeroTop>
              <ProfileHeroAvatar aria-hidden="true">
                <UserRound size={22} aria-hidden="true" />
              </ProfileHeroAvatar>

              <ProfileHeroCopy>
                <SectionKicker>Perfil</SectionKicker>
                <ProfileHeroName>Cuenta personal</ProfileHeroName>
                <ProfileHeroText>Datos listos para pedidos, entregas, pagos y seguridad.</ProfileHeroText>
              </ProfileHeroCopy>
            </ProfileHeroTop>

            <ProfileHeroStats>
              <Badge>Google login</Badge>
              <Badge>Foto de perfil</Badge>
              <Badge>Direcciones</Badge>
              <Badge>Notificaciones</Badge>
            </ProfileHeroStats>
          </ProfileHeroCard>
        </SectionInner>
      </CompactSection>

      <CompactSection>
        <SectionInner>
          <AccountGrid>
            <CompactFormCard>
              <form onSubmit={handleSubmit}>
                <CompactSectionStack>
                  <CardTitle>Datos personales</CardTitle>
                  <CardText>Completá tu perfil para pedidos, entregas, seguridad y cobros.</CardText>

                  <Button type="button">
                    <UserRound size={16} aria-hidden="true" />
                    Sincronizar con Google
                  </Button>

                  <FormGrid>
                    <FieldGroup htmlFor="profile-name">
                      <FieldLabel>
                        <UserRound size={16} aria-hidden="true" />
                        Nombre
                      </FieldLabel>
                      <FieldInput id="profile-name" type="text" placeholder="Nicolás" />
                    </FieldGroup>

                    <FieldGroup htmlFor="profile-lastname">
                      <FieldLabel>
                        <UserRound size={16} aria-hidden="true" />
                        Apellido
                      </FieldLabel>
                      <FieldInput id="profile-lastname" type="text" placeholder="Eliceche" />
                    </FieldGroup>

                    <FieldGroup htmlFor="profile-email">
                      <FieldLabel>
                        <Mail size={16} aria-hidden="true" />
                        Email
                      </FieldLabel>
                      <FieldInput id="profile-email" type="email" placeholder="usuario@correo.com" />
                    </FieldGroup>

                    <FieldGroup htmlFor="profile-phone">
                      <FieldLabel>
                        <Phone size={16} aria-hidden="true" />
                        Teléfono
                      </FieldLabel>
                      <FieldInput id="profile-phone" type="tel" placeholder="+54 3573 400-201" />
                    </FieldGroup>

                    <FieldGroup htmlFor="profile-address">
                      <FieldLabel>
                        <MapPin size={16} aria-hidden="true" />
                        Dirección principal
                      </FieldLabel>
                      <FieldInput id="profile-address" type="text" placeholder="Av. San Martín 123" />
                    </FieldGroup>

                    <FieldGroup htmlFor="profile-area">
                      <FieldLabel>
                        <Sparkles size={16} aria-hidden="true" />
                        Barrio / zona
                      </FieldLabel>
                      <FieldSelect id="profile-area" defaultValue="centro">
                        <option value="centro">Centro</option>
                        <option value="norte">Barrio Norte</option>
                        <option value="ruta19">Ruta 19</option>
                      </FieldSelect>
                    </FieldGroup>

                    <FieldGroup htmlFor="profile-birthdate">
                      <FieldLabel>Fecha de nacimiento</FieldLabel>
                      <FieldInput id="profile-birthdate" type="date" />
                    </FieldGroup>

                    <FieldGroup htmlFor="profile-language">
                      <FieldLabel>Idioma</FieldLabel>
                      <FieldSelect id="profile-language" defaultValue="es">
                        <option value="es">Español</option>
                        <option value="en">English</option>
                      </FieldSelect>
                    </FieldGroup>
                  </FormGrid>

                  <Card>
                    <CompactCardPad>
                      <CompactSectionStack>
                        <CardTitle>Foto de perfil</CardTitle>
                        <UploadBox htmlFor="profile-photo">
                          <UploadTitle>
                            <UserRound size={16} aria-hidden="true" /> Subí tu foto de perfil
                          </UploadTitle>
                          <UploadText>
                            PNG, JPG o WebP. Esto mejora el reconocimiento en pedidos y soporte.
                          </UploadText>
                          <FieldInput id="profile-photo" type="file" accept="image/*" />
                        </UploadBox>
                      </CompactSectionStack>
                    </CompactCardPad>
                  </Card>

                  <FieldGroup htmlFor="profile-notes">
                    <FieldLabel>Notas de entrega</FieldLabel>
                    <FieldTextarea
                      id="profile-notes"
                      placeholder="Portón azul, tocar timbre, dejar en recepción..."
                    />
                    <FieldHint>Útil para delivery, retiro y pedidos frecuentes.</FieldHint>
                  </FieldGroup>

                  <ActionRow>
                    <Button type="submit">Guardar cambios</Button>
                    <LinkButton to="/notificaciones">Ajustar alertas</LinkButton>
                  </ActionRow>
                </CompactSectionStack>
              </form>
            </CompactFormCard>

            <CompactSidePanel>
              <CompactSectionStack>
                <CompactSectionStack>
                  <CardTitle>Seguridad</CardTitle>
                  <CardText>Recuperación rápida, autenticación simple y control de sesión.</CardText>

                  <SecurityGrid>
                    <ToggleButton type="button" data-active={true}>
                      <ToggleTitle>
                        <ShieldCheck size={16} aria-hidden="true" /> Autenticación segura
                      </ToggleTitle>
                      <ToggleText>Google activo y listo para sumar nuevas opciones.</ToggleText>
                    </ToggleButton>

                    <ToggleButton type="button" data-active={false}>
                      <ToggleTitle>
                        <KeyRound size={16} aria-hidden="true" /> Cambiar contraseña
                      </ToggleTitle>
                      <ToggleText>Pedido de seguridad para accesos sensibles.</ToggleText>
                    </ToggleButton>

                    <ToggleButton type="button" data-active={true}>
                      <ToggleTitle>
                        <Bell size={16} aria-hidden="true" /> Alertas activas
                      </ToggleTitle>
                      <ToggleText>Push y email para pedidos, ofertas y stock.</ToggleText>
                    </ToggleButton>
                  </SecurityGrid>
                </CompactSectionStack>

                <Card>
                  <CompactCardPad>
                    <CompactSectionStack>
                      <CardTitle>Direcciones guardadas</CardTitle>
                      <CompactCardStack>
                        {addresses.map((address) => (
                          <Card key={address.id}>
                            <CompactCardPad>
                              <CompactCardStack>
                                <CardTopRow>
                                  <div>
                                    <CompactTitle>{address.label}</CompactTitle>
                                    <CardText>{address.address}</CardText>
                                  </div>
                                  {address.primary && <Badge>Principal</Badge>}
                                </CardTopRow>
                              </CompactCardStack>
                            </CompactCardPad>
                          </Card>
                        ))}
                      </CompactCardStack>
                    </CompactSectionStack>
                  </CompactCardPad>
                </Card>
              </CompactSectionStack>
            </CompactSidePanel>
          </AccountGrid>
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
