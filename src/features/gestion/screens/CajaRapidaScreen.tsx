/**
 * La caja rápida: cobrar en el mostrador.
 *
 * Está pensada para la pistola lectora, no para el mouse: el foco vuelve
 * solo al buscador después de cada producto, y un código leído entero entra
 * directo sin pedir confirmación. Con alguien esperando del otro lado del
 * mostrador, cada clic de más se siente.
 *
 * Se ve en todos lados pero sólo funciona en la computadora del negocio,
 * donde están la lectora y la impresora.
 */
import { useEffect, useRef, useState } from 'react';
import { Trash2 } from 'lucide-react';

import {
  type CuentaFiadoApi,
  type MetodoPago,
  type ProductoMostradorApi,
  fiadoApi,
  gestionApi,
} from '@core/data/services/apiClient';
import { DEFAULT_SALE_UNIT, SALE_UNITS, priceSuffix } from '@core/data/saleUnits';
import type { SaleUnitId } from '@shared/types/saleUnit.types';

import { mostrarCentavos } from '../dinero';

import { AbrirEnEscritorio } from '../components/AbrirEnEscritorio';
import { GestionFrame } from '../components/GestionFrame';
import { esEscritorio } from '../entorno';
import {
  Accion,
  Aviso,
  AvisoEscritorio,
  Campo,
  Panel,
  TituloPanel,
  Vacio,
} from './CajaScreenStyled';
import {
  Buscador,
  Cobro,
  Linea,
  Lineas,
  Quitar,
  Resultado,
  Resultados,
  TotalGrande,
} from './CajaRapidaScreenStyled';

interface LineaVenta {
  clave: string;
  productoId: string;
  nombre: string;
  /** En milésimos: 1000 es una unidad. */
  cantidad: number;
  precioCentavos: number;
  /** Cómo se vende: decide de a cuánto suben las flechas. */
  unidad: SaleUnitId;
}

/**
 * De a cuánto se mueve la cantidad de un producto, en milésimos.
 *
 * El campo subía de a 0,001 para todo, así que bajarle uno a dos quesos daba
 * 1,999. Nadie vende un milésimo de queso: el paso tiene que ser el mismo con
 * el que se vende el producto.
 *
 * Sale de los escalones que ya define la aplicación, así que la caja del
 * mostrador y la tienda hablan de las mismas cantidades: un cuarto de pan acá
 * es un cuarto de pan allá.
 */
/**
 * Traduce lo que guarda la base a una unidad conocida.
 *
 * La columna es texto libre, así que un producto viejo puede traer algo que
 * ya no existe. En ese caso se lo trata como unidad suelta, que es lo que era
 * antes de que hubiera unidades: se vende de a uno y nadie se sorprende.
 */
function unidadDe(guardada: string | null | undefined): SaleUnitId {
  return guardada && guardada in SALE_UNITS ? (guardada as SaleUnitId) : DEFAULT_SALE_UNIT;
}

/** Cómo se llama la unidad, para el lector de pantalla. */
function etiquetaUnidad(unidad: SaleUnitId): string {
  return SALE_UNITS[unidad]?.priceSuffix ?? 'unidades';
}

function pasoDe(unidad: SaleUnitId): number {
  const escalones = SALE_UNITS[unidad]?.steps ?? [];

  /* El primer escalón es el mínimo que se puede vender, y también de a cuánto
     avanza: un cuarto para el pan, medio kilo para la carne, uno para lo que
     va por unidad. */
  const primero = escalones[0]?.factor ?? 1;

  return Math.round(primero * 1000);
}

