import { type FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Mail, ShieldCheck, X } from 'lucide-react';

import { useSesion } from '../sessionStore';
import { CardText, CardTitle } from '../ui';
import {
  FieldGroup,
  FieldHint,
  FieldInput,
  FieldLabel,
  FieldSelect,
  FieldStack,
} from '../screens/formStyles';
import {
  AuthAviso,
  AuthEnviar,
} from '../screens/AuthScreenStyled';
import {
  PanelDialogCard,
  PanelDialogCerrar,
  PanelDialogHeader,
  PanelDialogOverlay,
} from './PanelLoginDialogStyled';

/**
 * Ingreso para quienes operan la app: comercios, repartidores y fleteros.
 *
 * El tipo de cuenta que se elige acá NO otorga permisos: el backend comprueba
 * contra la base que la cuenta sea realmente de ese tipo. Sirve para saber a
 * qué panel llevar a la persona, y para que el mensaje de error sea claro
 * cuando alguien se equivoca de opción.
 */

const CLAVE_ROL = 'lafranciago:tipo-cuenta';

const TIPOS = [
  { id: 'comercio', nombre: 'Comercio', panel: '/panel/comercio' },
  { id: 'delivery', nombre: 'Delivery', panel: '/panel/repartidor' },
  { id: 'fletero', nombre: 'Fletero', panel: '/panel/repartidor' },
] as const;

type TipoId = (typeof TIPOS)[number]['id'];

/** Recuerda el último tipo usado: casi nadie cambia de rol entre sesiones. */
const leerTipoGuardado = (): TipoId => {
  try {
    const guardado = window.localStorage.getItem(CLAVE_ROL);

    return TIPOS.some((tipo) => tipo.id === guardado) ? (guardado as TipoId) : 'comercio';
  } catch {
    /* Modo privado o almacenamiento bloqueado: se usa el primero. */
    return 'comercio';
  }
};

export function PanelLoginDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [tipo, setTipo] = useState<TipoId>('comercio');
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const { entrarAlPanel } = useSesion();
  const navigate = useNavigate();

  /* Se lee al abrir y no al montar: si el usuario entró con otro rol en otra
     pestaña, al reabrir el modal ve el último que usó. */
  useEffect(() => {
    if (open) {
      setTipo(leerTipoGuardado());
      setError(null);
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const alPresionar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', alPresionar);

    return () => document.removeEventListener('keydown', alPresionar);
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  const handleSubmit = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (enviando) {
      return;
    }

    const datos = new FormData(evento.currentTarget);

    setError(null);
    setEnviando(true);

    try {
      await entrarAlPanel(
        String(datos.get('email') ?? '').trim(),
        String(datos.get('password') ?? ''),
        tipo,
      );

      try {
        window.localStorage.setItem(CLAVE_ROL, tipo);
      } catch {
        /* Si no se puede guardar, la próxima vez se elige de nuevo. */
      }

      navigate(TIPOS.find((item) => item.id === tipo)!.panel, { replace: true });
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos ingresar.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <PanelDialogOverlay onClick={onClose} role="presentation">
      <PanelDialogCard
        role="dialog"
        aria-modal="true"
        aria-label="Ingresar como comercio, delivery o flete"
        onClick={(evento) => evento.stopPropagation()}
      >
        <PanelDialogHeader>
          <div>
            <CardTitle>Ingresar para trabajar</CardTitle>
            <CardText>Con la cuenta que te dimos al aprobar tu alta.</CardText>
          </div>
          <PanelDialogCerrar type="button" onClick={onClose} aria-label="Cerrar">
            <X size={18} aria-hidden="true" />
          </PanelDialogCerrar>
        </PanelDialogHeader>

        <form onSubmit={handleSubmit}>
          <FieldStack>
            <FieldGroup htmlFor="panel-tipo">
              <FieldLabel>
                <Briefcase size={16} aria-hidden="true" />
                Tipo de cuenta
              </FieldLabel>
              <FieldSelect
                id="panel-tipo"
                value={tipo}
                onChange={(evento) => setTipo(evento.target.value as TipoId)}
              >
                {TIPOS.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nombre}
                  </option>
                ))}
              </FieldSelect>
              <FieldHint>Se recuerda para la próxima vez.</FieldHint>
            </FieldGroup>

            <FieldGroup htmlFor="panel-email">
              <FieldLabel>
                <Mail size={16} aria-hidden="true" />
                Email
              </FieldLabel>
              <FieldInput
                id="panel-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="tucomercio@email.com"
                required
              />
            </FieldGroup>

            <FieldGroup htmlFor="panel-password">
              <FieldLabel>
                <ShieldCheck size={16} aria-hidden="true" />
                Contraseña
              </FieldLabel>
              <FieldInput
                id="panel-password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Tu contraseña"
                required
              />
            </FieldGroup>

            {error ? (
              <AuthAviso role="alert" data-tono="error">
                {error}
              </AuthAviso>
            ) : null}

            <AuthEnviar type="submit" disabled={enviando}>
              {enviando ? 'Un momento…' : 'Entrar al panel'}
            </AuthEnviar>
          </FieldStack>
        </form>
      </PanelDialogCard>
    </PanelDialogOverlay>
  );
}
