import {
  Building2,
  FileText,
  LayoutGrid,
  MapPin,
  Phone,
  ShieldCheck,
  Store,
  Upload,
  UserRound,
  Wallet,
} from 'lucide-react';
import { FormEvent } from 'react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { Badge, Button, Card, CardPad, CardText, CardTitle, LinkButton, PrimaryButton, Section, SectionHeader, SectionInner, SectionKicker, SectionText, SectionTitle } from '../ui';
import { CardStack, CompactSection, CompactSectionStack, InlineWrap, SectionStack } from './screenLayout';
import { RegistrationGrid } from './CommerceRegistrationScreenStyled';
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
  MiniBadge,
  RegistrationNotes,
  RegistrationSteps,
  SidePanel,
  SummaryBullet,
  SummaryItem,
  SummaryList,
  UploadBox,
  UploadText,
  UploadTitle,
} from './formStyles';

const suggestedFields = [
  'Nombre comercial',
  'Instagram/Facebook',
  'Horario de atención',
  'Zona de delivery',
  'Métodos de pago',
  'Descripción del negocio',
  'WhatsApp de ventas',
  'Fotos adicionales de catálogo',
];

const registrationSteps = [
  { id: 'step-1', title: 'Datos legales', text: 'Validamos CUIT/CUIL, razón social y dirección.' },
  { id: 'step-2', title: 'Branding', text: 'Subís logo, foto de perfil y nombre comercial.' },
  { id: 'step-3', title: 'Publicación', text: 'Pagás el alta y activás tu cuenta para aparecer.' },
];

