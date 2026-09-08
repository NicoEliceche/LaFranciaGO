import { type FormEvent, useEffect, useState } from 'react';
import { X } from 'lucide-react';

import { fletesApi } from '@core/data/services/apiClient';
import { formatMoney } from '@shared/utils/format';

import { CardTitle } from '../ui';
import {
  PanelDialogCard,
  PanelDialogCerrar,
  PanelDialogHeader,
  PanelDialogOverlay,
} from './PanelLoginDialogStyled';
import { ExtraAcciones, ExtraBoton } from './ChatPedidoDialogStyled';
import { AuthAviso } from '../screens/AuthScreenStyled';
import { CampoFila } from '../screens/MiComercioScreenStyled';
import { ResenaBloque, ResenaComentario, ResenaLeyenda } from './ResenaDialogStyled';

/**
 * Poner precio a un flete.
 *
 * Un flete no tiene precio de lista: depende de cuánto hay que llevar y hasta
 * dónde. Mostramos la distancia y una referencia por kilómetro para que el
 * número no salga de la nada, pero el precio lo pone quien lo va a hacer: es
 * su camioneta, su nafta y su tiempo.
 */

/* Referencia para sugerir, no para imponer. Sale de lo que se cobra en la
   zona; quien cotiza la corrige si su viaje es otra cosa. */
const POR_KM = 900;
const BASE = 2500;

type Props = {
  open: boolean;
  pedidoId: string;
  /** Lo que calculó el servidor entre origen y destino. */
  distanciaKm: number | null;
  onCerrar: () => void;
  onCotizado: () => void;
};

export function CotizarDialog({
  open,
  pedidoId,
  distanciaKm,
  onCerrar,
  onCotizado,
}: Props) {
  const [precio, setPrecio] = useState('');
  const [nota, setNota] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sugerido =
    typeof distanciaKm === 'number' ? Math.round(BASE + distanciaKm * POR_KM) : null;

  /* Al abrir arranca con la sugerencia: es un punto de partida para
     corregir, más rápido que escribirlo de cero. */
  useEffect(() => {
    if (open) {
      setPrecio(sugerido !== null ? String(sugerido) : '');
      setNota('');
      setError(null);
    }
  }, [open, sugerido]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const alPresionar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        onCerrar();
      }
    };

    document.addEventListener('keydown', alPresionar);

    return () => document.removeEventListener('keydown', alPresionar);
  }, [onCerrar, open]);

  if (!open) {
    return null;
  }

  const enviar = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const numero = Number(precio);

    if (!Number.isFinite(numero) || numero <= 0 || enviando) {
      return;
    }

    setEnviando(true);
    setError(null);

    try {
      await fletesApi.cotizar(pedidoId, numero, nota.trim() || undefined);
      onCotizado();
      onCerrar();
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos enviar tu precio.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <PanelDialogOverlay role="dialog" aria-modal="true" aria-label="Cotizar el flete">
      <PanelDialogCard>
        <PanelDialogHeader>
          <CardTitle>¿Cuánto cobrás?</CardTitle>
          <PanelDialogCerrar type="button" onClick={onCerrar} aria-label="Cerrar">
            <X size={18} aria-hidden="true" />
          </PanelDialogCerrar>
        </PanelDialogHeader>

        {error ? (
          <AuthAviso role="alert" data-tono="error">
            {error}
          </AuthAviso>
        ) : null}

        <form onSubmit={enviar}>
          <CampoFila>
            <span>Tu precio</span>
            <input
              type="number"
              min={1}
              step="1"
              value={precio}
              autoFocus
              required
              onChange={(evento) => setPrecio(evento.target.value)}
            />
          </CampoFila>

          <ResenaLeyenda>
            {typeof distanciaKm === 'number'
              ? `Son ${distanciaKm} km. A ${formatMoney(POR_KM)} el kilómetro más ${formatMoney(
                  BASE,
                )} de base daría ${formatMoney(sugerido ?? 0)}, pero ponés lo que quieras.`
              : 'No pudimos calcular la distancia. Fijate el detalle antes de poner precio.'}
          </ResenaLeyenda>

          <ResenaBloque>
            <span>¿Querés aclarar algo?</span>
            <ResenaComentario
              value={nota}
              maxLength={300}
              placeholder="Lo llevo hoy a la tarde. Necesito una mano para cargar."
              onChange={(evento) => setNota(evento.target.value)}
            />
          </ResenaBloque>

          <ExtraAcciones>
            <ExtraBoton type="button" data-tono="suave" onClick={onCerrar} disabled={enviando}>
              Volver
            </ExtraBoton>
            <ExtraBoton type="submit" disabled={enviando || precio.trim() === ''}>
              {enviando ? 'Enviando…' : 'Enviar mi precio'}
            </ExtraBoton>
          </ExtraAcciones>
        </form>
      </PanelDialogCard>
    </PanelDialogOverlay>
  );
}
