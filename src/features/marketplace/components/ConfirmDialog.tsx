import { useEffect } from 'react';

import {
  ConfirmActions,
  ConfirmCancelButton,
  ConfirmCard,
  ConfirmConfirmButton,
  ConfirmOverlay,
  ConfirmText,
  ConfirmTitle,
} from './ConfirmDialogStyled';

type ConfirmDialogProps = {
  open: boolean;
  title: string;
  text?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

/** Diálogo corto de confirmación para acciones destructivas. */
export function ConfirmDialog({
  open,
  title,
  text,
  confirmLabel = 'Aceptar',
  cancelLabel = 'Cancelar',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCancel();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onCancel, open]);

  if (!open) {
    return null;
  }

  return (
    <ConfirmOverlay onClick={onCancel} role="presentation">
      <ConfirmCard
        role="alertdialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <ConfirmTitle>{title}</ConfirmTitle>
        {text ? <ConfirmText>{text}</ConfirmText> : null}

        <ConfirmActions>
          <ConfirmCancelButton type="button" onClick={onCancel}>
            {cancelLabel}
          </ConfirmCancelButton>
          <ConfirmConfirmButton type="button" onClick={onConfirm} autoFocus>
            {confirmLabel}
          </ConfirmConfirmButton>
        </ConfirmActions>
      </ConfirmCard>
    </ConfirmOverlay>
  );
}
