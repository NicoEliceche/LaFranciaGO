import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bike, MapPin, PackageSearch, ShieldCheck } from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { SectionHeading } from '../components/SectionHeading';
import { DEFAULT_RADIUS_KM, createErrand } from '../errandStore';
import { Section, SectionInner } from '../ui';
import {
  ErrandCard,
  ErrandExample,
  ErrandFieldError,
  ErrandHint,
  ErrandLabel,
  ErrandNote,
  ErrandNoteIcon,
  ErrandNotes,
  ErrandSubmit,
  ErrandTextarea,
} from './ErrandScreenStyled';

const MIN_CHARS = 10;
const DELIVERY_ADDRESS = 'Av. San Martín 123';

export function ErrandScreen() {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const trimmed = description.trim();
  const error = trimmed.length < MIN_CHARS ? 'Contanos un poco más de lo que necesitás.' : null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (error) {
      return;
    }

    createErrand(trimmed, DELIVERY_ADDRESS);
    navigate('/mandado/chat');
  };

  return (
    <MarketplaceFrame showSearch={false}>
      <Section>
        <SectionInner>
          <SectionHeading
            title="¿Qué necesitás?"
            chip="Mandado"
            subtitle="Contanos qué hay que comprar o retirar."
          />

          <ErrandCard as="form" onSubmit={handleSubmit} noValidate>
            <ErrandLabel htmlFor="errand-description">Descripción del mandado</ErrandLabel>

            <ErrandTextarea
              id="errand-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Ej: Necesito 2 bolsas de hielo, una Coca de 2,25 L y un alfajor de la despensa de la esquina."
              rows={5}
              data-invalid={submitted && !!error}
              autoFocus
            />

            {submitted && error ? (
              <ErrandFieldError>{error}</ErrandFieldError>
            ) : (
              <ErrandHint>
                Cuanto más claro lo escribas, menos preguntas te va a hacer el repartidor.
              </ErrandHint>
            )}

            <ErrandExample>
              Después vas a poder mandarle fotos y audios por el chat para coordinar.
            </ErrandExample>

            <ErrandNotes>
              <ErrandNote>
                <ErrandNoteIcon>
                  <Bike size={16} aria-hidden="true" />
                </ErrandNoteIcon>
                Lo ven los repartidores en {DEFAULT_RADIUS_KM} km a la redonda.
              </ErrandNote>

              <ErrandNote>
                <ErrandNoteIcon>
                  <PackageSearch size={16} aria-hidden="true" />
                </ErrandNoteIcon>
                El primero que lo toma se queda con el pedido.
              </ErrandNote>

              <ErrandNote>
                <ErrandNoteIcon>
                  <MapPin size={16} aria-hidden="true" />
                </ErrandNoteIcon>
                Entrega en {DELIVERY_ADDRESS}.
              </ErrandNote>

              <ErrandNote>
                <ErrandNoteIcon>
                  <ShieldCheck size={16} aria-hidden="true" />
                </ErrandNoteIcon>
                Pagás al recibir, cuando ya sabés el total.
              </ErrandNote>
            </ErrandNotes>

            <ErrandSubmit type="submit">Generar pedido de mandado</ErrandSubmit>
          </ErrandCard>
        </SectionInner>
      </Section>
    </MarketplaceFrame>
  );
}
