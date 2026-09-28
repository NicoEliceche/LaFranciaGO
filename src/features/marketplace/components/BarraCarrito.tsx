/**
 * La barra del carrito, en todas las pantallas.
 *
 * Antes vivía adentro de la pantalla del comercio y mostraba sólo lo de ese
 * comercio. Entonces al volver a la portada desaparecía, y al entrar a otro
 * negocio mostraba el total de ese solo: agregabas algo en la carnicería, ibas
 * al almacén, agregabas otra cosa y la barra decía el precio de lo último. El
 * carrito estaba bien, pero la barra decía otra cosa.
 *
 * Ahora vive en el marco y lee el carrito entero, así que acompaña mientras
 * haya algo adentro, sin importar dónde esté la persona.
 */
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

import { formatMoney } from '@shared/utils/format';

import { useCart } from '../cartStore';
import {
  BarraCarritoCaja,
  BarraCarritoCta,
  BarraCarritoDatos,
  BarraCarritoEspacio,
  BarraCarritoTotal,
  BarraCarritoTotalLinea,
} from './BarraCarritoStyled';

/* Donde la barra sobra: en el carrito mismo y al confirmar, porque el total
   ya está en pantalla, y en el sistema de gestión, que no es para comprar. */
const PANTALLAS_SIN_BARRA = ['/carrito', '/gestion', '/panel'];

export function BarraCarrito() {
  const carrito = useCart();
  const { pathname } = useLocation();

  const barraRef = useRef<HTMLDivElement | null>(null);
  const [alto, setAlto] = useState(0);

  const cuantos = carrito.length;
  const total = carrito.reduce((suma, item) => suma + item.subtotal, 0);

  const estorba = PANTALLAS_SIN_BARRA.some((ruta) => pathname.startsWith(ruta));
  const visible = cuantos > 0 && !estorba;

  /* La barra flota, así que no ocupa lugar en el scroll y taparía lo último
     de cada lista. Se le reserva abajo lo que mide, medido y no a ojo porque
     un total largo le cambia el alto. */
  useEffect(() => {
    const barra = barraRef.current;

    if (!barra) {
      setAlto(0);

      return;
    }

    const observador = new ResizeObserver(() => {
      const separacion = Number.parseFloat(getComputedStyle(barra).bottom) || 0;

      setAlto(barra.offsetHeight + separacion);
    });

    observador.observe(barra);

    return () => observador.disconnect();
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <>
      <BarraCarritoEspacio style={{ height: alto }} />

      <BarraCarritoCaja ref={barraRef}>
        <BarraCarritoDatos>
          <span>
            {cuantos} {cuantos === 1 ? 'producto' : 'productos'}
          </span>
          <BarraCarritoTotalLinea>
            <BarraCarritoTotal>{formatMoney(total)}</BarraCarritoTotal>
          </BarraCarritoTotalLinea>
        </BarraCarritoDatos>

        <BarraCarritoCta to="/carrito">
          <ShoppingCart size={18} aria-hidden="true" />
          Ver carrito
        </BarraCarritoCta>
      </BarraCarritoCaja>
    </>
  );
}
