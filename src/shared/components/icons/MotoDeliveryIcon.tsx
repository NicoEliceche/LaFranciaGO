import type { SVGProps } from 'react';

type MotoDeliveryIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

/**
 * Moto de reparto con líneas de velocidad.
 *
 * La moto va a la derecha y las dos rayitas de viento a la izquierda, para
 * que se lea el movimiento hacia adelante. Hereda `currentColor` y el tamaño
 * como cualquier ícono de lucide, así que se puede intercambiar con ellos.
 */
export function MotoDeliveryIcon({ size = 18, ...props }: MotoDeliveryIconProps) {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Rayitas de viento, detrás de la moto */}
      <path d="M1.5 10.5h4" />
      <path d="M3 14h3.5" />

      {/* Ruedas */}
      <circle cx="10.5" cy="17" r="3" />
      <circle cx="19.5" cy="17" r="3" />

      {/* Cuadro y asiento */}
      <path d="M10.5 17h2.2l2.1-4.2h3.1l1.6 3.4" />
      <path d="M14.4 12.8l1.2-2h2.6" />

      {/* Manubrio */}
      <path d="M17.4 8.2h2.6" />
    </svg>
  );
}
