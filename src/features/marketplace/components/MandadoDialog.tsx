/**
 * Pedir un mandado, sin salir de donde estabas.
 *
 * Antes esto era una pantalla aparte: se tocaba "¿Necesitás algún mandado?"
 * en la portada, se cambiaba de dirección, se escribía, y al enviar se
 * cambiaba de dirección otra vez para caer en un chat. Dos saltos para una
 * sola cosa, y en el medio la persona perdía de vista dónde estaba.
 *
 * Ahora es un diálogo con tres momentos encadenados, que es como se vive el
 * pedido de verdad:
 *
 *   escribir    qué hay que comprar o retirar
 *   avisando    el mandado se creó y lo están viendo los repartidores
 *   tomado      alguien lo agarró: se abre el chat para coordinar
 *
 * Los tres viven en la misma caja y se reemplazan adentro. Que no se cierre
 * y se vuelva a abrir es lo que hace que se lea como una sola cosa que
 * avanza, y no como tres pantallas distintas.
 */
import { type FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bike,
  Check,
  Loader2,
  MapPin,
  MessageSquare,
  PackageSearch,
  ShieldCheck,
  X,
} from 'lucide-react';

import { mandadosApi } from '@core/data/services/apiClient';

import { DEFAULT_RADIUS_KM, cancelErrand, createErrand, useErrand } from '../errandStore';
import {
  MandadoAviso,
  MandadoAvisoIcono,
  MandadoAvisos,
  MandadoBotones,
  MandadoCaja,
  MandadoCerrar,
  MandadoCuerpo,
  MandadoError,
  MandadoFondo,
  MandadoNota,
  MandadoPaso,
  MandadoPasoIcono,
  MandadoPasos,
  MandadoPrimario,
  MandadoSecundario,
  MandadoSubtitulo,
  MandadoTexto,
  MandadoTitulo,
} from './MandadoDialogStyled';

const MINIMO_CARACTERES = 10;
const DIRECCION = 'Av. San Martín 123';

