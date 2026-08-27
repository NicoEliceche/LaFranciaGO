/** Sugerencia de dirección devuelta por el autocompletado. */
export interface GeoSuggestion {
  id: string;
  /** Calle y altura cuando existe. */
  label: string;
  /** Localidad y provincia, como ayuda para desambiguar. */
  context: string;
  lat: number;
  lon: number;
}

/** Punto elegido en el mapa, junto con su etiqueta legible. */
export interface GeoPoint {
  lat: number;
  lon: number;
  label: string;
}
