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

import { FileField } from '@shared/components/FileField';

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

type CourierRole = 'delivery' | 'fletero';

/** Vehículos que ofrece cada alta. */
const vehiclesByRole: Record<CourierRole, Array<{ value: string; label: string }>> = {
  delivery: [
    { value: 'moto', label: 'Moto' },
    { value: 'bicicleta', label: 'Bicicleta' },
    { value: 'auto', label: 'Auto' },
  ],
  fletero: [
    { value: 'camioneta', label: 'Camioneta' },
    { value: 'utilitario', label: 'Utilitario' },
    { value: 'camion-chico', label: 'Camión chico' },
    { value: 'camion', label: 'Camión' },
  ],
};

const roleCopy: Record<CourierRole, { kicker: string; title: string; text: string; footer: string }> = {
  delivery: {
    kicker: 'Alta de delivery',
    title: 'Sumate como repartidor y empezá a trabajar.',
    text: 'Pedimos los datos mínimos para validar tu perfil, revisar tus documentos y dejar listo el cobro por alias o CBU.',
    footer: 'Alta de delivery con validación de identidad, documentación del vehículo y medios de cobro.',
  },
  fletero: {
    kicker: 'Alta de fletero',
    title: 'Sumate como fletero y llevá cargas grandes.',
    text: 'Contanos con qué vehículo trabajás y qué volumen podés trasladar. Validamos tus documentos y dejamos listo el cobro.',
    footer: 'Alta de fletero con validación de identidad, documentación del vehículo y medios de cobro.',
  },
};

type DeliveryRegistrationScreenProps = {
  /** Define los textos del alta; el formulario es el mismo para ambos roles. */
  role?: CourierRole;
};

export function DeliveryRegistrationScreen({ role = 'delivery' }: DeliveryRegistrationScreenProps) {
  const copy = roleCopy[role];
  const vehicles = vehiclesByRole[role];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <MarketplaceFrame
      showSearch={false}
    >
      <CompactSection>
        <SectionInner>
          <CompactSectionStack>
            <SectionKicker>{copy.kicker}</SectionKicker>
            <SectionTitle>{copy.title}</SectionTitle>
            <SectionText>{copy.text}</SectionText>
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
                        <UploadBox htmlFor="courier-profile-photo">
                          <UploadTitle>
                            <Upload size={16} aria-hidden="true" /> Foto de perfil
                          </UploadTitle>
                          <UploadText>
                            Subí una imagen clara para que comercios y clientes te identifiquen.
                          </UploadText>
                          <FileField
                            id="courier-profile-photo"
                            accept="image/*"
                            required
                          />
                        </UploadBox>

                        <FormGrid>
                          <FieldGroup htmlFor="courier-first-name">
                            <FieldLabel>
                              <UserRound size={16} aria-hidden="true" />
                              Nombre
                            </FieldLabel>
                            <FieldInput
                              id="courier-first-name"
                              type="text"
                              placeholder="Juan"
                              required
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="courier-last-name">
                            <FieldLabel>
                              <UserRound size={16} aria-hidden="true" />
                              Apellido
                            </FieldLabel>
                            <FieldInput
                              id="courier-last-name"
                              type="text"
                              placeholder="Pérez"
                              required
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="courier-password">
                            <FieldLabel>
                              <ShieldCheck size={16} aria-hidden="true" />
                              Contraseña
                            </FieldLabel>
                            <FieldInput
                              id="courier-password"
                              type="password"
                              placeholder="••••••••"
                              required
                            />
                            <FieldHint>Usá una contraseña segura para proteger tu acceso.</FieldHint>
                          </FieldGroup>

                          <FieldGroup htmlFor="courier-password-repeat">
                            <FieldLabel>
                              <ShieldCheck size={16} aria-hidden="true" />
                              Repetir contraseña
                            </FieldLabel>
                            <FieldInput
                              id="courier-password-repeat"
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
                            <UploadBox htmlFor="courier-license">
                              <UploadTitle>
                                <Upload size={16} aria-hidden="true" /> Subí tu licencia
                              </UploadTitle>
                              <UploadText>Foto o PDF legible de frente y dorso si aplica.</UploadText>
                              <FileField
                                id="courier-license"
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
                            <UploadBox htmlFor="courier-insurance">
                              <UploadTitle>
                                <Upload size={16} aria-hidden="true" /> Subí tu seguro vigente
                              </UploadTitle>
                              <UploadText>
                                Aceptamos foto o PDF del seguro del vehículo en uso.
                              </UploadText>
                              <FileField
                                id="courier-insurance"
                                accept="image/*,application/pdf"
                                required
                              />
                            </UploadBox>
                          </FieldStack>

                          <FieldGroup htmlFor="courier-alias-cbu">
                            <FieldLabel>
                              <Wallet size={16} aria-hidden="true" />
                              Alias / CBU
                            </FieldLabel>
                            <FieldInput
                              id="courier-alias-cbu"
                              type="text"
                              placeholder="alias.o.cbu"
                              required
                            />
                            <FieldHint>Usá el dato donde querés recibir los pagos.</FieldHint>
                          </FieldGroup>

                          <FieldGroup htmlFor="courier-phone">
                            <FieldLabel>
                              <Phone size={16} aria-hidden="true" />
                              Teléfono
                            </FieldLabel>
                            <FieldInput
                              id="courier-phone"
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
                          <FieldGroup htmlFor="courier-email">
                            <FieldLabel>
                              <Mail size={16} aria-hidden="true" />
                              Email
                            </FieldLabel>
                            <FieldInput
                              id="courier-email"
                              type="email"
                              placeholder="delivery@correo.com"
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="courier-zone">
                            <FieldLabel>
                              <MapPin size={16} aria-hidden="true" />
                              Zona de trabajo
                            </FieldLabel>
                            <FieldInput
                              id="courier-zone"
                              type="text"
                              placeholder="La Francia centro, Ruta 19..."
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="courier-vehicle">
                            <FieldLabel>
                              <Truck size={16} aria-hidden="true" />
                              Vehículo
                            </FieldLabel>
                            <FieldSelect id="courier-vehicle" defaultValue={vehicles[0].value}>
                              {vehicles.map((vehicle) => (
                                <option key={vehicle.value} value={vehicle.value}>
                                  {vehicle.label}
                                </option>
                              ))}
                            </FieldSelect>
                          </FieldGroup>

                          <FieldGroup htmlFor="courier-plate">
                            <FieldLabel>
                              <Truck size={16} aria-hidden="true" />
                              Patente
                            </FieldLabel>
                            <FieldInput
                              id="courier-plate"
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
