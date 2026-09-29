/**
 * El inicio de quien reparte: en qué anda ahora.
 *
 * Antes "Inicio" mostraba la misma lista que "Disponibles", así que el primer
 * botón del menú no decía nada que el segundo no dijera. Y lo que la persona
 * quiere saber al abrir la aplicación no es qué hay para tomar —eso lo mira
 * después— sino si tiene algo encima y cuánto lleva hecho.
 *
 * Tres cosas, en ese orden: lo que tiene en curso, porque es lo que no puede
 * olvidarse; lo que ganó hoy, que es por lo que trabaja; y cuánto hay
 * esperando, que es la invitación a seguir.
 */
import { useEffect, useState } from 'react';
import { BarChart3, PackageSearch, Truck, Wallet } from 'lucide-react';

import { type GananciasApi, deliveryApi } from '@core/data/services/apiClient';
import { formatMoney } from '@shared/utils/format';

import { DeudaDialog } from './DeudaDialog';
import {
  ResumenAccion,
  ResumenDato,
  ResumenEtiqueta,
  ResumenGrilla,
  ResumenIcono,
  ResumenTarjeta,
  ResumenValor,
} from './ResumenRepartidorStyled';

interface Props {
  esFletero: boolean;
  /** Cuántos viajes tiene tomados ahora. */
  enCurso: number;
  /** Cuántos hay esperando que alguien los tome. */
  disponibles: number;
  /** Para saltar a la lista que corresponde. */
  onVer: (pestana: 'disponibles' | 'mios' | 'ganancias') => void;
}

export function ResumenRepartidor({ esFletero, enCurso, disponibles, onVer }: Props) {
  const [datos, setDatos] = useState<GananciasApi | null>(null);
  const [deuda, setDeuda] = useState<number | null>(null);
  const [pagando, setPagando] = useState(false);

  useEffect(() => {
    let vigente = true;

    deliveryApi
      .ganancias()
      .then((respuesta) => {
        if (vigente) setDatos(respuesta);
      })
      .catch(() => {
        /* Sin ganancias el resumen igual sirve: lo que tiene en curso y lo
           que hay para tomar son los dos datos que no pueden faltar. */
      });

    /* Lo que debe de lo cobrado en efectivo. Se pide siempre y no solo
       cuando hay deuda: la tarjeta tiene que poder decir "estas al dia",
       que es la mitad de para que sirve mirarla. */
    deliveryApi
      .deuda()
      .then((respuesta) => {
        if (vigente) setDeuda(respuesta.deuda);
      })
      .catch(() => {
        /* Sin este dato el resto del resumen sigue sirviendo. */
      });

    return () => {
      vigente = false;
    };
  }, []);

  const viaje = esFletero ? 'flete' : 'envío';
  const viajes = esFletero ? 'fletes' : 'envíos';

  return (
    <ResumenGrilla>
      <ResumenTarjeta data-destacado={enCurso > 0}>
        <ResumenIcono data-destacado={enCurso > 0}>
          <Truck size={24} aria-hidden="true" />
        </ResumenIcono>
        <ResumenDato>
          <ResumenValor>{enCurso}</ResumenValor>
          <ResumenEtiqueta>
            {enCurso === 1 ? `${viaje} en curso` : `${viajes} en curso`}
          </ResumenEtiqueta>
        </ResumenDato>
        {enCurso > 0 ? (
          <ResumenAccion type="button" onClick={() => onVer('mios')}>
            Ver {esFletero ? 'mis fletes' : 'mis envíos'}
          </ResumenAccion>
        ) : null}
      </ResumenTarjeta>

      <ResumenTarjeta>
        <ResumenIcono>
          <BarChart3 size={24} aria-hidden="true" />
        </ResumenIcono>
        <ResumenDato>
          <ResumenValor>{datos ? formatMoney(datos.hoy.gano) : '—'}</ResumenValor>
          <ResumenEtiqueta>
            Ganaste hoy
            {datos
              ? ` · ${datos.hoy.entregas} ${datos.hoy.entregas === 1 ? 'entrega' : 'entregas'}`
              : ''}
          </ResumenEtiqueta>
        </ResumenDato>
        <ResumenAccion type="button" onClick={() => onVer('ganancias')}>
          Ver el detalle
        </ResumenAccion>
      </ResumenTarjeta>

      {/* La deuda solo aparece cuando existe: quien nunca cobro en efectivo
          no tiene por que ver una tarjeta que le habla de algo que no le
          pasa. Al lado de lo que gano, que es donde se piensa en plata. */}
      {deuda !== null && deuda > 0 ? (
        <ResumenTarjeta data-destacado>
          <ResumenIcono data-destacado>
            <Wallet size={24} aria-hidden="true" />
          </ResumenIcono>
          <ResumenDato>
            <ResumenValor>{formatMoney(deuda)}</ResumenValor>
            <ResumenEtiqueta>Debés de lo cobrado en efectivo</ResumenEtiqueta>
          </ResumenDato>
          <ResumenAccion type="button" onClick={() => setPagando(true)}>
            Pagar deuda
          </ResumenAccion>
        </ResumenTarjeta>
      ) : null}

      <ResumenTarjeta data-destacado={disponibles > 0}>
        <ResumenIcono data-destacado={disponibles > 0}>
          <PackageSearch size={24} aria-hidden="true" />
        </ResumenIcono>
        <ResumenDato>
          <ResumenValor>{disponibles}</ResumenValor>
          <ResumenEtiqueta>
            {disponibles === 1
              ? `${esFletero ? 'Flete' : 'Pedido'} esperando`
              : `${esFletero ? 'Fletes' : 'Pedidos'} esperando`}
          </ResumenEtiqueta>
        </ResumenDato>
        <ResumenAccion type="button" onClick={() => onVer('disponibles')} data-fuerte>
          Ver {esFletero ? 'los fletes' : 'los pedidos'}
        </ResumenAccion>
      </ResumenTarjeta>

      <DeudaDialog abierto={pagando} alCerrar={() => setPagando(false)} />
    </ResumenGrilla>
  );
}
