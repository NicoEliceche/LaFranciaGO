import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Grabación de audio para el chat.
 *
 * Usa MediaRecorder, que necesita permiso de micrófono y contexto seguro
 * (HTTPS o localhost). Si el navegador no lo soporta, `supported` queda en
 * false y la UI esconde el botón en lugar de fallar.
 *
 * El audio se guarda en el formato nativo del navegador (webm/opus en Chrome,
 * mp4/aac en Safari): comprimido de origen, ~1 KB por segundo de voz.
 */

/** Tope de duración para que un audio no se vaya de peso. */
export const MAX_AUDIO_SECONDS = 60;

type RecorderState = {
  recording: boolean;
  seconds: number;
  error: string | null;
};

const pickMimeType = () => {
  if (typeof MediaRecorder === 'undefined') {
    return '';
  }

  const candidates = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4'];

  return candidates.find((type) => MediaRecorder.isTypeSupported(type)) ?? '';
};

export function useAudioRecorder() {
  const [state, setState] = useState<RecorderState>({
    recording: false,
    seconds: 0,
    error: null,
  });

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const tickRef = useRef<number | null>(null);
  const resolveRef = useRef<((value: { url: string; seconds: number } | null) => void) | null>(
    null,
  );

  const supported =
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices?.getUserMedia &&
    typeof MediaRecorder !== 'undefined';

  const cleanup = useCallback(() => {
    if (tickRef.current !== null) {
      window.clearInterval(tickRef.current);
      tickRef.current = null;
    }

    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    recorderRef.current = null;
  }, []);

  useEffect(() => cleanup, [cleanup]);

  const start = useCallback(async () => {
    if (!supported) {
      setState((current) => ({ ...current, error: 'Tu navegador no permite grabar audio.' }));
      return false;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = pickMimeType();
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);

      chunksRef.current = [];
      streamRef.current = stream;
      recorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mimeType || 'audio/webm' });
        const seconds = state.seconds;

        resolveRef.current?.(
          blob.size > 0 ? { url: URL.createObjectURL(blob), seconds } : null,
        );
        resolveRef.current = null;
        cleanup();
      };

      recorder.start();
      setState({ recording: true, seconds: 0, error: null });

      tickRef.current = window.setInterval(() => {
        setState((current) => {
          const seconds = current.seconds + 1;

          /* Corte automático para no generar audios enormes. */
          if (seconds >= MAX_AUDIO_SECONDS) {
            recorderRef.current?.stop();
          }

          return { ...current, seconds };
        });
      }, 1000);

      return true;
    } catch {
      setState((current) => ({
        ...current,
        error: 'No pudimos usar el micrófono. Revisá los permisos.',
      }));
      return false;
    }
  }, [cleanup, state.seconds, supported]);

  /** Detiene y devuelve el audio grabado. */
  const stop = useCallback(
    () =>
      new Promise<{ url: string; seconds: number } | null>((resolve) => {
        const recorder = recorderRef.current;

        if (!recorder || recorder.state === 'inactive') {
          resolve(null);
          cleanup();
          setState({ recording: false, seconds: 0, error: null });
          return;
        }

        resolveRef.current = (value) => {
          setState({ recording: false, seconds: 0, error: null });
          resolve(value);
        };

        recorder.stop();
      }),
    [cleanup],
  );

  const cancel = useCallback(() => {
    const recorder = recorderRef.current;

    resolveRef.current = null;

    if (recorder && recorder.state !== 'inactive') {
      recorder.stop();
    }

    cleanup();
    setState({ recording: false, seconds: 0, error: null });
  }, [cleanup]);

  return { ...state, supported, start, stop, cancel };
}
