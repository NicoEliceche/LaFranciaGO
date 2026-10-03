/**
 * Qué computadora es ésta, y qué le convendría mejorar.
 *
 * No alcanza con publicar "se recomiendan 8 GB": quien atiende no sabe
 * cuánta memoria tiene su máquina ni cómo averiguarlo. Esto la revisa y
 * dice, de cada cosa, qué tiene, qué conviene tener, y qué hacer si no
 * llega.
 *
 * El orden importa: primero lo que está corto, que es lo accionable, y
 * después lo que está bien. Una lista donde hay que buscar el problema entre
 * cuatro tildes verdes no se lee.
 *
 * Informa, no bloquea. Una máquina por debajo de lo recomendado igual abre y
 * cobra: sólo va a ir más lenta, y conviene que el negocio lo sepa antes de
 * que se note un sábado a la tarde.
 */
import { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle2, Cpu, Loader2, MinusCircle } from 'lucide-react';

import { type EstadoEquipo, type InformeEquipo, esEscritorio } from '../entorno';

import {
  EquipoConsejo,
  EquipoDatos,
  EquipoDetalle,
  EquipoEncabezado,
  EquipoIcono,
  EquipoLista,
  EquipoPunto,
  EquipoResumen,
  EquipoTitulo,
} from './RevisionEquipoStyled';

/* Qué ícono le toca a cada estado. */
const ICONOS = {
  bien: CheckCircle2,
  justo: MinusCircle,
  corto: AlertTriangle,
  desconocido: MinusCircle,
} as const;

/* Lo primero que se lee, según cómo haya salido todo. */
const RESUMEN: Record<EstadoEquipo, string> = {
  bien: 'Esta computadora está bien para el mostrador.',
  justo: 'Esta computadora anda, pero hay algo que conviene mejorar.',
  corto: 'Esta computadora se queda corta para trabajar cómodo.',
  desconocido: 'No pudimos revisar todo.',
};

/* Lo que está corto primero: es lo que hay que hacer algo al respecto. */
const PESO: Record<EstadoEquipo, number> = { corto: 0, justo: 1, desconocido: 2, bien: 3 };

export function RevisionEquipo() {
  const [informe, setInforme] = useState<InformeEquipo | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const revisar = window.lafranciagoEscritorio?.equipo;

    if (!revisar) {
      setCargando(false);

      return;
    }

    let vigente = true;

    revisar()
      .then((datos) => {
        if (vigente) setInforme(datos);
      })
      .catch(() => {
        /* Sin diagnóstico la pantalla sigue sirviendo para todo lo demás. */
      })
      .finally(() => {
        if (vigente) setCargando(false);
      });

    return () => {
      vigente = false;
    };
  }, []);

  /* En el navegador no hay máquina que revisar: esto habla de la computadora
     del local, no de la que está mirando la web. */
  if (!esEscritorio()) {
    return null;
  }

  if (cargando) {
    return (
      <EquipoResumen data-estado="desconocido">
        <Loader2 size={18} aria-hidden="true" />
        Revisando esta computadora…
      </EquipoResumen>
    );
  }

  if (!informe) {
    return null;
  }

  const Icono = ICONOS[informe.resumen];
  const ordenados = [...informe.puntos].sort((a, b) => PESO[a.estado] - PESO[b.estado]);

  return (
    <>
      <EquipoResumen data-estado={informe.resumen} role="status">
        <Icono size={18} aria-hidden="true" />
        {RESUMEN[informe.resumen]}
      </EquipoResumen>

      <EquipoLista>
        {ordenados.map((punto) => {
          const IconoPunto = ICONOS[punto.estado];
          const consejo = punto.consejo[punto.estado];

          return (
            <EquipoPunto key={punto.id} data-estado={punto.estado}>
              <EquipoIcono data-estado={punto.estado}>
                <IconoPunto size={17} aria-hidden="true" />
              </EquipoIcono>

              <EquipoDatos>
                <EquipoEncabezado>
                  <EquipoTitulo>{punto.titulo}</EquipoTitulo>
                  <span>
                    {punto.tiene}
                    {/* Lo recomendado sólo se muestra cuando no se llega: en
                        lo que ya está bien, repetirlo es ruido. */}
                    {punto.estado !== 'bien' ? ` · se recomienda ${punto.recomendado}` : null}
                  </span>
                </EquipoEncabezado>

                {punto.detalle ? <EquipoDetalle>{punto.detalle}</EquipoDetalle> : null}

                {consejo && punto.estado !== 'bien' ? (
                  <EquipoConsejo>{consejo}</EquipoConsejo>
                ) : null}
              </EquipoDatos>
            </EquipoPunto>
          );
        })}
      </EquipoLista>

      <EquipoDetalle>
        {informe.sistema} · {informe.procesador}
      </EquipoDetalle>
    </>
  );
}

export { Cpu as IconoEquipo };
