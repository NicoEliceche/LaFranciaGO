import { type FormEvent, useEffect, useState } from 'react';

import {
  AddressNameActions,
  AddressNameCancel,
  AddressNameCard,
  AddressNameHint,
  AddressNameInput,
  AddressNameLabel,
  AddressNameOverlay,
  AddressNameSave,
  AddressNameTitle,
} from './AddressNameDialogStyled';

type AddressNameDialogProps = {
  open: boolean;
  /** Dirección elegida, se muestra como ayuda de contexto. */
  address: string;
  onCancel: () => void;
  onSave: (name: string) => void;
};

/** Pide un nombre corto para la dirección antes de guardarla. */
export function AddressNameDialog({ open, address, onCancel, onSave }: AddressNameDialogProps) {
  const [name, setName] = useState('');

  useEffect(() => {
    if (open) {
      setName('');
    }
  }, [open]);

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

  const trimmed = name.trim();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (trimmed) {
      onSave(trimmed);
    }
  };

  return (
    <AddressNameOverlay
      onClick={(event) => {
        event.stopPropagation();
        onCancel();
      }}
      role="presentation"
    >
      <AddressNameCard
        as="form"
        onSubmit={handleSubmit}
        role="dialog"
        aria-modal="true"
        aria-label="Nombre de la dirección"
        onClick={(event) => event.stopPropagation()}
      >
        <AddressNameTitle>Nombre de la dirección</AddressNameTitle>
        {address ? <AddressNameHint>{address}</AddressNameHint> : null}

        <AddressNameLabel htmlFor="address-name">Nombre de la dirección</AddressNameLabel>
        <AddressNameInput
          id="address-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Casa, Trabajo..."
          autoFocus
          maxLength={28}
        />

        <AddressNameActions>
          <AddressNameCancel type="button" onClick={onCancel}>
            Cancelar
          </AddressNameCancel>
          <AddressNameSave type="submit" disabled={!trimmed}>
            Guardar
          </AddressNameSave>
        </AddressNameActions>
      </AddressNameCard>
    </AddressNameOverlay>
  );
}
