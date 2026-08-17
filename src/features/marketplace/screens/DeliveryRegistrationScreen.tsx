import { FormEvent } from 'react';
import {
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Upload,
  UserRound,
  Wallet,
} from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import {
  Badge,
  Button,
  Card,
  CardPad,
  CardText,
  CardTitle,
  LinkButton,
  Section,
  SectionInner,
  SectionKicker,
  SectionText,
  SectionTitle,
} from '../ui';
import { CardStack, CompactSection, CompactSectionStack, InlineWrap, SectionStack } from './screenLayout';
import {
  ActionRow,
  FieldGroup,
  FieldHint,
  FieldInput,
  FieldLabel,
  FieldSelect,
  FieldStack,
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
import { DeliveryRegistrationGrid } from './DeliveryRegistrationScreenStyled';

const deliverySteps = [
  {
    id: 'step-1',
    title: 'Perfil y documentos',
    text: 'Completás tus datos, subís la foto de perfil y agregás licencia y seguro.',
  },
  {
    id: 'step-2',
    title: 'Validación',
    text: 'Revisamos identidad, medio de trabajo y datos para cobrar sin fricción.',
  },
  {
    id: 'step-3',
    title: 'Activación',
    text: 'Te aprobamos y quedás listo para empezar a repartir.',
  },
] as const;

const requiredFields = [
  'Foto de perfil',
  'Nombre',
  'Apellido',
  'Contraseña',
  'Repetir contraseña',
  'Carnet de conducir',
  'Seguro del vehículo',
  'Alias / CBU',
] as const;

export function DeliveryRegistrationScreen() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <MarketplaceFrame
      showSearch={false}
      footerText="Alta de delivery con validación de identidad, documentación del vehículo y medios de cobro."
    >
      <CompactSection>
        <SectionInner>
          <CompactSectionStack>
            <SectionKicker>Alta de delivery</SectionKicker>
            <SectionTitle>Sumate como repartidor y empezá a trabajar.</SectionTitle>
            <SectionText>
              Pedimos los datos mínimos para validar tu perfil, revisar tus documentos y dejar
              listo el cobro por alias o CBU.
            </SectionText>
          </CompactSectionStack>
        </SectionInner>
      </CompactSection>

      <CompactSection>
        <SectionInner>
          <DeliveryRegistrationGrid>
            <FormCard>
              <form onSubmit={handleSubmit}>
                <FieldStack>
                  <CardTitle>Datos obligatorios</CardTitle>
                  <CardText>
                    Con esto damos de alta tu perfil de delivery con una validación clara.
                  </CardText>

                  <Card>
                    <CardPad>
                      <FieldStack>
                        <UploadBox htmlFor="delivery-profile-photo">
                          <UploadTitle>
                            <Upload size={16} aria-hidden="true" /> Foto de perfil
                          </UploadTitle>
                          <UploadText>
                            Subí una imagen clara para que comercios y clientes te identifiquen.
                          </UploadText>
                          <FieldInput
                            id="delivery-profile-photo"
                            type="file"
                            accept="image/*"
                            required
                          />
                        </UploadBox>

                        <FormGrid>
                          <FieldGroup htmlFor="delivery-first-name">
                            <FieldLabel>
                              <UserRound size={16} aria-hidden="true" />
                              Nombre
                            </FieldLabel>
                            <FieldInput
                              id="delivery-first-name"
                              type="text"
                              placeholder="Juan"
                              required
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="delivery-last-name">
                            <FieldLabel>
                              <UserRound size={16} aria-hidden="true" />
                              Apellido
                            </FieldLabel>
                            <FieldInput
                              id="delivery-last-name"
                              type="text"
                              placeholder="Pérez"
                              required
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="delivery-password">
                            <FieldLabel>
                              <ShieldCheck size={16} aria-hidden="true" />
                              Contraseña
                            </FieldLabel>
                            <FieldInput
                              id="delivery-password"
                              type="password"
                              placeholder="••••••••"
                              required
                            />
                            <FieldHint>Usá una contraseña segura para proteger tu acceso.</FieldHint>
                          </FieldGroup>

                          <FieldGroup htmlFor="delivery-password-repeat">
                            <FieldLabel>
                              <ShieldCheck size={16} aria-hidden="true" />
                              Repetir contraseña
                            </FieldLabel>
                            <FieldInput
                              id="delivery-password-repeat"
                              type="password"
                              placeholder="••••••••"
                              required
                            />
                          </FieldGroup>
                        </FormGrid>
                      </FieldStack>
                    </CardPad>
                  </Card>

                  <Card>
                    <CardPad>
                      <FieldStack>
                        <CardTitle>Documentación y cobro</CardTitle>
                        <CardText>
                          Necesitamos documentos al día para habilitarte y pagarte sin demoras.
                        </CardText>

                        <FormGrid>
                          <FieldStack>
                            <FieldLabel>
                              <FileText size={16} aria-hidden="true" />
                              Carnet de conducir
                            </FieldLabel>
                            <UploadBox htmlFor="delivery-license">
                              <UploadTitle>
                                <Upload size={16} aria-hidden="true" /> Subí tu licencia
                              </UploadTitle>
                              <UploadText>Foto o PDF legible de frente y dorso si aplica.</UploadText>
                              <FieldInput
                                id="delivery-license"
                                type="file"
                                accept="image/*,application/pdf"
                                required
                              />
                            </UploadBox>
                          </FieldStack>

                          <FieldStack>
                            <FieldLabel>
                              <FileText size={16} aria-hidden="true" />
                              Seguro del vehículo
                            </FieldLabel>
                            <UploadBox htmlFor="delivery-insurance">
                              <UploadTitle>
                                <Upload size={16} aria-hidden="true" /> Subí tu seguro vigente
                              </UploadTitle>
                              <UploadText>
                                Aceptamos foto o PDF del seguro del vehículo en uso.
                              </UploadText>
                              <FieldInput
                                id="delivery-insurance"
                                type="file"
                                accept="image/*,application/pdf"
                                required
                              />
                            </UploadBox>
                          </FieldStack>

                          <FieldGroup htmlFor="delivery-alias-cbu">
                            <FieldLabel>
                              <Wallet size={16} aria-hidden="true" />
                              Alias / CBU
                            </FieldLabel>
                            <FieldInput
                              id="delivery-alias-cbu"
                              type="text"
                              placeholder="alias.o.cbu"
                              required
                            />
                            <FieldHint>Usá el dato donde querés recibir los pagos.</FieldHint>
                          </FieldGroup>

                          <FieldGroup htmlFor="delivery-phone">
                            <FieldLabel>
                              <Phone size={16} aria-hidden="true" />
                              Teléfono
                            </FieldLabel>
                            <FieldInput
                              id="delivery-phone"
                              type="tel"
                              placeholder="+54 3573 400-201"
                            />
                          </FieldGroup>
                        </FormGrid>
                      </FieldStack>
                    </CardPad>
                  </Card>

                  <Card>
                    <CardPad>
                      <FieldStack>
                        <CardTitle>Opcionales útiles</CardTitle>
                        <CardText>
                          Esto ayuda a validar más rápido tu perfil y a asignarte pedidos cerca.
                        </CardText>

                        <FormGrid>
                          <FieldGroup htmlFor="delivery-email">
                            <FieldLabel>
                              <Mail size={16} aria-hidden="true" />
                              Email
                            </FieldLabel>
                            <FieldInput
                              id="delivery-email"
                              type="email"
                              placeholder="delivery@correo.com"
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="delivery-zone">
                            <FieldLabel>
                              <MapPin size={16} aria-hidden="true" />
                              Zona de trabajo
                            </FieldLabel>
                            <FieldInput
                              id="delivery-zone"
                              type="text"
                              placeholder="La Francia centro, Ruta 19..."
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="delivery-vehicle">
                            <FieldLabel>
                              <Truck size={16} aria-hidden="true" />
                              Vehículo
                            </FieldLabel>
                            <FieldSelect id="delivery-vehicle" defaultValue="moto">
                              <option value="moto">Moto</option>
                              <option value="auto">Auto</option>
                              <option value="bicicleta">Bicicleta</option>
                              <option value="camioneta">Camioneta</option>
                            </FieldSelect>
                          </FieldGroup>

                          <FieldGroup htmlFor="delivery-plate">
                            <FieldLabel>
                              <Truck size={16} aria-hidden="true" />
                              Patente
                            </FieldLabel>
                            <FieldInput
                              id="delivery-plate"
                              type="text"
                              placeholder="AA123BB"
                            />
                          </FieldGroup>
                        </FormGrid>
                      </FieldStack>
                    </CardPad>
                  </Card>

                  <ActionRow>
                    <Button type="submit">Postularme como delivery</Button>
                    <LinkButton to="/">Volver al inicio</LinkButton>
                  </ActionRow>
                </FieldStack>
              </form>
            </FormCard>

            <SidePanel>
              <FieldStack>
                <CardTitle>Qué necesitamos para activarte</CardTitle>
                <RegistrationNotes>
                  <SummaryItem>
                    <SummaryBullet />
                    <span>Foto de perfil legible y datos personales consistentes.</span>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryBullet />
                    <span>Carnet de conducir y seguro del vehículo vigentes.</span>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryBullet />
                    <span>Alias o CBU propio para liquidar los pagos.</span>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryBullet />
                    <span>Contraseña segura para proteger el acceso a tu cuenta.</span>
                  </SummaryItem>
                </RegistrationNotes>
              </FieldStack>

              <Card>
                <CardPad>
                  <RegistrationSteps>
                    <CardTitle>Proceso de alta</CardTitle>
                    {deliverySteps.map((step, index) => (
                      <MiniBadge key={step.id}>
                        {index + 1}. {step.title}
                      </MiniBadge>
                    ))}
                  </RegistrationSteps>
                </CardPad>
              </Card>

              <Card>
                <CardPad>
                  <FieldStack>
                    <CardTitle>Campos obligatorios</CardTitle>
                    <InlineWrap>
                      {requiredFields.map((field) => (
                        <Badge key={field}>{field}</Badge>
                      ))}
                    </InlineWrap>

                    <CardStack>
                      {deliverySteps.map((step) => (
                        <Card key={step.id}>
                          <CardPad>
                            <FieldStack>
                              <SectionKicker>{step.title}</SectionKicker>
                              <CardText>{step.text}</CardText>
                            </FieldStack>
                          </CardPad>
                        </Card>
                      ))}
                    </CardStack>
                  </FieldStack>
                </CardPad>
              </Card>
            </SidePanel>
          </DeliveryRegistrationGrid>
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
