import { Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, Check, Home, MapPin, Plus, Search, X } from 'lucide-react';

import {
  LA_FRANCIA_CENTER,
  reverseGeocode,
  searchAddresses,
} from '@core/data/services/geocodingService';
import type { GeoSuggestion } from '@shared/types/geo.types';

import { addresses as savedAddresses } from '../addressesContent';
import type { AddressBookEntry } from '../marketplace.types';
/* El mapa pesa ~150 KB con Leaflet: se carga sólo al abrir el paso de alta. */
const AddressMap = lazy(() => import('./AddressMap').then((m) => ({ default: m.AddressMap })));
import { AddressNameDialog } from './AddressNameDialog';
import {
  AddressSheetBack,
  AddressSheetBody,
  AddressSheetCard,
  AddressSheetClose,
  AddressSheetGrab,
  AddressSheetHeader,
  AddressSheetHint,
  AddressSheetMapWrap,
  AddressSheetOverlay,
  AddressSheetSaveButton,
  AddressSheetSearchField,
  AddressSheetSearchInput,
  AddressSheetSectionLabel,
  AddressSheetTitle,
  AddressRowAddress,
  AddressRowButton,
  AddressRowCheck,
  AddressRowCopy,
  AddressRowIcon,
  AddressRowLabel,
  AddressNewButton,
  SuggestionContext,
  SuggestionEmpty,
  SuggestionItem,
  SuggestionLabel,
  SuggestionList,
} from './AddressSheetStyled';

type AddressSheetProps = {
  open: boolean;
  currentId: string;
  onClose: () => void;
  onSelect: (id: string, address: string) => void;
};

type SheetStep = 'list' | 'new';

const TRANSITION_MS = 260;
const SEARCH_DEBOUNCE_MS = 350;

/**
 * Hoja de dirección en dos pasos:
 *   1. lista de direcciones guardadas
 *   2. alta de una dirección nueva, a pantalla completa, con autocompletado y mapa
 */
