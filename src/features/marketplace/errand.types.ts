/** Estado del mandado, desde que se publica hasta que se entrega. */
export type ErrandStatus = 'buscando' | 'tomado' | 'en-curso' | 'entregado' | 'cancelado';

/** Autor de un mensaje del chat. */
export type ChatAuthor = 'cliente' | 'repartidor';

/** Tipo de contenido que viaja en el chat. */
export type ChatMessageKind = 'texto' | 'foto' | 'audio';

export interface ChatMessage {
  id: string;
  author: ChatAuthor;
  kind: ChatMessageKind;
  /** Cuerpo del mensaje de texto. */
  text?: string;
  /** URL local (blob) o remota de la foto o el audio. */
  mediaUrl?: string;
  /** Duración en segundos, sólo para audio. */
  durationSec?: number;
  time: string;
}

export interface ErrandCourier {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  distanceKm: number;
}

export interface Errand {
  id: string;
  code: string;
  description: string;
  status: ErrandStatus;
  createdAt: string;
  /** Radio de publicación, en kilómetros. */
  radiusKm: number;
  address: string;
  courier?: ErrandCourier;
  messages: ChatMessage[];
}