export function CommerceRegistrationScreen() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <MarketplaceFrame
      showSearch={false}
      footerText="Alta de comercio con campos obligatorios y sugerencias para crecer con mejores perfiles."
    >
      <CompactSection>
        <SectionInner>
          <CompactSectionStack>
            <SectionKicker>Alta de comercio</SectionKicker>
            <SectionTitle>Formularios preparados para publicar y cobrar.</SectionTitle>
            <SectionText>
              Pedimos lo mínimo obligatorio para dejar al comercio listo y sumamos campos opcionales
              para mejorar presencia, soporte y conversión.
            </SectionText>
          </CompactSectionStack>
        </SectionInner>
      </CompactSection>

      <CompactSection>
        <SectionInner>
          <RegistrationGrid>
            <FormCard>
              <form onSubmit={handleSubmit}>
                <FieldStack>
                  <CardTitle>Datos obligatorios</CardTitle>

                  <FormGrid>
                    <FieldGroup htmlFor="business-tax">
                      <FieldLabel>
                        <FileText size={16} aria-hidden="true" />
                        CUIT / CUIL
                      </FieldLabel>
                      <FieldInput id="business-tax" type="text" placeholder="20-12345678-9" required />
                      <FieldHint>Validación fiscal para publicar como comercio.</FieldHint>
                    </FieldGroup>

                    <FieldGroup htmlFor="business-name">
                      <FieldLabel>
                        <Building2 size={16} aria-hidden="true" />
                        Razón social
                      </FieldLabel>
                      <FieldInput id="business-name" type="text" placeholder="La Huerta S.A." required />
                    </FieldGroup>

                    <FieldGroup htmlFor="business-address">
                      <FieldLabel>
                        <MapPin size={16} aria-hidden="true" />
                        Dirección
                      </FieldLabel>
                      <FieldInput id="business-address" type="text" placeholder="Av. Principal 123" required />
                    </FieldGroup>

                    <FieldGroup htmlFor="business-phone">
                      <FieldLabel>
                        <Phone size={16} aria-hidden="true" />
                        Teléfono
                      </FieldLabel>
                      <FieldInput id="business-phone" type="tel" placeholder="+54 3573 400-201" required />
                    </FieldGroup>

                    <FieldGroup htmlFor="business-email">
                      <FieldLabel>
                        <UserRound size={16} aria-hidden="true" />
                        Email
                      </FieldLabel>
                      <FieldInput id="business-email" type="email" placeholder="ventas@lahuerta.com" required />
                    </FieldGroup>

                    <FieldGroup htmlFor="business-category">
                      <FieldLabel>
                        <LayoutGrid size={16} aria-hidden="true" />
                        Rubro principal
                      </FieldLabel>
                      <FieldSelect id="business-category" defaultValue="verduleria">
                        <option value="verduleria">Verdulería</option>
                        <option value="almacen">Almacén</option>
                        <option value="bebidas">Bebidas</option>
                        <option value="carniceria">Carnicería</option>
                        <option value="panaderia">Panadería</option>
                        <option value="farmacia">Farmacia</option>
                      </FieldSelect>
                    </FieldGroup>

                    <FieldGroup htmlFor="business-password">
                      <FieldLabel>
                        <ShieldCheck size={16} aria-hidden="true" />
                        Contraseña
                      </FieldLabel>
                      <FieldInput id="business-password" type="password" placeholder="••••••••" required />
                    </FieldGroup>

                    <FieldGroup htmlFor="business-password-repeat">
                      <FieldLabel>
                        <ShieldCheck size={16} aria-hidden="true" />
                        Repetir contraseña
                      </FieldLabel>
                      <FieldInput
                        id="business-password-repeat"
                        type="password"
                        placeholder="••••••••"
                        required
                      />
                    </FieldGroup>
                  </FormGrid>

                  <Card>
                    <CardPad>
                      <SectionStack>
                        <CardTitle>Foto de perfil / logo</CardTitle>
                        <UploadBox htmlFor="business-logo">
                          <UploadTitle>
                            <Upload size={16} aria-hidden="true" /> Subí tu logo o foto de perfil
                          </UploadTitle>
                          <UploadText>
                            PNG, JPG o WebP. Idealmente cuadrado y con fondo limpio.
                          </UploadText>
                          <FieldInput id="business-logo" type="file" accept="image/*" />
                        </UploadBox>
                      </SectionStack>
                    </CardPad>
                  </Card>

                  <Card>
                    <CardPad>
                      <FieldStack>
                        <CardTitle>Opcionales recomendados</CardTitle>
                        <CardText>
                          Estos campos mejoran el perfil, el SEO interno y el soporte con clientes.
                        </CardText>

                        <FormGrid>
                          <FieldGroup htmlFor="business-display-name">
                            <FieldLabel>Nombre comercial</FieldLabel>
                            <FieldInput
                              id="business-display-name"
                              type="text"
                              placeholder="La Huerta"
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="business-whatsapp">
                            <FieldLabel>WhatsApp de ventas</FieldLabel>
                            <FieldInput
                              id="business-whatsapp"
                              type="tel"
                              placeholder="+54 3573 400-201"
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="business-hours">
                            <FieldLabel>Horario de atención</FieldLabel>
                            <FieldInput
                              id="business-hours"
                              type="text"
                              placeholder="Lun a sáb 08:00 - 21:30"
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="business-map">
                            <FieldLabel>Mapa / referencia</FieldLabel>
                            <FieldInput
                              id="business-map"
                              type="text"
                              placeholder="Ubicación exacta para Google Maps"
                            />
                          </FieldGroup>
                        </FormGrid>

                        <FieldGroup htmlFor="business-description">
                          <FieldLabel>Descripción del negocio</FieldLabel>
                          <FieldTextarea
                            id="business-description"
                            placeholder="Contá qué vendés, qué te diferencia y cómo entregás."
                          />
                        </FieldGroup>
                      </FieldStack>
                    </CardPad>
                  </Card>

                  <Card>
                    <CardPad>
                      <FieldStack>
                        <CardTitle>Operación y publicación</CardTitle>
                        <InlineWrap>
                          <Badge>Delivery</Badge>
                          <Badge>Retiro</Badge>
                          <Badge>Página pública</Badge>
                          <Badge>Sponsor interno</Badge>
                        </InlineWrap>

                        <FormGrid>
                          <FieldGroup htmlFor="business-method">
                            <FieldLabel>Método de publicación</FieldLabel>
                            <FieldSelect id="business-method" defaultValue="premium">
                              <option value="premium">Cuenta paga / Premium</option>
                              <option value="trial">Prueba inicial</option>
                              <option value="manual">Alta manual</option>
                            </FieldSelect>
                          </FieldGroup>

                          <FieldGroup htmlFor="business-zone">
                            <FieldLabel>Zona de cobertura</FieldLabel>
                            <FieldInput
                              id="business-zone"
                              type="text"
                              placeholder="Centro, Barrio Norte, Ruta 19..."
                            />
                          </FieldGroup>
                        </FormGrid>
                      </FieldStack>
                    </CardPad>
                  </Card>

                  <ActionRow>
                    <Button type="submit">Enviar y pasar a pago</Button>
                    <LinkButton to="/comercios">Volver al marketplace</LinkButton>
                  </ActionRow>
                </FieldStack>
              </form>
            </FormCard>

            <SidePanel>
              <SectionStack>
                <CardTitle>Qué gana el comercio</CardTitle>
                <RegistrationNotes>
                  <SummaryItem>
                    <SummaryBullet />
                    <span>Presencia en la home con cards, sponsor y carrusel de promociones.</span>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryBullet />
                    <span>Perfil propio con logo, horarios, stock, delivery y retiro.</span>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryBullet />
                    <span>Notificaciones por producto, comercio y oferta para fidelizar usuarios.</span>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryBullet />
                    <span>Base lista para crecer hacia Android, iOS y paneles internos.</span>
                  </SummaryItem>
                </RegistrationNotes>
              </SectionStack>

              <Card>
                <CardPad>
                  <RegistrationSteps>
                    <CardTitle>Proceso de alta</CardTitle>
                    {registrationSteps.map((step, index) => (
                      <MiniBadge key={step.id}>
                        {index + 1}. {step.title}
                      </MiniBadge>
                    ))}
                  </RegistrationSteps>
                </CardPad>
              </Card>

              <Card>
                <CardPad>
                  <SectionStack>
                    <CardTitle>Campos extras sugeridos</CardTitle>
                    <CardText>
                      Si el comercio quiere mejor performance, sumamos más campos más adelante.
                    </CardText>

                    <SummaryList>
                      {suggestedFields.map((field) => (
                        <SummaryItem key={field}>
                          <SummaryBullet />
                          <span>{field}</span>
                        </SummaryItem>
                      ))}
                    </SummaryList>
                  </SectionStack>
                </CardPad>
              </Card>
            </SidePanel>
          </RegistrationGrid>
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
