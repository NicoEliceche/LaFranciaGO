import {
  Building2,
  Check,
  ImagePlus,
  FileText,
  LayoutGrid,
  MapPin,
  Phone,
  ShieldCheck,
  Store,
  Upload,
  UserRound,
  Video,
  Wallet,
  X,
} from 'lucide-react';
import { type FormEvent, useMemo, useState } from 'react';

import { searchTradeCategories } from '@core/data/tradeCategories';
import { registerBusiness, type RegisteredBusiness } from '../businessStore';
import {
  IMAGE_ACCEPT,
  MEDIA_LIMITS,
  VIDEO_ACCEPT,
  formatBytes,
} from '@core/data/services/mediaService';
import { useMediaUpload } from '@shared/hooks/useMediaUpload';

import { FileField } from '@shared/components/FileField';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { AddressSheet } from '../components/AddressSheet';
import {
  FieldError,
  MediaAddButton,
  MediaCounter,
  MediaGrid,
  MediaRemoveButton,
  MediaSectionHead,
  MediaSlot,
  MediaSlotImage,
  MediaSlotVideo,
} from './ProductFormScreenStyled';
import {
  MapPickerButton,
  RegisteredMeta,
  RegisteredNotice,
  RegisteredTitle,
  StepBody,
  StepDuration,
  StepHead,
  StepLine,
  StepMarker,
  StepNumber,
  StepOwner,
  StepRow,
  StepText,
  StepTitle,
  StepTrack,
  TradeCombo,
  TradeSuggestItem,
  TradeSuggestList,
} from './CommerceRegistrationScreenStyled';
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

/**
 * Pasos reales del alta, con quién hace cada cosa y cuánto demora.
 *
 * Los tres primeros los completa el comercio de una sentada; el cuarto es la
 * espera por la revisión, que es lo que más incertidumbre genera, así que se
 * dice el plazo. Los dos últimos ocurren después de la aprobación.
 */
const registrationSteps = [
  {
    id: 'step-1',
    title: 'Completás el formulario',
    text: 'CUIT, razón social, rubro y dirección. Te lleva unos minutos.',
    owner: 'Vos',
    duration: '5 min',
  },
  {
    id: 'step-2',
    title: 'Subís logo y fotos',
    text: 'Logo del comercio y, si querés, fotos y un video del local.',
    owner: 'Vos',
    duration: '5 min',
  },
  {
    id: 'step-3',
    title: 'Revisamos los datos',
    text: 'Verificamos el CUIT y que el comercio exista en La Francia.',
    owner: 'LaFranciaGO',
    duration: 'Hasta 48 h hábiles',
  },
  {
    id: 'step-4',
    title: 'Cargás tus productos',
    text: 'Con la cuenta aprobada, sumás el catálogo con precios y stock.',
    owner: 'Vos',
    duration: 'A tu ritmo',
  },
  {
    id: 'step-5',
    title: 'Tu comercio queda publicado',
    text: 'Aparecés en el buscador y en Inicio, y empezás a recibir pedidos.',
    owner: 'LaFranciaGO',
    duration: 'Inmediato',
  },
];

/** Id de rubro a partir de lo escrito, para agrupar comercios del mismo tipo. */
const slugifyTrade = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/**
 * Da formato de CUIT/CUIL mientras se escribe: 20-12345678-9.
 *
 * Se trabaja sólo con los dígitos y se reinsertan los guiones, así borrar
 * desde el medio no deja el número partido en dos.
 */
const formatTaxId = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 10) {
    return `${digits.slice(0, 2)}-${digits.slice(2)}`;
  }

  return `${digits.slice(0, 2)}-${digits.slice(2, 10)}-${digits.slice(10)}`;
};

