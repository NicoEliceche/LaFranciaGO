/** Formas en que un comercio puede vender un producto. */
export type SaleUnitId = 'unidad' | 'peso' | 'pesoMedio' | 'docena';

export interface SaleUnitStep {
  /** Multiplicador sobre el precio base cargado por el comercio. */
  factor: number;
  /** Cómo se lee el escalón ("1/2", "2 kg", "3 unid."). */
  label: string;
}

export interface SaleUnit {
  id: SaleUnitId;
  label: string;
  help: string;
  /** Acompaña al precio para aclarar a qué corresponde ("el kg"). */
  priceSuffix: string;
  steps: SaleUnitStep[];
}
