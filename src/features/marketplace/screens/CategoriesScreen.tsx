import { useMemo, useState } from 'react';
import { SearchX } from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { CategoryTile } from '../components/CategoryTile';
import { EmptyState } from '../components/EmptyState';
import { SearchBar } from '../components/SearchBar';
import { SectionHeading } from '../components/SectionHeading';
import { categories } from '../marketplaceContent';
import { useStores } from '../useStores';
import { matchesQuery } from '../marketplace.utils';
import { SectionInner } from '../ui';

import { CompactSection, SearchSection } from './screenLayout';
import { CategoryGrid } from './CategoriesScreenStyled';

/**
 * Pantalla de rubros.
 *
 * Sólo lista categorías: elegir una lleva al listado de negocios de ese
 * rubro. Antes esta pantalla mezclaba el riel de categorías con la lista de
 * negocios, así que tocar un rubro dejaba al usuario donde ya estaba.
 *
 * La grilla vertical reemplaza al riel horizontal: con catorce rubros, verlos
 * todos de un vistazo es más rápido que arrastrar una fila donde la mitad
 * queda escondida.
 */
export function CategoriesScreen() {
  const [query, setQuery] = useState('');

  const { stores } = useStores();

  const visibleCategories = useMemo(
    () => categories.filter((category) => matchesQuery(query, category.name, category.description)),
    [query],
  );

  /* Cuántos negocios hay en cada rubro, para no ofrecer categorías vacías. */
  const countByCategory = useMemo(() => {
    const counts: Record<string, number> = {};

    stores.forEach((store) => {
      counts[store.categoryId] = (counts[store.categoryId] ?? 0) + 1;
    });

    return counts;
  }, [stores]);

  return (
    <MarketplaceFrame query={query} onQueryChange={setQuery}>
      <SearchSection>
        <SectionInner>
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Buscar un rubro"
          />
        </SectionInner>
      </SearchSection>

      <CompactSection>
        <SectionInner>
          {visibleCategories.length > 0 ? (
            <>
              <SectionHeading
                title="Categorías"
                chip={`${visibleCategories.length}`}
                subtitle="Elegí un rubro para ver los negocios."
              />

              <CategoryGrid>
                {visibleCategories.map((category, index) => (
                  <CategoryTile
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    to={`/comercios?rubro=${category.id}`}
                    count={countByCategory[category.id] ?? 0}
                    priority={index < 6}
                  />
                ))}
              </CategoryGrid>
            </>
          ) : (
            <EmptyState
              icon={SearchX}
              title="Sin rubros"
              text="Probá con otro término."
              dashed
            />
          )}
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
