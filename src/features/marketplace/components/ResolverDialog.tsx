import { type FormEvent, useEffect, useState } from 'react';
import { X } from 'lucide-react';

import { CardTitle } from '../ui';
import {
  PanelDialogCard,
  PanelDialogCerrar,
  PanelDialogHeader,
  PanelDialogOverlay,
} from './PanelLoginDialogStyled';
import { ExtraAcciones, ExtraBoton } from './ChatPedidoDialogStyled';
import {
  ResenaBloque,
  ResenaComentario,
  ResenaLeyenda,
} from './ResenaDialogStyled';

/**
 * Cerrar un reclamo diciendo qué se hizo.
 *
 * Lo que se escribe acá le llega al cliente al chat de su pedido, así que no
 * es una nota interna: es la respuesta. Por eso el aviso arriba y no un campo
 * pelado —quien la escribe tiene que saber quién la va a leer.
 */

type Props = {
  open: boolean;
  codigo: string;
  onCerrar: () => void;
  onResolver: (resolucion: string) => Promise<void>;
};

export function ResolverDialog({ open, codigo, onCerrar, onResolver }: Props) {
  const [texto, setTexto] = useState('');
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    if (open) {
      setTexto('');
    }
  }, [open]);

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

    const limpio = texto.trim();

    if (!limpio || enviando) {
      return;
    }

    setEnviando(true);

    try {
      await onResolver(limpio);
      onCerrar();
    } finally {
      setEnviando(false);
    }
  };

  return (
    <PanelDialogOverlay role="dialog" aria-modal="true" aria-label="Resolver el reclamo">
      <PanelDialogCard>
        <PanelDialogHeader>
          <CardTitle>Resolver {codigo}</CardTitle>
          <PanelDialogCerrar type="button" onClick={onCerrar} aria-label="Cerrar">
            <X size={18} aria-hidden="true" />
          </PanelDialogCerrar>
        </PanelDialogHeader>

        <form onSubmit={enviar}>
          <ResenaBloque>
            <span>¿Qué le contestamos?</span>
            <ResenaComentario
              value={texto}
              maxLength={500}
              autoFocus
              placeholder="Le devolvemos el importe del producto que faltaba."
              onChange={(evento) => setTexto(evento.target.value)}
            />
            <ResenaLeyenda>
              Esto le llega al cliente al chat de su pedido, con tu nombre.
            </ResenaLeyenda>
          </ResenaBloque>

          <ExtraAcciones>
            <ExtraBoton type="button" data-tono="suave" onClick={onCerrar} disabled={enviando}>
              Volver
            </ExtraBoton>
            <ExtraBoton type="submit" disabled={enviando || texto.trim() === ''}>
              {enviando ? 'Enviando…' : 'Resolver y avisarle'}
            </ExtraBoton>
          </ExtraAcciones>
        </form>
      </PanelDialogCard>
    </PanelDialogOverlay>
  );
}
