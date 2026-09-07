import { useEffect, useState } from 'react';

import { favoritosApi, hayBackend } from '@core/data/services/apiClient';

/**
 * Los comercios que el cliente guardó.
 *
 * Se cargan una vez y se comparten: la estrella de cada tarjeta necesita
 * saber si ese comercio ya está guardado, y consultarlo por tarjeta sería un
 * viaje a la base por cada una.
 *
 * Al tocar la estrella el cambio se pinta antes de que conteste el servidor.
 * Guardar un favorito es un gesto chico y frecuente; esperar medio segundo a
 * que la estrella se llene lo hace sentir roto. Si la llamada falla, se
 * revierte.
 */

const oyentes = new Set<() => void>();
let guardados = new Set<string>();
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
    const { favoritos } = await favoritosApi.listar();

    guardados = new Set(favoritos.map((comercio) => comercio.id));
  } catch {
    /* Sin sesión o sin red se arranca vacío: la pantalla lo dice, y guardar
       algo vuelve a intentar contra el servidor. */
    guardados = new Set();
  }

  estado = 'listo';
  avisar();
}

/** Vuelve a pedirlos, por ejemplo después de iniciar sesión. */
export function refrescarFavoritos() {
  estado = 'inicial';

  return cargar();
}

/** Guarda o saca un comercio de favoritos. */
export async function alternarFavorito(comercioId: string) {
  const estaba = guardados.has(comercioId);
  const siguiente = new Set(guardados);

  if (estaba) {
    siguiente.delete(comercioId);
  } else {
    siguiente.add(comercioId);
  }

  guardados = siguiente;
  avisar();

  if (!hayBackend()) {
    return;
  }

  try {
    await (estaba ? favoritosApi.quitar(comercioId) : favoritosApi.agregar(comercioId));
  } catch {
    /* Se vuelve atrás: dejar la estrella llena mentiría sobre lo guardado. */
    const revertido = new Set(guardados);

    if (estaba) {
      revertido.add(comercioId);
    } else {
      revertido.delete(comercioId);
    }

    guardados = revertido;
    avisar();
  }
}

export function useFavoritos(): { favoritos: Set<string>; cargando: boolean } {
  const [, forzar] = useState(0);

  useEffect(() => {
    const oyente = () => forzar((numero) => numero + 1);

    oyentes.add(oyente);
    void cargar();

    return () => {
      oyentes.delete(oyente);
    };
  }, []);

  return { favoritos: guardados, cargando: estado !== 'listo' };
}
