import { type FormEvent, useEffect, useState } from 'react';
import { PackagePlus, X } from 'lucide-react';

import { CardText, CardTitle } from '../ui';
import { AuthAviso, AuthEnviar } from '../screens/AuthScreenStyled';
import { FieldGroup, FieldInput, FieldLabel, FieldStack } from '../screens/formStyles';
import {
  PanelDialogCard,
  PanelDialogCerrar,
  PanelDialogHeader,
  PanelDialogOverlay,
} from './PanelLoginDialogStyled';
import { ExtraBoton, ExtraAcciones } from './ChatPedidoDialogStyled';

/**
 * Pedir algo que no estaba en el pedido.
 *
 * "Ya que vas al kiosco, traeme un chocolate." Se pide en una sola línea,
 * sin precio: el precio no lo sabe quien pide, lo sabe quien compra.
 *
 * El texto lo explica: quien lo trae puede decir que no, y el costo se suma
 * al pedido después. Sin eso, alguien pide y espera que aparezca.
 */

type Props = {
  open: boolean;
  onClose: () => void;
  onPedir: (descripcion: string) => Promise<void>;
};

export function ExtraDialog({ open, onClose, onPedir }: Props) {
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setError(null);
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const alPresionar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', alPresionar);

    return () => document.removeEventListener('keydown', alPresionar);
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  const enviar = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (enviando) {
      return;
    }

    const descripcion = String(new FormData(evento.currentTarget).get('descripcion') ?? '').trim();

    if (descripcion.length < 3) {
      setError('Contá qué necesitás que te traigan.');

      return;
    }

    setEnviando(true);
    setError(null);

    try {
      await onPedir(descripcion);
      onClose();
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos enviar el pedido.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <PanelDialogOverlay onClick={onClose} role="presentation">
      <PanelDialogCard
        role="dialog"
        aria-modal="true"
        aria-label="Agregar algo al pedido"
        onClick={(evento) => evento.stopPropagation()}
      >
        <PanelDialogHeader>
          <div>
            <CardTitle>¿Necesitás agregar algo?</CardTitle>
            <CardText>
              Quien lleva tu pedido puede pasar a buscarlo. Te va a decir cuánto salió
              antes de que lo pagues.
            </CardText>
          </div>
          <PanelDialogCerrar type="button" onClick={onClose} aria-label="Cerrar">
            <X size={18} aria-hidden="true" />
          </PanelDialogCerrar>
        </PanelDialogHeader>

        {error ? (
          <AuthAviso role="alert" data-tono="error">
            {error}
          </AuthAviso>
        ) : null}

        <form onSubmit={enviar}>
          <FieldStack>
            <FieldGroup>
              <FieldLabel>
                <PackagePlus size={16} aria-hidden="true" />
                Qué necesitás
              </FieldLabel>
              <FieldInput
                name="descripcion"
                maxLength={300}
                placeholder="Un chocolate del kiosco de la esquina"
                autoFocus
                required
              />
            </FieldGroup>

            <ExtraAcciones>
              <ExtraBoton type="button" data-tono="suave" onClick={onClose}>
                Cancelar
              </ExtraBoton>
              <AuthEnviar type="submit" disabled={enviando} style={{ flex: '1 1 auto' }}>
                {enviando ? 'Enviando…' : 'Pedirlo'}
              </AuthEnviar>
            </ExtraAcciones>
          </FieldStack>
        </form>
      </PanelDialogCard>
    </PanelDialogOverlay>
  );
}
