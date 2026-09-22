/**
 * Contratar el sistema de gestión.
 *
 * Quien llega acá todavía no lo tiene, así que la pantalla va dentro del
 * marco del marketplace y no del panel: ese es justamente el que no puede
 * ver.
 *
 * Lo que se cuenta es lo que el comercio no puede hacer hoy, con las palabras
 * del mostrador: cuánta plata hay en el cajón, cuánto se gana de verdad, qué
 * se le fía a quién. Una lista de funciones no dice nada a quien nunca usó un
 * sistema de gestión.
 */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Wallet } from 'lucide-react';

import { planGestionApi, type PlanGestionApi } from '@core/data/services/apiClient';

import { anotarPlan } from '@features/marketplace/planGestionStore';

import { MarketplaceFrame } from '@features/marketplace/components/MarketplaceFrame';

import { mostrarCentavos } from '../dinero';
import {
  Aviso,
  Cabecera,
  Contratar,
  Item,
  Lista,
  Panel,
  Precio,
  PrecioNota,
} from './ContratarGestionScreenStyled';

/* Lo que se gana con el sistema, dicho por lo que resuelve y no por cómo se
   llama la pantalla. */
const LO_QUE_TRAE = [
  'Saber cuánta plata tiene que haber en el cajón, y cuánto falta si no da.',
  'Cobrar en el mostrador con lectora de código de barras.',
  'Saber cuánto se gana de verdad en cada producto, con el costo cargado.',
  'Llevar la cuenta de lo que se fía, sin que se le mezcle a quien atiende.',
  'Cargar las compras al proveedor y que el stock se actualice solo.',
  'Presupuestos, ficha de clientes e informes del mes.',
  'Seguir vendiendo cuando se corta internet, y subir las ventas al volver.',
];

export function ContratarGestionScreen() {
  const navegar = useNavigate();
  const [plan, setPlan] = useState<PlanGestionApi | null>(null);
  const [contratando, setContratando] = useState(false);
  const [fallo, setFallo] = useState<string | null>(null);

  useEffect(() => {
    let vigente = true;

    planGestionApi
      .ver()
      .then((datos) => {
        if (!vigente) return;

        /* Si ya lo tiene, no hay nada que contratar: va al panel. Pasa cuando
           se contrató en otra pestaña, o al volver atrás después de hacerlo. */
        if (datos.activo) {
          navegar('/gestion', { replace: true });
          return;
        }

        setPlan(datos);
      })
      .catch(() => {
        if (vigente) setFallo('No pudimos consultar el plan. Probá de nuevo.');
      });

    return () => {
      vigente = false;
    };
  }, [navegar]);

  const contratar = async () => {
    setContratando(true);
    setFallo(null);

    try {
      await planGestionApi.contratar();

      /* El menu se entera sin volver a preguntar. */
      anotarPlan(true);
      navegar('/gestion', { replace: true });
    } catch {
      setFallo('No pudimos activarlo. Probá de nuevo en un rato.');
      setContratando(false);
    }
  };

  return (
    <MarketplaceFrame>
      <Panel>
        <Cabecera>
          <Wallet size={22} aria-hidden="true" />
          <div>
            <h1>Sistema de gestión</h1>
            <p>Para llevar el negocio, no sólo para vender por la aplicación.</p>
          </div>
        </Cabecera>

        {plan ? (
          <Precio>
            <strong>{mostrarCentavos(plan.precioCentavos)}</strong>
            <PrecioNota>por mes, se puede dar de baja cuando quieras</PrecioNota>
          </Precio>
        ) : null}

        <Lista>
          {LO_QUE_TRAE.map((linea) => (
            <Item key={linea}>
              <Check size={16} aria-hidden="true" />
              {linea}
            </Item>
          ))}
        </Lista>

        {fallo ? <Aviso role="alert">{fallo}</Aviso> : null}

        <Contratar type="button" onClick={() => void contratar()} disabled={contratando || !plan}>
          {contratando ? 'Activando…' : 'Contratar el sistema'}
        </Contratar>

        {/* Se aclara acá y no después: la caja rápida y la lectora necesitan
            la computadora del local, y enterarse recién al usarlas sería una
            sorpresa desagradable. */}
        <PrecioNota>
          La caja rápida y la lectora de código de barras funcionan en la
          computadora del local. El resto anda desde cualquier lado.
        </PrecioNota>
      </Panel>
    </MarketplaceFrame>
  );
}
