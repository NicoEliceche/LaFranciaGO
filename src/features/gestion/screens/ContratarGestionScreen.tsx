/**
 * Los planes del sistema de gestión.
 *
 * Quien llega acá todavía no lo tiene, así que la pantalla va dentro del
 * marco del marketplace y no del de gestión: ese es justamente el que no
 * puede ver.
 *
 * Lo que se cuenta es lo que el comercio no puede hacer hoy, con las palabras
 * del mostrador: cuánta plata hay en el cajón, cuánto se gana de verdad, qué
 * se le fía a quién. Una lista de funciones no dice nada a quien nunca usó un
 * sistema de gestión.
 *
 * Son dos planes y no uno porque hacen falta dos cosas distintas: casi todo
 * comercio necesita cobrar y llevar la caja, y sólo el que ya creció necesita
 * los informes y más de un local. Ofrecer el de arriba a quien tiene un
 * almacén es venderle algo que no va a abrir.
 */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Wallet } from 'lucide-react';

import {
  planGestionApi,
  type PlanGestionApi,
  type PlanGestionId,
} from '@core/data/services/apiClient';

import { anotarPlan } from '@features/marketplace/planGestionStore';

import { MarketplaceFrame } from '@features/marketplace/components/MarketplaceFrame';

import { mostrarCentavos } from '../dinero';
import {
  Aviso,
  Cabecera,
  Contratar,
  Destacado,
  PlanTitulo,
  Item,
  Lista,
  Panel,
  PlanCabecera,
  PlanTarjeta,
  Planes,
  Precio,
  PrecioNota,
  Volver,
} from './ContratarGestionScreenStyled';

/**
 * Lo que trae cada plan, dicho por lo que resuelve.
 *
 * El corte es a propósito: GO es todo el mostrador —cobrar, caja, fiado,
 * stock, los pedidos que entran por la aplicación— y PRO agrega lo que
 * recién sirve cuando el negocio creció. Así el comercio chico no siente que
 * le falta lo básico, que es el error de partir por la mitad.
 */
const PLANES: Record<
  PlanGestionId,
  { bajada: string; trae: string[]; suma?: string[] }
> = {
  go: {
    bajada: 'Todo lo del mostrador, para el día a día del negocio.',
    trae: [
      'Saber cuánta plata tiene que haber en el cajón, y cuánto falta si no da.',
      'Cobrar en el mostrador con lectora de código de barras.',
      'Llevar la cuenta de lo que se fía, sin que se le mezcle a quien atiende.',
      'Cargar las compras al proveedor y que el stock se actualice solo.',
      'Los pedidos y envíos de la aplicación, sin salir del sistema.',
      'Productos, ofertas, presupuestos y ficha de clientes.',
      'Seguir vendiendo cuando se corta internet, y subir las ventas al volver.',
    ],
  },
  pro: {
    bajada: 'Para cuando el negocio creció y hay que mirarlo de arriba.',
    trae: [],
    suma: [
      'Informes del mes: qué se vendió, qué dejó ganancia y qué no.',
      'Saber cuánto se gana de verdad en cada producto, con el costo cargado.',
      'Manejar más de un local desde la misma cuenta.',
    ],
  },
};

