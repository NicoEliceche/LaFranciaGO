/**
 * Pagar lo que se debe de lo cobrado en efectivo.
 *
 * Cuando el cliente paga en efectivo, esa plata se la queda quien reparte y
 * pasa a debersela a la plataforma. Es como lo resolvieron las aplicaciones
 * grandes, y necesita una sola cosa para funcionar: que saldar sea facil. Si
 * transferir cuesta —buscar el alias en un papel, escribirlo a mano— la
 * deuda se acumula y despues nadie la paga.
 *
 * Por eso los datos se copian de un toque y el QR esta armado: desde el
 * telefono, que es donde se trabaja, no hay que escribir nada.
 */
import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Check, Copy, Loader2, Wallet, X } from 'lucide-react';

import { type DeudaApi, deliveryApi } from '@core/data/services/apiClient';
import { formatMoney } from '@shared/utils/format';

import {
  DeudaBloque,
  DeudaCaja,
  DeudaCerrar,
  DeudaCopiar,
  DeudaCuerpo,
  DeudaDato,
  DeudaDatoTexto,
  DeudaDatoTitulo,
  DeudaFondo,
  DeudaMonto,
  DeudaNota,
  DeudaQr,
  DeudaQrTitular,
  DeudaQrTitulo,
  DeudaSubtitulo,
  DeudaTitular,
  DeudaTitulo,
  DeudaVacio,
} from './DeudaDialogStyled';

interface Props {
  abierto: boolean;
  alCerrar: () => void;
}

/** Copia al portapapeles y avisa que lo hizo. */
function useCopiar() {
  const [copiado, setCopiado] = useState<string | null>(null);

  useEffect(() => {
    if (!copiado) {
      return undefined;
    }

    /* El cartelito vuelve solo: si quedara fijo, al copiar lo otro no se
       sabria cual de los dos se copio. */
    const reloj = window.setTimeout(() => setCopiado(null), 2000);

    return () => window.clearTimeout(reloj);
  }, [copiado]);

  const copiar = async (que: string, valor: string) => {
    try {
      await navigator.clipboard.writeText(valor);
      setCopiado(que);
    } catch {
      /* Sin permiso del portapapeles el numero igual esta a la vista para
         copiarlo a mano, asi que no se muestra ningun error. */
    }
  };

  return { copiado, copiar };
}

