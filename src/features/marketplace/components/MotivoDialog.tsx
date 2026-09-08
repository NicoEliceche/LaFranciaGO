import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

import { CardTitle } from '../ui';
import {
  PanelDialogCard,
  PanelDialogCerrar,
  PanelDialogHeader,
  PanelDialogOverlay,
} from './PanelLoginDialogStyled';
import { ExtraAcciones, ExtraBoton } from './ChatPedidoDialogStyled';
import { MotivoOpcion } from './MotivoDialogStyled';

/**
 * Elegir por qué no se puede.
 *
 * De una lista y no escrito a mano: quien reparte está en la calle y con
 * apuro, y un campo libre en ese momento termina siendo "no" a secas. Con
 * opciones, la otra persona entiende qué pasó.
 */

type Props = {
  open: boolean;
  titulo: string;
  motivos: string[];
  onCancelar: () => void;
  onElegir: (indice: number) => Promise<void>;
};

export function MotivoDialog({ open, titulo, motivos, onCancelar, onElegir }: Props) {
  const [elegido, setElegido] = useState<number | null>(null);
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    if (open) {
      setElegido(null);
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const alPresionar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        onCancelar();
      }
    };

    document.addEventListener('keydown', alPresionar);

    return () => document.removeEventListener('keydown', alPresionar);
  }, [onCancelar, open]);

  if (!open) {
    return null;
  }

  const confirmar = async () => {
    if (elegido === null || enviando) {
      return;
    }

    setEnviando(true);

    try {
      await onElegir(elegido);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <PanelDialogOverlay onClick={onCancelar} role="presentation">
      <PanelDialogCard
        role="dialog"
        aria-modal="true"
        aria-label={titulo}
        onClick={(evento) => evento.stopPropagation()}
      >
        <PanelDialogHeader>
          <div>
            <CardTitle>{titulo}</CardTitle>
          </div>
          <PanelDialogCerrar type="button" onClick={onCancelar} aria-label="Cerrar">
            <X size={18} aria-hidden="true" />
          </PanelDialogCerrar>
        </PanelDialogHeader>

        {motivos.map((motivo, indice) => (
          <MotivoOpcion key={motivo} data-elegido={elegido === indice}>
            <input
              type="radio"
              name="motivo"
              checked={elegido === indice}
              onChange={() => setElegido(indice)}
            />
            <span>{motivo}</span>
          </MotivoOpcion>
        ))}

        <ExtraAcciones>
          <ExtraBoton type="button" data-tono="suave" onClick={onCancelar}>
            Volver
          </ExtraBoton>
          <ExtraBoton
            type="button"
            onClick={() => void confirmar()}
            disabled={elegido === null || enviando}
          >
            {enviando ? 'Enviando…' : 'Confirmar'}
          </ExtraBoton>
        </ExtraAcciones>
      </PanelDialogCard>
    </PanelDialogOverlay>
  );
}