export function CommerceRegistrationScreen() {
  const [taxId, setTaxId] = useState('');
  const [tradeQuery, setTradeQuery] = useState('');
  const [tradeOpen, setTradeOpen] = useState(false);
  const [mapAddress, setMapAddress] = useState('');
  const [mapSheetOpen, setMapSheetOpen] = useState(false);
  const {
    photos,
    video,
    error: mediaError,
    processing,
    addPhotos,
    addVideo,
    removePhoto,
    removeVideo,
  } = useMediaUpload();

  const [registered, setRegistered] = useState<RegisteredBusiness | null>(null);

  const tradeMatches = useMemo(() => searchTradeCategories(tradeQuery), [tradeQuery]);

  /**
   * Da de alta el comercio con lo cargado en el formulario.
   *
   * Los campos se leen del formulario en vez de tener un estado por cada uno:
   * son casi veinte y la mayoría no necesita reaccionar mientras se escribe.
   * Los que sí (CUIT, rubro, mapa) ya tienen su propio estado.
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? '').trim();

    const legalName = value('razonSocial');

    if (!legalName || !tradeQuery.trim()) {
      return;
    }

    const business = registerBusiness({
      name: value('nombreComercial') || legalName,
      taxId: taxId,
      category: tradeQuery.trim(),
      categoryId: slugifyTrade(tradeQuery),
      address: mapAddress || value('direccion'),
      phone: value('telefono'),
      email: value('email'),
      hours: value('horario'),
      zone: value('zona'),
      description: value('descripcion'),
      social: value('social'),
      payments: value('pagos'),
    });

    setRegistered(business);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MarketplaceFrame
      showSearch={false}
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
              {registered ? (
                <RegisteredNotice role="status">
                  <RegisteredTitle>
                    <Check size={18} aria-hidden="true" />
                    {registered.name} quedó registrado
                  </RegisteredTitle>
                  <CardText>
                    Lo estamos revisando: cuando aprobemos los datos vas a poder cargar tus
                    productos y el comercio aparece en el buscador. Te avisamos por mail a{' '}
                    <strong>{registered.email || 'tu casilla'}</strong>.
                  </CardText>
                  <RegisteredMeta>
                    Código de seguimiento: <strong>{registered.id}</strong>
                  </RegisteredMeta>
                </RegisteredNotice>
              ) : null}

              <form onSubmit={handleSubmit}>
                <FieldStack>
                  <CardTitle>Datos obligatorios</CardTitle>

                  <FormGrid>
                    <FieldGroup htmlFor="business-tax">
                      <FieldLabel>
                        <FileText size={16} aria-hidden="true" />
                        CUIT / CUIL
                      </FieldLabel>
                      <FieldInput
                        id="business-tax"
                        type="text"
                        inputMode="numeric"
                        placeholder="20-12345678-9"
                        value={taxId}
                        onChange={(event) => setTaxId(formatTaxId(event.target.value))}
                        maxLength={13}
                        required
                      />
                      <FieldHint>Validación fiscal para publicar como comercio.</FieldHint>
                    </FieldGroup>

                    <FieldGroup htmlFor="business-name">
                      <FieldLabel>
                        <Building2 size={16} aria-hidden="true" />
                        Razón social
                      </FieldLabel>
                      <FieldInput id="business-name"
                              name="razonSocial" type="text" placeholder="La Huerta S.A." required />
                    </FieldGroup>

                    <FieldGroup htmlFor="business-address">
                      <FieldLabel>
                        <MapPin size={16} aria-hidden="true" />
                        Dirección
                      </FieldLabel>
                      <FieldInput id="business-address"
                              name="direccion" type="text" placeholder="Av. Principal 123" required />
                    </FieldGroup>

                    <FieldGroup htmlFor="business-phone">
                      <FieldLabel>
                        <Phone size={16} aria-hidden="true" />
                        Teléfono
                      </FieldLabel>
                      <FieldInput id="business-phone"
                              name="telefono" type="tel" placeholder="+54 3573 400-201" required />
                    </FieldGroup>

                    <FieldGroup htmlFor="business-email">
                      <FieldLabel>
                        <UserRound size={16} aria-hidden="true" />
                        Email
                      </FieldLabel>
                      <FieldInput id="business-email"
                              name="email" type="email" placeholder="ventas@lahuerta.com" required />
                    </FieldGroup>

                    <FieldGroup htmlFor="business-category">
                      <FieldLabel>
                        <LayoutGrid size={16} aria-hidden="true" />
                        Rubro principal
                      </FieldLabel>
                      <TradeCombo>
                        <FieldInput
                          id="business-category"
                          type="text"
                          autoComplete="off"
                          placeholder="Escribí tu rubro (ej: panadería)"
                          value={tradeQuery}
                          onChange={(event) => {
                            setTradeQuery(event.target.value);
                            setTradeOpen(true);
                          }}
                          onFocus={() => setTradeOpen(true)}
                          /* Se cierra con un respiro: sin él, el clic sobre una
                             sugerencia se pierde antes de registrarse. */
                          onBlur={() => window.setTimeout(() => setTradeOpen(false), 140)}
                          required
                        />

                        {tradeOpen && tradeMatches.length > 0 ? (
                          <TradeSuggestList aria-label="Rubros sugeridos">
                            {tradeMatches.map((category) => (
                              <TradeSuggestItem
                                key={category.id}
                                type="button"
                                onClick={() => {
                                  setTradeQuery(category.name);
                                  setTradeOpen(false);
                                }}
                              >
                                {category.name}
                              </TradeSuggestItem>
                            ))}
                          </TradeSuggestList>
                        ) : null}
                      </TradeCombo>
                      <FieldHint>
                        Escribí una letra y elegí de la lista. Si no está, poné "Otro rubro".
                      </FieldHint>
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
                            Subí tu logo o foto de perfil
                          </UploadTitle>
                          <UploadText>
                            PNG, JPG o WebP. Idealmente cuadrado y con fondo limpio.
                          </UploadText>
                          <FileField id="business-logo" accept="image/*" />
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
                              name="nombreComercial"
                              type="text"
                              placeholder="La Huerta"
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="business-hours">
                            <FieldLabel>Horario de atención</FieldLabel>
                            <FieldInput
                              id="business-hours"
                              name="horario"
                              type="text"
                              placeholder="Lun a sáb 08:00 - 21:30"
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="business-map">
                            <FieldLabel>Mapa / referencia</FieldLabel>
                            <FieldInput
                              id="business-map"
                              type="text"
                              placeholder="Ubicación exacta para el mapa"
                              value={mapAddress}
                              onChange={(event) => setMapAddress(event.target.value)}
                            />
                            <MapPickerButton type="button" onClick={() => setMapSheetOpen(true)}>
                              <MapPin size={16} aria-hidden="true" />
                              Agregar dirección de maps
                            </MapPickerButton>
                          </FieldGroup>
                        </FormGrid>

                        <FieldGroup htmlFor="business-description">
                          <FieldLabel>Descripción del negocio</FieldLabel>
                          <FieldTextarea
                            id="business-description"
                              name="descripcion"
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
                              name="zona"
                              type="text"
                              placeholder="Centro, Barrio Norte, Ruta 19..."
                            />
                          </FieldGroup>

                          <FieldGroup htmlFor="business-social">
                            <FieldLabel>Instagram o Facebook</FieldLabel>
                            <FieldInput
                              id="business-social"
                              name="social"
                              type="text"
                              placeholder="@lahuerta"
                            />
                            <FieldHint>
                              Se muestra en el perfil como referencia. El pedido se cierra
                              siempre dentro de la app.
                            </FieldHint>
                          </FieldGroup>

                          <FieldGroup htmlFor="business-payments">
                            <FieldLabel>Métodos de pago</FieldLabel>
                            <FieldInput
                              id="business-payments"
                              name="pagos"
                              type="text"
                              placeholder="Efectivo, débito, transferencia..."
                            />
                          </FieldGroup>
                        </FormGrid>

                        <MediaSectionHead>
                          <FieldLabel as="span">Fotos del local</FieldLabel>
                          <MediaCounter>
                            {photos.length}/{MEDIA_LIMITS.maxImages}
                          </MediaCounter>
                        </MediaSectionHead>

                        <MediaGrid>
                          {photos.map((photo) => (
                            <MediaSlot key={photo.id}>
                              <MediaSlotImage src={photo.previewUrl} alt="" />
                              <MediaRemoveButton
                                type="button"
                                onClick={() => removePhoto(photo.id)}
                                aria-label="Quitar foto"
                              >
                                <X size={14} aria-hidden="true" />
                              </MediaRemoveButton>
                            </MediaSlot>
                          ))}

                          {photos.length < MEDIA_LIMITS.maxImages ? (
                            <MediaAddButton as="label" data-busy={processing}>
                              <ImagePlus size={20} aria-hidden="true" />
                              <span>{processing ? 'Optimizando…' : 'Agregar'}</span>
                              <input
                                type="file"
                                accept={IMAGE_ACCEPT}
                                multiple
                                hidden
                                onChange={(event) => {
                                  void addPhotos(event.target.files);
                                  event.target.value = '';
                                }}
                              />
                            </MediaAddButton>
                          ) : null}
                        </MediaGrid>

                        <FieldHint>
                          Se redimensionan a {MEDIA_LIMITS.maxImageDimension}px y se comprimen
                          solas: cada foto queda en menos de{' '}
                          {formatBytes(MEDIA_LIMITS.maxImageBytes)}.
                        </FieldHint>

                        <MediaSectionHead>
                          <FieldLabel as="span">Video del local</FieldLabel>
                          <MediaCounter>
                            {video ? 1 : 0}/{MEDIA_LIMITS.maxVideos}
                          </MediaCounter>
                        </MediaSectionHead>

                        {video ? (
                          <MediaSlot data-video="true">
                            <MediaSlotVideo src={video.url} controls preload="metadata" />
                            <MediaRemoveButton
                              type="button"
                              onClick={removeVideo}
                              aria-label="Quitar video"
                            >
                              <X size={14} aria-hidden="true" />
                            </MediaRemoveButton>
                          </MediaSlot>
                        ) : (
                          <MediaAddButton as="label" data-wide="true">
                            <Video size={20} aria-hidden="true" />
                            <span>Agregar video</span>
                            <input
                              type="file"
                              accept={VIDEO_ACCEPT}
                              hidden
                              onChange={(event) => {
                                void addVideo(event.target.files);
                                event.target.value = '';
                              }}
                            />
                          </MediaAddButton>
                        )}

                        <FieldHint>
                          Hasta {MEDIA_LIMITS.maxVideoSeconds} segundos y{' '}
                          {formatBytes(MEDIA_LIMITS.maxVideoBytes)}. Mostralo recorriendo el
                          local: ayuda más que cualquier descripción.
                        </FieldHint>

                        {mediaError ? <FieldError>{mediaError}</FieldError> : null}
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
                    <span>
                      Presencia en la aplicación con tarjetas, sponsor y carrusel de
                      promociones.
                    </span>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryBullet />
                    <span>Perfil propio con logo, horarios, stock, delivery y retiro.</span>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryBullet />
                    <span>Notificaciones por producto, comercio y oferta para fidelizar usuarios.</span>
                  </SummaryItem>
                </RegistrationNotes>
              </SectionStack>

              <Card>
                <CardPad>
                  <RegistrationSteps>
                    <CardTitle>Proceso de alta</CardTitle>
                    <CardText>Desde que empezás hasta que recibís el primer pedido.</CardText>

                    <StepTrack>
                      {registrationSteps.map((step, index) => (
                        <StepRow key={step.id}>
                          <StepMarker>
                            <StepNumber data-owner={step.owner === 'Vos' ? 'user' : 'app'}>
                              {index + 1}
                            </StepNumber>
                            {index < registrationSteps.length - 1 ? <StepLine /> : null}
                          </StepMarker>

                          <StepBody>
                            <StepHead>
                              <StepTitle>{step.title}</StepTitle>
                              <StepDuration>{step.duration}</StepDuration>
                            </StepHead>
                            <StepText>{step.text}</StepText>
                            <StepOwner data-owner={step.owner === 'Vos' ? 'user' : 'app'}>
                              {step.owner}
                            </StepOwner>
                          </StepBody>
                        </StepRow>
                      ))}
                    </StepTrack>
                  </RegistrationSteps>
                </CardPad>
              </Card>

            </SidePanel>
          </RegistrationGrid>
        </SectionInner>
      </CompactSection>
      <AddressSheet
        open={mapSheetOpen}
        currentId=""
        startOnNew
        onClose={() => setMapSheetOpen(false)}
        onSelect={(_id, value) => {
          setMapAddress(value);
          setMapSheetOpen(false);
        }}
      />
    </MarketplaceFrame>
  );
}
