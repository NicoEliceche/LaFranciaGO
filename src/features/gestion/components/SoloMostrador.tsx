/**
 * Envuelve lo que sólo anda en la computadora del negocio.
 *
 * La decisión de fondo: estas funciones se muestran siempre, incluso cuando
 * no se pueden usar. Esconderlas haría creer al comercio que el sistema no
 * las tiene; atenuarlas y decir por qué le muestra lo que gana al instalarlo
 * en el local.
 */
import { type ReactNode, useId, useState } from 'react';
import { MonitorSmartphone } from 'lucide-react';

import { MOTIVO_MOSTRADOR, disponible } from '../entorno';
import { Aviso, Capa, Envoltura } from './SoloMostradorStyled';

interface SoloMostradorProps {
  /** Nombre de la función, como figura en REQUISITOS. */
  funcion: string;
  children: ReactNode;
}

export function SoloMostrador({ funcion, children }: SoloMostradorProps) {
  const sePuede = disponible(funcion);
  const [aviso, setAviso] = useState(false);
  const idAviso = useId();

  if (sePuede) return <>{children}</>;

  return (
    <Envoltura
      onMouseEnter={() => setAviso(true)}
      onMouseLeave={() => setAviso(false)}
      onFocus={() => setAviso(true)}
      onBlur={() => setAviso(false)}
    >
      {/* Se deja ver lo que hay debajo, apagado. El CSS le quita el mouse;
          aria-hidden lo saca del lector de pantalla. */}
      <Capa aria-hidden="true">{children}</Capa>

      <Aviso role="note" id={idAviso} data-visible={aviso ? 'si' : 'no'}>
        <MonitorSmartphone size={15} aria-hidden="true" />
        <span>{MOTIVO_MOSTRADOR}</span>
      </Aviso>
    </Envoltura>
  );
}
