import { type FormEvent, useEffect, useRef, useState } from 'react';
import { Camera, Mic, PackageSearch, Send, Square, Trash2 } from 'lucide-react';

import { processImage } from '@core/data/services/mediaService';
import { useAudioRecorder } from '@shared/hooks/useAudioRecorder';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { useErrand } from '../errandStore';
import { Section, SectionInner } from '../ui';
import {
  ChatAudio,
  ChatBubble,
  ChatComposer,
  ChatComposerInput,
  ChatDescription,
  ChatFeed,
  ChatIconButton,
  ChatMeta,
  ChatPhoto,
  ChatRow,
  ChatSendButton,
  ChatStatusBar,
  ChatStatusDot,
  ChatStatusText,
  CourierAvatar,
  CourierCard,
  CourierMeta,
  CourierName,
  RecordingBar,
  RecordingTime,
  SearchingCard,
  SearchingPulse,
} from './ErrandChatScreenStyled';

export function ErrandChatScreen() {
  const { errand, send } = useErrand();
  const [text, setText] = useState('');
  const feedRef = useRef<HTMLDivElement | null>(null);
  const recorder = useAudioRecorder();

  /* El feed sigue el último mensaje. */
  useEffect(() => {
    const feed = feedRef.current;

    if (feed) {
      feed.scrollTop = feed.scrollHeight;
    }
  }, [errand?.messages.length]);

  if (!errand) {
    return (
      <MarketplaceFrame showSearch={false}>
        <Section>
          <SectionInner>
            <EmptyState
              icon={PackageSearch}
              title="No tenés mandados activos"
              text="Generá uno y te conectamos con un repartidor cercano."
              ctaLabel="Pedir un mandado"
              ctaTo="/mandado"
            />
          </SectionInner>
        </Section>
      </MarketplaceFrame>
    );
  }

  const isSearching = errand.status === 'buscando';

  const handleSend = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = text.trim();

    if (!value) {
      return;
    }

    send({ author: 'cliente', kind: 'texto', text: value });
    setText('');
  };

  const handlePhoto = async (files: FileList | null) => {
    const file = files?.[0];

    if (!file) {
      return;
    }

    try {
      /* Se comprime igual que las fotos de producto: la del chat viaja liviana. */
      const image = await processImage(file);
      send({ author: 'cliente', kind: 'foto', mediaUrl: image.previewUrl });
    } catch {
      send({ author: 'cliente', kind: 'texto', text: 'No pude enviar la foto.' });
    }
  };

  const toggleRecording = async () => {
    if (recorder.recording) {
      const audio = await recorder.stop();

      if (audio) {
        send({
          author: 'cliente',
          kind: 'audio',
          mediaUrl: audio.url,
          durationSec: audio.seconds,
        });
      }

      return;
    }

    await recorder.start();
  };

  return (
    <MarketplaceFrame showSearch={false}>
      <Section>
        <SectionInner>
          <ChatStatusBar>
            <ChatStatusDot data-status={errand.status} />
            <ChatStatusText>
              {isSearching
                ? `Buscando repartidor en ${errand.radiusKm} km...`
                : `Mandado ${errand.code} · en curso`}
            </ChatStatusText>
          </ChatStatusBar>

          <ChatDescription>{errand.description}</ChatDescription>

          {isSearching ? (
            <SearchingCard>
              <SearchingPulse aria-hidden="true" />
              Avisamos a los repartidores cercanos. El primero que lo tome se queda con el pedido.
            </SearchingCard>
          ) : errand.courier ? (
            <CourierCard>
              <CourierAvatar>{errand.courier.name.charAt(0)}</CourierAvatar>
              <div>
                <CourierName>{errand.courier.name}</CourierName>
                <CourierMeta>
                  {errand.courier.vehicle} · {errand.courier.rating.toFixed(1)} ★ · a{' '}
                  {errand.courier.distanceKm.toFixed(1)} km
                </CourierMeta>
              </div>
            </CourierCard>
          ) : null}

          <ChatFeed ref={feedRef} aria-label="Mensajes del mandado">
            {errand.messages.map((message) => (
              <ChatRow key={message.id} data-mine={message.author === 'cliente'}>
                <ChatBubble data-mine={message.author === 'cliente'}>
                  {message.kind === 'texto' ? message.text : null}

                  {message.kind === 'foto' && message.mediaUrl ? (
                    <ChatPhoto src={message.mediaUrl} alt="Foto enviada en el chat" />
                  ) : null}

                  {message.kind === 'audio' && message.mediaUrl ? (
                    <ChatAudio src={message.mediaUrl} controls preload="metadata" />
                  ) : null}

                  <ChatMeta>{message.time}</ChatMeta>
                </ChatBubble>
              </ChatRow>
            ))}
          </ChatFeed>

          {recorder.recording ? (
            <RecordingBar>
              <ChatIconButton
                type="button"
                onClick={recorder.cancel}
                aria-label="Descartar audio"
                data-tone="danger"
              >
                <Trash2 size={18} aria-hidden="true" />
              </ChatIconButton>

              <RecordingTime>Grabando… {recorder.seconds}s</RecordingTime>

              <ChatSendButton type="button" onClick={toggleRecording} aria-label="Enviar audio">
                <Square size={16} aria-hidden="true" />
              </ChatSendButton>
            </RecordingBar>
          ) : (
            <ChatComposer as="form" onSubmit={handleSend}>
              <ChatIconButton as="label" aria-label="Enviar una foto">
                <Camera size={18} aria-hidden="true" />
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  hidden
                  onChange={(event) => {
                    void handlePhoto(event.target.files);
                    event.target.value = '';
                  }}
                />
              </ChatIconButton>

              {recorder.supported ? (
                <ChatIconButton
                  type="button"
                  onClick={toggleRecording}
                  aria-label="Grabar un audio"
                >
                  <Mic size={18} aria-hidden="true" />
                </ChatIconButton>
              ) : null}

              <ChatComposerInput
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder={isSearching ? 'Esperando repartidor…' : 'Escribí un mensaje'}
                aria-label="Mensaje"
              />

              <ChatSendButton type="submit" aria-label="Enviar mensaje" disabled={!text.trim()}>
                <Send size={16} aria-hidden="true" />
              </ChatSendButton>
            </ChatComposer>
          )}

          {recorder.error ? <ChatMeta role="alert">{recorder.error}</ChatMeta> : null}
        </SectionInner>
      </Section>
    </MarketplaceFrame>
  );
}