export function DeudaDialog({ abierto, alCerrar }: Props) {
  const [datos, setDatos] = useState<DeudaApi | null>(null);
  const [cargando, setCargando] = useState(true);
  const [qr, setQr] = useState<string | null>(null);
  const { copiado, copiar } = useCopiar();

  useEffect(() => {
    if (!abierto) {
      return undefined;
    }

    let vigente = true;

    setCargando(true);

    deliveryApi
      .deuda()
      .then((respuesta) => {
        if (vigente) {
          setDatos(respuesta);
        }
      })
      .catch(() => {
        /* Sin datos la pantalla lo dice abajo; no hay nada que hacer aca. */
      })
      .finally(() => {
        if (vigente) setCargando(false);
      });

    return () => {
      vigente = false;
    };
  }, [abierto]);

  /* El QR se dibuja en el navegador y no se pide a un servicio de afuera:
     mandarle a un tercero a donde cobra Diego es darle un dato que no
     necesita para nada.

     Si no hay un enlace de cobro armado, se usa el alias: la aplicacion de
     Mercado Pago lo reconoce al escanearlo y llega igual a la pantalla de
     transferir. Es peor que el enlace —no lleva el monto— pero es mucho
     mejor que no tener QR. */
  useEffect(() => {
    const enlace = datos?.cobro.mercadopago ?? datos?.cobro.alias;

    if (!enlace) {
      setQr(null);

      return;
    }

    let vigente = true;

    QRCode.toDataURL(enlace, { margin: 1, width: 320 })
      .then((url) => {
        if (vigente) setQr(url);
      })
      .catch(() => {
        if (vigente) setQr(null);
      });

    return () => {
      vigente = false;
    };
  }, [datos]);

  if (!abierto) {
    return null;
  }

  const cobro = datos?.cobro;
  const hayDatos = Boolean(cobro?.cbu || cobro?.alias || cobro?.mercadopago);

  return (
    <DeudaFondo
      role="dialog"
      aria-modal="true"
      aria-label="Pagar lo que debés"
      onClick={(evento) => {
        if (evento.target === evento.currentTarget) {
          alCerrar();
        }
      }}
    >
      <DeudaCaja>
        <DeudaCerrar type="button" onClick={alCerrar} aria-label="Cerrar">
          <X size={18} aria-hidden="true" />
        </DeudaCerrar>

        <DeudaTitulo>
          <Wallet size={20} aria-hidden="true" />
          Pagar deuda
        </DeudaTitulo>

        <DeudaSubtitulo>
          Es lo que cobraste en efectivo y todavía no transferiste.
        </DeudaSubtitulo>

        <DeudaCuerpo>
          {cargando ? (
            <DeudaVacio>
              <Loader2 size={18} aria-hidden="true" />
              Buscando tu saldo…
            </DeudaVacio>
          ) : (
            <>
              <DeudaMonto data-debe={(datos?.deuda ?? 0) > 0}>
                <span>{formatMoney(datos?.deuda ?? 0)}</span>
                <small>
                  {(datos?.deuda ?? 0) > 0
                    ? 'Es lo que tenés que transferir.'
                    : 'Estás al día. No debés nada.'}
                </small>
              </DeudaMonto>

              {hayDatos ? (
                <>
                  {cobro?.alias ? (
                    <DeudaDato>
                      <DeudaDatoTexto>
                        <DeudaDatoTitulo>Alias</DeudaDatoTitulo>
                        <strong>{cobro.alias}</strong>
                      </DeudaDatoTexto>

                      <DeudaCopiar
                        type="button"
                        onClick={() => void copiar('alias', cobro.alias ?? '')}
                        aria-label="Copiar el alias"
                      >
                        {copiado === 'alias' ? (
                          <Check size={16} aria-hidden="true" />
                        ) : (
                          <Copy size={16} aria-hidden="true" />
                        )}
                      </DeudaCopiar>
                    </DeudaDato>
                  ) : null}

                  {cobro?.cbu ? (
                    <DeudaDato>
                      <DeudaDatoTexto>
                        <DeudaDatoTitulo>CBU</DeudaDatoTitulo>
                        <strong>{cobro.cbu}</strong>
                      </DeudaDatoTexto>

                      <DeudaCopiar
                        type="button"
                        onClick={() => void copiar('cbu', cobro.cbu ?? '')}
                        aria-label="Copiar el CBU"
                      >
                        {copiado === 'cbu' ? (
                          <Check size={16} aria-hidden="true" />
                        ) : (
                          <Copy size={16} aria-hidden="true" />
                        )}
                      </DeudaCopiar>
                    </DeudaDato>
                  ) : null}

                  <DeudaTitular>
                    A nombre de <strong>{cobro?.titular}</strong>
                  </DeudaTitular>

                  {qr ? (
                    <DeudaBloque>
                      <DeudaQrTitulo>Mercado Pago</DeudaQrTitulo>
                      <DeudaQr src={qr} alt="Código QR para pagar por Mercado Pago" />
                      <DeudaQrTitular>{cobro?.titular}</DeudaQrTitular>
                    </DeudaBloque>
                  ) : null}

                  <DeudaNota>
                    Después de transferir, avisale a la administración para que
                    quede saldado.
                  </DeudaNota>
                </>
              ) : (
                <DeudaVacio>
                  Todavía no están cargados los datos para transferir. Pedíselos a
                  la administración.
                </DeudaVacio>
              )}
            </>
          )}
        </DeudaCuerpo>
      </DeudaCaja>
    </DeudaFondo>
  );
}