export function AddressSheet({ open, currentId, onClose, onSelect }: AddressSheetProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<SheetStep>('list');
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<GeoSuggestion[]>([]);
  const [searching, setSearching] = useState(false);
  const [point, setPoint] = useState<{ lat: number; lon: number } | null>(null);
  const [extraAddresses, setExtraAddresses] = useState<AddressBookEntry[]>([]);
  const [namingOpen, setNamingOpen] = useState(false);

  /* Cuando el texto viene de elegir una sugerencia o de mover el pin,
     no hay que volver a disparar la búsqueda. */
  const skipSearchRef = useRef(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    if (!mounted) {
      return undefined;
    }

    setVisible(false);
    const timeout = window.setTimeout(() => {
      setMounted(false);
      setStep('list');
      setQuery('');
      setSuggestions([]);
      setPoint(null);
      setNamingOpen(false);
    }, TRANSITION_MS);

    return () => window.clearTimeout(timeout);
  }, [mounted, open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }

      /* Con el diálogo de nombre abierto, Escape lo cierra a él. */
      if (namingOpen) {
        return;
      }

      if (step === 'new') {
        setStep('list');
        return;
      }

      onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [namingOpen, onClose, open, step]);

  /* Autocompletado con debounce: Photon acepta prefijos y sesgo por cercanía. */
  useEffect(() => {
    if (step !== 'new') {
      return undefined;
    }

    if (skipSearchRef.current) {
      skipSearchRef.current = false;
      return undefined;
    }

    const term = query.trim();

    if (term.length < 2) {
      setSuggestions([]);
      setSearching(false);
      return undefined;
    }

    const controller = new AbortController();
    setSearching(true);

    const timeout = window.setTimeout(() => {
      searchAddresses(term, controller.signal)
        .then((results) => {
          setSuggestions(results);
          setSearching(false);
        })
        .catch(() => setSearching(false));
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [query, step]);

  const allAddresses = useMemo(() => [...savedAddresses, ...extraAddresses], [extraAddresses]);

  const chooseSuggestion = (suggestion: GeoSuggestion) => {
    skipSearchRef.current = true;
    setQuery(suggestion.label);
    setSuggestions([]);
    setPoint({ lat: suggestion.lat, lon: suggestion.lon });
  };

  /* Al mover el pin se intenta recuperar la calle; si falla, el texto escrito manda. */
  const handlePick = (lat: number, lon: number) => {
    setPoint({ lat, lon });

    reverseGeocode(lat, lon).then((label) => {
      if (label) {
        skipSearchRef.current = true;
        setQuery(label);
        setSuggestions([]);
      }
    });
  };

  const saveNewAddress = (name: string) => {
    const entry: AddressBookEntry = {
      id: `custom-${Date.now()}`,
      label: name,
      address: query.trim(),
      primary: false,
    };

    setExtraAddresses((current) => [...current, entry]);
    setNamingOpen(false);
    onSelect(entry.id, entry.address);
    onClose();
  };

  if (!mounted) {
    return null;
  }

  const isNewStep = step === 'new';
  const mapCenter = point ?? LA_FRANCIA_CENTER;
  /* Se puede guardar cuando hay un punto elegido y una etiqueta escrita. */
  const canSave = point !== null && query.trim().length >= 3;

  return (
    <AddressSheetOverlay data-visible={visible} onClick={onClose} role="presentation">
      <AddressSheetCard
        data-visible={visible}
        data-full={isNewStep}
        role="dialog"
        aria-modal="true"
        aria-label={isNewStep ? 'Agregar una dirección nueva' : 'Dirección de entrega'}
        onClick={(event) => event.stopPropagation()}
      >
        <AddressSheetHeader>
          <AddressSheetGrab aria-hidden="true" />

          {isNewStep ? (
            <AddressSheetBack
              type="button"
              onClick={() => setStep('list')}
              aria-label="Volver a mis direcciones"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </AddressSheetBack>
          ) : null}

          <AddressSheetTitle>
            {isNewStep ? 'Nueva dirección' : '¿Dónde entregamos?'}
          </AddressSheetTitle>

          <AddressSheetClose type="button" onClick={onClose} aria-label="Cerrar">
            <X size={18} aria-hidden="true" />
          </AddressSheetClose>
        </AddressSheetHeader>

        <AddressSheetBody data-full={isNewStep}>
          {isNewStep ? (
            <>
              <AddressSheetSearchField>
                <Search size={18} aria-hidden="true" />
                <AddressSheetSearchInput
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Escribí calle y altura (ej: Suipacha 876)"
                  aria-label="Buscar una dirección"
                  autoComplete="off"
                  autoFocus
                />
              </AddressSheetSearchField>

              {suggestions.length > 0 ? (
                <SuggestionList aria-label="Sugerencias de direcciones">
                  {suggestions.map((suggestion) => (
                    <SuggestionItem
                      key={suggestion.id}
                      type="button"
                      onClick={() => chooseSuggestion(suggestion)}
                    >
                      <MapPin size={16} aria-hidden="true" />
                      <span>
                        <SuggestionLabel>{suggestion.label}</SuggestionLabel>
                        {suggestion.context ? (
                          <SuggestionContext>{suggestion.context}</SuggestionContext>
                        ) : null}
                      </span>
                    </SuggestionItem>
                  ))}
                </SuggestionList>
              ) : null}

              {suggestions.length === 0 && searching ? (
                <SuggestionEmpty>Buscando…</SuggestionEmpty>
              ) : null}

              <AddressSheetMapWrap>
                <Suspense fallback={null}>
                  <AddressMap lat={mapCenter.lat} lon={mapCenter.lon} onPick={handlePick} />
                </Suspense>
              </AddressSheetMapWrap>

              <AddressSheetHint>
                {point
                  ? 'Ajustá el punto si hace falta y guardá.'
                  : 'Elegí una sugerencia o tocá el mapa para marcar tu casa.'}
              </AddressSheetHint>

              <AddressSheetSaveButton
                type="button"
                onClick={() => setNamingOpen(true)}
                disabled={!canSave}
              >
                <MapPin size={18} aria-hidden="true" />
                Guardar nueva dirección
              </AddressSheetSaveButton>
            </>
          ) : (
            <>
              <AddressSheetSectionLabel>Tus direcciones guardadas</AddressSheetSectionLabel>

              {allAddresses.map((item) => (
                <AddressRowButton
                  key={item.id}
                  type="button"
                  data-current={item.id === currentId}
                  onClick={() => {
                    onSelect(item.id, item.address);
                    onClose();
                  }}
                >
                  <AddressRowIcon>
                    <Home size={18} aria-hidden="true" />
                  </AddressRowIcon>

                  <AddressRowCopy>
                    <AddressRowLabel>{item.label}</AddressRowLabel>
                    <AddressRowAddress>{item.address}</AddressRowAddress>
                  </AddressRowCopy>

                  {item.id === currentId ? (
                    <AddressRowCheck aria-label="Dirección actual">
                      <Check size={16} aria-hidden="true" />
                    </AddressRowCheck>
                  ) : null}
                </AddressRowButton>
              ))}

              <AddressNewButton type="button" onClick={() => setStep('new')}>
                <Plus size={18} aria-hidden="true" />
                Agregar una dirección nueva
              </AddressNewButton>
            </>
          )}
        </AddressSheetBody>
      </AddressSheetCard>

      <AddressNameDialog
        open={namingOpen}
        address={query.trim()}
        onCancel={() => setNamingOpen(false)}
        onSave={saveNewAddress}
      />
    </AddressSheetOverlay>
  );
}
