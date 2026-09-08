import { useEffect, useState } from 'react';
import { Star, X } from 'lucide-react';

import { resenasApi } from '@core/data/services/apiClient';

import { CardTitle } from '../ui';
import {
  PanelDialogCard,
  PanelDialogCerrar,
  PanelDialogHeader,
  PanelDialogOverlay,
} from './PanelLoginDialogStyled';
import { ExtraAcciones, ExtraBoton } from './ChatPedidoDialogStyled';
import { AuthAviso } from '../screens/AuthScreenStyled';
import {
  EstrellaBoton,
  EstrellasFila,
  ResenaBloque,
  ResenaComentario,
  ResenaLeyenda,
} from './ResenaDialogStyled';

/**
 * Puntuar un pedido ya entregado.
 *
 * El puntaje del comercio es lo único obligatorio: es lo que ve el próximo
 * vecino cuando elige dónde comprar. El del repartidor va aparte porque son
 * dos trabajos distintos —el negocio puede estar impecable y la entrega
 * llegar tarde— y mezclarlos en una nota no le sirve a ninguno de los dos.
 */

const LEYENDAS = ['', 'Muy malo', 'Malo', 'Está bien', 'Muy bueno', 'Excelente'];

type Props = {
  open: boolean;
  pedidoId: string;
  comercio: string;
  /** Sólo se pregunta si hubo alguien llevándolo. */
  repartidor?: string | null;
  onCerrar: () => void;
  onListo: () => void;
};

/** Las cinco estrellas de una nota. */
function Estrellas({
  valor,
  onElegir,
  etiqueta,
}: {
  valor: number;
  onElegir: (nota: number) => void;
  etiqueta: string;
}) {
  return (
    <EstrellasFila role="radiogroup" aria-label={etiqueta}>
      {[1, 2, 3, 4, 5].map((nota) => (
        <EstrellaBoton
          key={nota}
          type="button"
          role="radio"
          aria-checked={valor === nota}
          aria-label={`${nota} ${nota === 1 ? 'estrella' : 'estrellas'}`}
          data-encendida={nota <= valor}
          onClick={() => onElegir(nota)}
        >
          <Star size={26} fill={nota <= valor ? 'currentColor' : 'none'} aria-hidden="true" />
        </EstrellaBoton>
      ))}
    </EstrellasFila>
  );
}

export function ResenaDialog({
  open,
  pedidoId,
  comercio,
  repartidor,
  onCerrar,
  onListo,
}: Props) {
  const [puntajeComercio, setPuntajeComercio] = useState(0);
  const [puntajeRepartidor, setPuntajeRepartidor] = useState(0);
  const [comentario, setComentario] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* Al abrir arranca en blanco: si quedó lo de la vez anterior, alguien
     manda sin querer la nota de otro pedido. */
  useEffect(() => {
    if (open) {
      setPuntajeComercio(0);
      setPuntajeRepartidor(0);
      setComentario('');
      setError(null);
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const alPresionar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        onCerrar();
      }
    };

    document.addEventListener('keydown', alPresionar);

    return () => document.removeEventListener('keydown', alPresionar);
  }, [onCerrar, open]);

  if (!open) {
    return null;
  }

  const enviar = async () => {
    if (puntajeComercio === 0 || enviando) {
      return;
    }

    setEnviando(true);
    setError(null);

    try {
      await resenasApi.puntuar(pedidoId, {
        comercio: puntajeComercio,
        /* Cero significa "no la puso", no "le puso cero". */
        repartidor: puntajeRepartidor > 0 ? puntajeRepartidor : undefined,
        comentario: comentario.trim() || undefined,
      });

      onListo();
      onCerrar();
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos guardar tu puntaje.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <PanelDialogOverlay role="dialog" aria-modal="true" aria-label="Puntuar el pedido">
      <PanelDialogCard>
        <PanelDialogHeader>
          <CardTitle>¿Cómo te fue?</CardTitle>
          <PanelDialogCerrar type="button" onClick={onCerrar} aria-label="Cerrar">
            <X size={18} aria-hidden="true" />
          </PanelDialogCerrar>
        </PanelDialogHeader>

        {error ? (
          <AuthAviso role="alert" data-tono="error">
            {error}
          </AuthAviso>
        ) : null}

        <ResenaBloque>
          <span>{comercio}</span>
          <Estrellas
            valor={puntajeComercio}
            onElegir={setPuntajeComercio}
            etiqueta={`Puntaje para ${comercio}`}
          />
          <ResenaLeyenda>{LEYENDAS[puntajeComercio]}</ResenaLeyenda>
        </ResenaBloque>

        {repartidor ? (
          <ResenaBloque>
            <span>{repartidor}, que te lo llevó</span>
            <Estrellas
              valor={puntajeRepartidor}
              onElegir={setPuntajeRepartidor}
              etiqueta={`Puntaje para ${repartidor}`}
            />
            <ResenaLeyenda>
              {puntajeRepartidor > 0 ? LEYENDAS[puntajeRepartidor] : 'Si querés, puntualo también.'}
            </ResenaLeyenda>
          </ResenaBloque>
        ) : null}

        <ResenaBloque>
          <span>¿Querés contar algo más?</span>
          <ResenaComentario
            value={comentario}
            maxLength={400}
            placeholder="Lo que quieras que sepan los demás."
            onChange={(evento) => setComentario(evento.target.value)}
          />
        </ResenaBloque>

        <ExtraAcciones>
          <ExtraBoton type="button" data-tono="suave" onClick={onCerrar} disabled={enviando}>
            Ahora no
          </ExtraBoton>
          <ExtraBoton
            type="button"
            onClick={() => void enviar()}
            disabled={puntajeComercio === 0 || enviando}
          >
            {enviando ? 'Enviando…' : 'Enviar puntaje'}
          </ExtraBoton>
        </ExtraAcciones>
      </PanelDialogCard>
    </PanelDialogOverlay>
  );
}
