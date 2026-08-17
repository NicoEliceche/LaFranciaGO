export const formatMoney = (value: number, locale = 'es-AR', currency = 'ARS') =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);

export const formatDistance = (value: number) => `${value.toFixed(1)} km`;

export const formatPercent = (value: number) => `${value > 0 ? '+' : ''}${value}%`;

export const formatTimeRange = (min: number, max: number) => `${min}-${max} min`;

export const normalizeText = (value: string) => value.trim().toLowerCase();

