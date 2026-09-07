import { useEffect, useState } from 'react';

import { type OfertaPortadaApi, hayBackend, ofertasApi } from '@core/data/services/apiClient';

/**
 * Las ofertas vigentes de todos los comercios, para la portada.
 *
 * Se cargan una vez y se comparten, igual que los comercios: Inicio las
 * muestra en su riel y el buscador las filtra, y son los mismos datos.
 *
 * Si falla la carga se devuelve una lista vacía y la sección simplemente no
 * aparece. Una portada sin el riel de ofertas se sigue pudiendo usar; una
 * portada rota, no.
 */

const oyentes = new Set<() => void>();
let ofertas: OfertaPortadaApi[] = [];
let estado: 'inicial' | 'cargando' | 'listo' = 'inicial';

const avisar = () => oyentes.forEach((oyente) => oyente());

async function cargar() {
  if (estado !== 'inicial') {
    return;
  }

  estado = 'cargando';

  if (!hayBackend()) {
    estado = 'listo';
    avisar();

    return;
  }

  try {
    const { ofertas: filas } = await ofertasApi.portada();

    ofertas = filas;
  } catch {
    ofertas = [];
  }

  estado = 'listo';
  avisar();
}

/** Vuelve a pedirlas: se usa cuando un comercio publica una oferta nueva. */
export function refrescarOfertas() {
  estado = 'inicial';

  return cargar();
}

export function useOfertas(): { ofertas: OfertaPortadaApi[]; cargando: boolean } {
  const [, forzar] = useState(0);

  useEffect(() => {
    const oyente = () => forzar((numero) => numero + 1);

    oyentes.add(oyente);
    void cargar();

    return () => {
      oyentes.delete(oyente);
    };
  }, []);

  return { ofertas, cargando: estado !== 'listo' };
}