export function MandadoDialog({ abierto, alCerrar }: { abierto: boolean; alCerrar: () => void }) {
  const navegar = useNavigate();
  const { errand: mandado } = useErrand();

  const [descripcion, setDescripcion] = useState('');
  const [intentado, setIntentado] = useState(false);

  /* Qué se pidió recién, para mostrar los pasos de después.
     Arranca en null siempre: el banner tiene que dejar pedir aunque ya haya
     algo en curso. Alguien puede necesitar un mandado mientras espera un
     flete, y antes el diálogo le mostraba el estado del anterior en lugar
     del formulario. */
  const [reciente, setReciente] = useState<'mandado' | 'flete' | null>(null);

  /* Si el de recién ya lo tomó alguien, para avisarlo sin preguntar. */
  const momento = !reciente
    ? 'escribir'
    : mandado && mandado.status !== 'buscando'
      ? 'tomado'
      : 'avisando';

  /* Lo que ya está en curso, para avisar antes de pedir otro igual. */
  const hayEnCurso = Boolean(mandado && mandado.status === 'buscando');

  /* Cuando se pide algo teniendo otro andando, se confirma primero. */
  const [confirmando, setConfirmando] = useState<'mandado' | 'flete' | null>(null);

  const limpio = descripcion.trim();
  const error =
    limpio.length < MINIMO_CARACTERES ? 'Contanos un poco más de lo que necesitás.' : null;

  /* Al abrirlo de nuevo después de haber cancelado, el texto viejo estorba. */
  useEffect(() => {
    if (!abierto) {
      setDescripcion('');
      setIntentado(false);
      setReciente(null);
      setConfirmando(null);
    }
  }, [abierto]);

  useEffect(() => {
    if (!abierto) {
      return undefined;
    }

    const alTeclear = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') alCerrar();
    };

    document.addEventListener('keydown', alTeclear);

    return () => document.removeEventListener('keydown', alTeclear);
  }, [abierto, alCerrar]);

  if (!abierto) {
    return null;
  }

  const enviar = (evento: FormEvent<HTMLFormElement>, tipo: 'mandado' | 'flete' = 'mandado') => {
    evento.preventDefault();
    setIntentado(true);

    if (error) {
      return;
    }

    /* Con uno andando se pregunta antes: pedir dos sin querer es fácil
       —se toca el botón de más— y después hay dos personas en camino. */
    if (hayEnCurso) {
      setConfirmando(tipo);

      return;
    }

    pedir(tipo);
  };

  /** Lo que se hace de verdad, una vez resuelta la confirmación. */
  const pedir = (tipo: 'mandado' | 'flete') => {
    setConfirmando(null);
    setReciente(tipo);

    /* Queda guardado de verdad, además de en la pantalla.

       El store local es el que hace andar el chat y los avisos en el momento;
       la base es la que hace que el mandado exista después de recargar, se
       vea en "Mis pedidos" y le llegue a los repartidores. Antes sólo estaba
       lo primero: se podía pedir y al rato no existía en ningún lado. */
    createErrand(limpio, DIRECCION);

    void mandadosApi
      .crear({ descripcion: limpio, direccionTexto: DIRECCION, tipo })
      .catch(() => {
        /* El mandado ya se ve en pantalla; que falle el guardado no puede
           borrar lo que la persona acaba de pedir. Queda anotado del otro
           lado por el registro de errores. */
      });
  };

  const irAlChat = () => {
    alCerrar();
    navegar('/mandado/chat');
  };

  const cancelar = () => {
    cancelErrand();
    setDescripcion('');
    setIntentado(false);
    alCerrar();
  };

  return (
    <MandadoFondo onClick={alCerrar} role="presentation">
      <MandadoCaja
        role="dialog"
        aria-modal="true"
        aria-label="Pedir un mandado"
        onClick={(evento) => evento.stopPropagation()}
      >
        <MandadoCerrar type="button" onClick={alCerrar} aria-label="Cerrar">
          <X size={18} aria-hidden="true" />
        </MandadoCerrar>

        {/* Ya hay uno andando y se esta pidiendo otro: se pregunta antes
            de crearlo. Tocar el boton de mas y terminar con dos personas en
            camino es un error caro y silencioso. */}
        {confirmando ? (
          <MandadoCuerpo>
            <MandadoTitulo>Ya tenés un pedido activo</MandadoTitulo>
            <MandadoSubtitulo>
              Hay uno tuyo esperando que alguien lo tome. Podés pedir{' '}
              {confirmando === 'flete' ? 'un flete' : 'un mandado'} igual: van por
              separado y cada uno tiene su chat.
            </MandadoSubtitulo>

            <MandadoBotones>
              <MandadoSecundario type="button" onClick={() => setConfirmando(null)}>
                Cancelar
              </MandadoSecundario>

              <MandadoPrimario type="button" onClick={() => pedir(confirmando)}>
                Confirmar
              </MandadoPrimario>
            </MandadoBotones>
          </MandadoCuerpo>
        ) : momento === 'escribir' ? (
          <MandadoCuerpo as="form" onSubmit={enviar} noValidate>
            <MandadoTitulo>¿Qué necesitás?</MandadoTitulo>
            <MandadoSubtitulo>
              Contanos qué hay que comprar, retirar o trasladar. Un mandado lo lleva
              cualquier repartidor; un flete va con camioneta o camión.
            </MandadoSubtitulo>

            <MandadoTexto
              value={descripcion}
              onChange={(evento) => setDescripcion(evento.target.value)}
              placeholder="Ej: 2 bolsas de hielo, una Coca de 2,25 L y un alfajor de la despensa de la esquina."
              rows={4}
              data-invalido={intentado && !!error}
              aria-label="Descripción del mandado"
              autoFocus
            />

            {intentado && error ? (
              <MandadoError role="alert">{error}</MandadoError>
            ) : (
              <MandadoNota>
                Cuanto más claro lo escribas, menos preguntas te va a hacer el repartidor.
              </MandadoNota>
            )}

            <MandadoAvisos>
              <MandadoAviso>
                <MandadoAvisoIcono>
                  <Bike size={15} aria-hidden="true" />
                </MandadoAvisoIcono>
                Lo ven los repartidores en {DEFAULT_RADIUS_KM} km a la redonda.
              </MandadoAviso>

              <MandadoAviso>
                <MandadoAvisoIcono>
                  <PackageSearch size={15} aria-hidden="true" />
                </MandadoAvisoIcono>
                El primero que lo toma se queda con el pedido.
              </MandadoAviso>

              <MandadoAviso>
                <MandadoAvisoIcono>
                  <MapPin size={15} aria-hidden="true" />
                </MandadoAvisoIcono>
                Entrega en {DIRECCION}.
              </MandadoAviso>

              <MandadoAviso>
                <MandadoAvisoIcono>
                  <ShieldCheck size={15} aria-hidden="true" />
                </MandadoAvisoIcono>
                Pagás al recibir, cuando ya sabés el total.
              </MandadoAviso>
            </MandadoAvisos>

            {/* Dos botones y no un selector: lo que cambia es quién lo toma
                —un mandado lo lleva cualquiera, un flete necesita camioneta—
                y eso se decide una vez, al pedirlo. */}
            <MandadoBotones>
              <MandadoPrimario type="submit">Generar mandado</MandadoPrimario>
              <MandadoPrimario
                type="button"
                data-secundario
                onClick={(evento) =>
                  enviar(evento as unknown as FormEvent<HTMLFormElement>, 'flete')
                }
              >
                Generar flete
              </MandadoPrimario>
            </MandadoBotones>
          </MandadoCuerpo>
        ) : null}

        {momento === 'avisando' ? (
          <MandadoCuerpo>
            <MandadoTitulo>Mandado {mandado?.code} generado</MandadoTitulo>
            <MandadoSubtitulo>{mandado?.description}</MandadoSubtitulo>

            {/* Los dos pasos a la vista: el primero ya está, el segundo es lo
                que se está esperando. Mostrar sólo el de ahora dejaría la
                sensación de que no pasó nada todavía. */}
            <MandadoPasos>
              <MandadoPaso data-estado="hecho">
                <MandadoPasoIcono>
                  <Check size={16} aria-hidden="true" />
                </MandadoPasoIcono>
                <div>
                  <strong>El mandado fue generado con éxito</strong>
                  <span>Ya lo están viendo los repartidores cerca tuyo.</span>
                </div>
              </MandadoPaso>

              <MandadoPaso data-estado="esperando">
                <MandadoPasoIcono>
                  <Loader2 size={16} aria-hidden="true" />
                </MandadoPasoIcono>
                <div>
                  <strong>Esperando a que un repartidor lo tome</strong>
                  <span>Te avisamos acá mismo apenas alguien lo agarre.</span>
                </div>
              </MandadoPaso>
            </MandadoPasos>

            <MandadoNota>
              Podés cerrar esto y seguir mirando: el mandado sigue su curso y lo encontrás
              en Mis pedidos.
            </MandadoNota>

            <MandadoSecundario type="button" onClick={cancelar}>
              Cancelar el mandado
            </MandadoSecundario>
          </MandadoCuerpo>
        ) : null}

        {momento === 'tomado' ? (
          <MandadoCuerpo>
            <MandadoTitulo>{mandado?.courier?.name} tomó tu mandado</MandadoTitulo>
            <MandadoSubtitulo>
              {mandado?.courier?.vehicle}
              {mandado?.courier?.distanceKm !== undefined
                ? ` · a ${mandado.courier.distanceKm} km tuyo`
                : ''}
            </MandadoSubtitulo>

            <MandadoPasos>
              <MandadoPaso data-estado="hecho">
                <MandadoPasoIcono>
                  <Check size={16} aria-hidden="true" />
                </MandadoPasoIcono>
                <div>
                  <strong>El mandado fue generado con éxito</strong>
                  <span>{mandado?.description}</span>
                </div>
              </MandadoPaso>

              <MandadoPaso data-estado="hecho">
                <MandadoPasoIcono>
                  <Check size={16} aria-hidden="true" />
                </MandadoPasoIcono>
                <div>
                  <strong>Un repartidor lo tomó</strong>
                  <span>Coordiná con él por el chat lo que haga falta.</span>
                </div>
              </MandadoPaso>
            </MandadoPasos>

            <MandadoPrimario type="button" onClick={irAlChat}>
              <MessageSquare size={17} aria-hidden="true" />
              Abrir el chat
            </MandadoPrimario>
          </MandadoCuerpo>
        ) : null}
      </MandadoCaja>
    </MandadoFondo>
  );
}