export function CajaRapidaScreen() {
  const [termino, setTermino] = useState('');
  const [resultados, setResultados] = useState<ProductoMostradorApi[]>([]);
  const [lineas, setLineas] = useState<LineaVenta[]>([]);
  const [metodo, setMetodo] = useState<MetodoPago>('efectivo');
  const [cuentasFiado, setCuentasFiado] = useState<CuentaFiadoApi[]>([]);
  const [cuentaFiado, setCuentaFiado] = useState('');
  const [aviso, setAviso] = useState<string | null>(null);
  const [cobrando, setCobrando] = useState(false);
  /* Cuántas ventas quedaron guardadas sin subir. Se muestra acá porque es
     donde la persona está cuando se corta internet. */
  const [sinSubir, setSinSubir] = useState(0);

  const buscador = useRef<HTMLInputElement | null>(null);

  const total = lineas.reduce(
    (suma, l) => suma + Math.round((l.precioCentavos * l.cantidad) / 1000),
    0,
  );

  /* Las pendientes se miran seguido: si se cortó internet, la persona del
     mostrador tiene que enterarse sin ir a buscarlo a otra pantalla. */
  useEffect(() => {
    const mirar = () => {
      void window.lafranciagoEscritorio?.pendientes?.().then((p) => setSinSubir(p.cantidad));
    };

    mirar();

    const id = window.setInterval(mirar, 20_000);

    return () => window.clearInterval(id);
  }, []);

  /* Las cuentas de fiado se traen una vez: son dos o tres y no cambian
     entre venta y venta. */
  useEffect(() => {
    void fiadoApi
      .listar()
      .then((datos) => setCuentasFiado(datos.cuentas.filter((c) => c.activa)))
      .catch(() => setCuentasFiado([]));
  }, []);

  /* Busca mientras se escribe, con una pausa: sin ella, cada tecla sería un
     viaje al servidor y la lectora manda el código de golpe. */
  useEffect(() => {
    if (termino.trim().length < 2) {
      setResultados([]);
      return;
    }

    const id = window.setTimeout(() => {
      void gestionApi
        .buscar(termino.trim())
        .then((datos) => setResultados(datos.productos))
        .catch(() => setResultados([]));
    }, 220);

    return () => window.clearTimeout(id);
  }, [termino]);

  const agregar = (producto: ProductoMostradorApi) => {
    setLineas((previas) => {
      /* Si ya está en la lista suma una unidad en vez de repetir la línea:
         es lo que espera quien pasa tres veces el mismo producto. */
      const yaEsta = previas.find((l) => l.productoId === producto.id);

      const unidad = unidadDe(producto.unidad_venta);
      const paso = pasoDe(unidad);

      if (yaEsta) {
        return previas.map((l) =>
          l.productoId === producto.id ? { ...l, cantidad: l.cantidad + paso } : l,
        );
      }

      return [
        ...previas,
        {
          clave: `${producto.id}-${Date.now()}`,
          productoId: producto.id,
          nombre: producto.nombre,
          /* Arranca en el escalón más chico que se puede vender: pasar pan
             por la lectora tiene que dar un cuarto, no un kilo. */
          cantidad: paso,
          precioCentavos: producto.precio_centavos,
          unidad,
        },
      ];
    });

    setTermino('');
    setResultados([]);
    buscador.current?.focus();
  };

  const cambiarCantidad = (clave: string, unidades: number) => {
    setLineas((previas) => {
      const linea = previas.find((l) => l.clave === clave);

      if (!linea) {
        return previas;
      }

      const paso = pasoDe(linea.unidad);

      /* Se redondea al escalón más cercano: el campo deja escribir cualquier
         número a mano, y "1,3 kg de carne" no es algo que la balanza del
         mostrador vaya a pesar. */
      const milesimos = Math.round(Math.round(unidades * 1000) / paso) * paso;

      if (milesimos <= 0) {
        return previas.filter((l) => l.clave !== clave);
      }

      return previas.map((l) => (l.clave === clave ? { ...l, cantidad: milesimos } : l));
    });
  };

  /* Imprime el ticket si hay impresora. No corta la venta si falla: la
     plata ya se cobró, y quedarse sin papel no puede trabar el mostrador. */
  const imprimir = async (numero: number) => {
    const escritorio = window.lafranciagoEscritorio;

    if (!escritorio?.imprimir) return;

    const salida = await escritorio.imprimir({
      numero,
      items: lineas.map((l) => ({
        nombre: l.nombre,
        cantidadMilesimos: l.cantidad,
        precioCentavos: l.precioCentavos,
        subtotalCentavos: Math.round((l.precioCentavos * l.cantidad) / 1000),
      })),
      total,
      pagos: [{ metodo, montoCentavos: total }],
    });

    if (!salida.ok) {
      setAviso((previo) => `${previo ?? ''} (no se pudo imprimir: ${salida.error})`.trim());
    }
  };

  const cobrar = async () => {
    if (lineas.length === 0) {
      setAviso('Agregá algo antes de cobrar');
      return;
    }

    if (metodo === 'cuenta_corriente' && !cuentaFiado) {
      setAviso('Elegí a quién se le fía');
      return;
    }

    setCobrando(true);
    setAviso(null);

    const datos = {
      items: lineas.map((l) => ({
        productoId: l.productoId,
        cantidadMilesimos: l.cantidad,
        precioCentavos: l.precioCentavos,
      })),
      pagos: [{ metodo, montoCentavos: total }],
      cuentaFiadoId: metodo === 'cuenta_corriente' ? cuentaFiado : undefined,
    };

    try {
      const venta = await gestionApi.crearVenta(datos);

      setAviso(`Venta #${venta.numero} cobrada: ${mostrarCentavos(venta.total_centavos)}`);
      await imprimir(venta.numero);
      setLineas([]);
      buscador.current?.focus();
    } catch (fallo) {
      /* Sin internet la venta igual pasó: la mercadería salió del negocio y
         la plata entró al cajón. Se guarda en disco y sube sola cuando
         vuelve la conexión, en vez de perderse. */
      const escritorio = window.lafranciagoEscritorio;

      if (escritorio?.encolar && !navigator.onLine) {
        const guardada = await escritorio.encolar(datos);

        setSinSubir(guardada.pendientes);
        setAviso(
          `Sin internet: la venta quedó guardada y sube sola. Hay ${guardada.pendientes} esperando.`,
        );
        await imprimir(0);
        setLineas([]);
        buscador.current?.focus();
      } else {
        setAviso(fallo instanceof Error ? fallo.message : 'No pudimos registrar la venta');
      }
    } finally {
      setCobrando(false);
    }
  };

  /* Cuando no se está en el mostrador se explica una sola vez arriba, en vez
     de apagar cada control: acá la pantalla entera depende del hardware. */
  const enMostrador = esEscritorio();

  return (
    <GestionFrame titulo="Caja rápida">
      {sinSubir > 0 ? (
        <Aviso role="status">
          Hay {sinSubir} {sinSubir === 1 ? 'venta guardada' : 'ventas guardadas'} en esta
          computadora esperando internet. Suben solas cuando vuelve; podés seguir cobrando.
        </Aviso>
      ) : null}

      {aviso ? <Aviso role="status">{aviso}</Aviso> : null}

      {/* Sin esto la pantalla se abría con el campo muerto y sin explicación:
          el comercio escribe, no pasa nada, y concluye que está rota. La
          lectora y la impresora viven en la computadora del local, y eso hay
          que decirlo donde se intenta usarlas. */}
      {!enMostrador ? (
        <AvisoEscritorio role="status">
          <strong>
            La caja rápida funciona en la computadora del negocio, pero desde la
            web podés visualizar todo el resto.
          </strong>{' '}
          Ahí están la lectora de códigos y la impresora de tickets, que son las
          que hacen que cobrar lleve segundos. Desde acá podés mirar cómo es,
          pero para cobrar usá la aplicación instalada en el local.

          <AbrirEnEscritorio />
        </AvisoEscritorio>
      ) : null}

      <Panel>
        <TituloPanel>Qué se lleva</TituloPanel>

        <Buscador>
          <input
            ref={buscador}
            value={termino}
            onChange={(evento) => setTermino(evento.target.value)}
            placeholder={
              enMostrador
                ? 'Pasá el código o escribí el nombre'
                : 'Disponible en la computadora del negocio'
            }
            autoFocus={enMostrador}
            disabled={!enMostrador}
          />
        </Buscador>

        {resultados.length > 0 ? (
          <Resultados>
            {resultados.map((producto) => (
              <Resultado key={producto.id} type="button" onClick={() => agregar(producto)}>
                <strong>{producto.nombre}</strong>
                <span>
                  {mostrarCentavos(producto.precio_centavos)}{' '}
                  {priceSuffix(unidadDe(producto.unidad_venta))}
                  {producto.stock !== null ? ` · quedan ${producto.stock}` : ''}
                </span>
              </Resultado>
            ))}
          </Resultados>
        ) : null}

        {lineas.length === 0 ? (
          <Vacio>Todavía no agregaste nada.</Vacio>
        ) : (
          <Lineas>
            {lineas.map((linea) => (
              <Linea key={linea.clave}>
                <div>
                  <strong>{linea.nombre}</strong>
                  <span>
                    {mostrarCentavos(linea.precioCentavos)} {priceSuffix(linea.unidad)}
                  </span>
                </div>

                <input
                  type="number"
                  min="0"
                  /* Las flechas suben y bajan de a un escalón del producto:
                     de a uno lo que va por unidad, de a 1/4 el pan, de a 1/2
                     la carne. */
                  step={pasoDe(linea.unidad) / 1000}
                  value={linea.cantidad / 1000}
                  onChange={(evento) => cambiarCantidad(linea.clave, Number(evento.target.value))}
                  aria-label={`Cuánto de ${linea.nombre}, en ${etiquetaUnidad(linea.unidad)}`}
                />

                <strong>{mostrarCentavos(Math.round((linea.precioCentavos * linea.cantidad) / 1000))}</strong>

                <Quitar
                  type="button"
                  onClick={() => cambiarCantidad(linea.clave, 0)}
                  aria-label={`Sacar ${linea.nombre}`}
                >
                  <Trash2 size={15} aria-hidden="true" />
                </Quitar>
              </Linea>
            ))}
          </Lineas>
        )}
      </Panel>

      <Cobro>
        <TotalGrande>
          <span>Total</span>
          <strong>{mostrarCentavos(total)}</strong>
        </TotalGrande>

        <Campo>
          <span>Cómo paga</span>
          <select value={metodo} onChange={(evento) => setMetodo(evento.target.value as MetodoPago)}>
            <option value="efectivo">Efectivo</option>
            <option value="transferencia">Transferencia</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="cuenta_corriente">Que lo pague después</option>
          </select>
        </Campo>

        {metodo === 'cuenta_corriente' ? (
          <Campo>
            <span>A nombre de quién</span>
            <select value={cuentaFiado} onChange={(evento) => setCuentaFiado(evento.target.value)}>
              <option value="">Elegí la cuenta</option>
              {cuentasFiado.map((cuenta) => (
                <option key={cuenta.id} value={cuenta.id}>
                  {cuenta.nombre}
                </option>
              ))}
            </select>
          </Campo>
        ) : null}

        <Accion
          type="button"
          data-tono="fuerte"
          onClick={cobrar}
          disabled={cobrando || lineas.length === 0 || !enMostrador}
        >
          Cobrar
        </Accion>
      </Cobro>
    </GestionFrame>
  );
}
