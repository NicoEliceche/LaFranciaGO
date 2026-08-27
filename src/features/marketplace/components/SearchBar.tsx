import { type FormEvent, forwardRef } from 'react';
import { Search } from 'lucide-react';

import {
  SearchBarField,
  SearchBarForm,
  SearchBarInput,
  SearchBarLabel,
  SearchBarSubmit,
} from './SearchBarStyled';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  id?: string;
};

/**
 * Buscador de cuerpo: vive dentro del contenido y scrollea con él.
 * La barra fija de arriba sólo ofrece el atajo que le da foco.
 */
export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(function SearchBar(
  { value, onChange, placeholder = 'Locales, productos y categorías', label, id = 'marketplace-search' },
  ref,
) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <SearchBarForm onSubmit={handleSubmit} role="search">
      <SearchBarLabel htmlFor={id}>{label ?? 'Buscá productos, comercios o categorías'}</SearchBarLabel>
      <SearchBarField>
        <Search size={18} aria-hidden="true" />
        <SearchBarInput
          id={id}
          ref={ref}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type="search"
        />
        <SearchBarSubmit type="submit" aria-label="Buscar">
          <Search size={16} aria-hidden="true" />
        </SearchBarSubmit>
      </SearchBarField>
    </SearchBarForm>
  );
});
