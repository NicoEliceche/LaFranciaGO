import { type ChangeEvent, type ReactNode, useId, useRef, useState } from 'react';
import { Check, Paperclip, Upload, X } from 'lucide-react';

import { formatBytes } from '@core/data/services/mediaService';

import {
  FileFieldButton,
  FileFieldClear,
  FileFieldName,
  FileFieldShell,
  FileFieldStatus,
  FileFieldStatusIcon,
  FileFieldWrap,
} from './FileFieldStyled';

type FileFieldProps = {
  id?: string;
  accept?: string;
  required?: boolean;
  /** Texto del botón cuando todavía no se eligió nada. */
  label?: ReactNode;
  onChange?: (file: File | null) => void;
};

/**
 * Reemplazo del control de archivo nativo.
 *
 * El input nativo se oculta pero sigue siendo el que recibe el foco y la
 * validación del formulario; la parte visible es un botón propio que muestra
 * el nombre del archivo elegido en lugar del "Ningún archivo seleccionado"
 * recortado del navegador.
 */
export function FileField({
  id,
  accept,
  required,
  label = 'Elegir archivo',
  onChange,
}: FileFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0] ?? null;
    setFile(selected);
    onChange?.(selected);
  };

  const clear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }

    setFile(null);
    onChange?.(null);
  };

  return (
    <FileFieldWrap>
      <FileFieldShell data-filled={!!file}>
        <FileFieldButton htmlFor={inputId}>
          <Upload size={16} aria-hidden="true" />
          {label}
        </FileFieldButton>

        <FileFieldStatus data-filled={!!file}>
          <FileFieldStatusIcon data-filled={!!file} aria-hidden="true">
            {file ? <Check size={13} /> : <Paperclip size={13} />}
          </FileFieldStatusIcon>

          <FileFieldName title={file?.name}>
            {file ? `${file.name} · ${formatBytes(file.size)}` : 'Sin archivo'}
          </FileFieldName>
        </FileFieldStatus>

        {file ? (
          <FileFieldClear type="button" onClick={clear} aria-label="Quitar el archivo">
            <X size={14} aria-hidden="true" />
          </FileFieldClear>
        ) : null}
      </FileFieldShell>

      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept={accept}
        required={required}
        onChange={handleChange}
        hidden
      />
    </FileFieldWrap>
  );
}