export function ContratarGestionScreen() {
  const navegar = useNavigate();
  const [datos, setDatos] = useState<PlanGestionApi | null>(null);
  const [contratando, setContratando] = useState<PlanGestionId | null>(null);
  const [fallo, setFallo] = useState<string | null>(null);

  useEffect(() => {
    let vigente = true;

    planGestionApi
      .ver()
      .then((respuesta) => {
        if (!vigente) return;

        /* Si ya lo tiene, no hay nada que contratar: va al sistema. Pasa
           cuando se contrató en otra pestaña, o al volver atrás después de
           hacerlo. */
        if (respuesta.activo) {
          navegar('/gestion', { replace: true });
          return;
        }

        setDatos(respuesta);
      })
      .catch(() => {
        if (vigente) setFallo('No pudimos consultar los planes. Probá de nuevo.');
      });

    return () => {
      vigente = false;
    };
  }, [navegar]);

  const contratar = async (plan: PlanGestionId) => {
    setContratando(plan);
    setFallo(null);

    try {
      await planGestionApi.contratar(plan);

      /* El menú se entera sin volver a preguntar. */
      anotarPlan(true);
      navegar('/gestion', { replace: true });
    } catch {
      setFallo('No pudimos activarlo. Probá de nuevo en un rato.');
      setContratando(null);
    }
  };

  return (
    <MarketplaceFrame>
      <Panel>
        {/* La salida va arriba y no al pie: todavia se esta adentro de la
            aplicacion, y un boton de volver debajo de los precios se lee como
            la alternativa a contratar. */}
        <Volver type="button" onClick={() => navegar('/panel/comercio')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Volver a la app
        </Volver>

        <Cabecera>
          <Wallet size={22} aria-hidden="true" />
          <div>
            <h1>Sistema de gestión</h1>
            <p>Para llevar el negocio, no sólo para vender por la aplicación.</p>
          </div>
        </Cabecera>

        {fallo ? <Aviso role="alert">{fallo}</Aviso> : null}

        <Planes>
          {/* `planes` puede no venir si el backend todavía es el viejo, y
              entonces la pantalla quedaba en blanco: lo peor que puede pasar
              en la única pantalla que cobra. Se protege con la lista vacía y
              abajo se avisa. */}
          {(datos?.planes ?? []).map((opcion) => {
            const detalle = PLANES[opcion.id];
            const esPro = opcion.id === 'pro';

            return (
              <PlanTarjeta key={opcion.id} data-destacado={esPro}>
                <PlanCabecera>
                  <PlanTitulo>
                    <h2>{opcion.nombre}</h2>
                    {esPro ? <Destacado>El más completo</Destacado> : null}
                  </PlanTitulo>
                  <p>{detalle.bajada}</p>
                </PlanCabecera>

                <Precio>
                  <strong>{mostrarCentavos(opcion.precioCentavos)}</strong>
                  <PrecioNota>por mes, se puede dar de baja cuando quieras</PrecioNota>
                </Precio>

                <Lista>
                  {/* El PRO no repite las siete líneas del GO: se dice que
                      las incluye y se listan sólo las que agrega. Repetirlas
                      hace que los dos planes parezcan iguales de lejos, que
                      es justo lo que hay que evitar al elegir. */}
                  {esPro ? (
                    <Item data-incluye>
                      <Check size={16} aria-hidden="true" />
                      <strong>Todo lo de Comercio GO</strong>
                    </Item>
                  ) : null}

                  {(esPro ? (detalle.suma ?? []) : detalle.trae).map((linea) => (
                    <Item key={linea}>
                      <Check size={16} aria-hidden="true" />
                      {linea}
                    </Item>
                  ))}
                </Lista>

                <Contratar
                  type="button"
                  data-destacado={esPro}
                  onClick={() => void contratar(opcion.id)}
                  disabled={contratando !== null}
                >
                  {contratando === opcion.id ? 'Activando…' : `Contratar ${opcion.nombre}`}
                </Contratar>
              </PlanTarjeta>
            );
          })}
        </Planes>

        {datos && (datos.planes ?? []).length === 0 ? (
          <Aviso role="status">
            No pudimos traer los planes. Proba de nuevo en un rato.
          </Aviso>
        ) : null}

        {/* Se aclara acá y no después: la caja rápida y la lectora necesitan
            la computadora del local, y enterarse recién al usarlas sería una
            sorpresa desagradable. */}
        <PrecioNota>
          La caja rápida y la lectora de código de barras funcionan en la
          computadora del local. El resto anda desde el celular también.
        </PrecioNota>

      </Panel>
    </MarketplaceFrame>
  );
}
