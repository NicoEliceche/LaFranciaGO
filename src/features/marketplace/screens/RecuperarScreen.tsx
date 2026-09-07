import { type FormEvent, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, KeyRound, Mail } from 'lucide-react';

import { ApiError, authApi, hayBackend } from '@core/data/services/apiClient';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { Card, CardPad, CardText, CardTitle, SectionInner } from '../ui';
import { CompactSection } from './screenLayout';
import { FieldGroup, FieldInput, FieldLabel, FieldStack } from './formStyles';
import { AuthAviso, AuthCambio, AuthEnviar, AuthShell } from './AuthScreenStyled';

/**
 * Recuperar la contraseña.
 *
 * La misma pantalla sirve para los dos momentos: sin token en la dirección
 * se pide el enlace por correo; con token, se elige la contraseña nueva. Son
 * dos mitades del mismo trámite, y separarlas en dos rutas obligaría a
 * repetir la explicación en las dos.
 */

export function RecuperarScreen() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);

  const pedirEnlace = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (enviando) {
      return;
    }

    const email = String(new FormData(evento.currentTarget).get('email') ?? '').trim();

    setEnviando(true);
    setError(null);

    try {
      const { mensaje } = await authApi.recuperar(email);

      setAviso(mensaje);
    } catch {
      setError('No pudimos procesar el pedido. Probá de nuevo en un rato.');
    } finally {
      setEnviando(false);
    }
  };

  const cambiarPassword = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (enviando || !token) {
      return;
    }

    const datos = new FormData(evento.currentTarget);
    const password = String(datos.get('password') ?? '');
    const repetida = String(datos.get('repetida') ?? '');

    /* Se comprueba acá antes de mandar: es un error que el servidor no puede
       detectar, porque las dos llegan como una sola. */
    if (password !== repetida) {
      setError('Las dos contraseñas tienen que ser iguales.');

      return;
    }

    setEnviando(true);
    setError(null);

    try {
      await authApi.confirmarRecuperacion(token, password);

      /* Se va al login y no adentro de la app: cambiar la contraseña cierra
         todas las sesiones, así que hay que entrar de nuevo con la nueva. */
      navigate('/ingresar', { replace: true });
    } catch (fallo) {
      setError(
        fallo instanceof ApiError
          ? fallo.message
          : 'No pudimos cambiar la contraseña. Probá de nuevo.',
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <AuthShell>
            <Card>
              <CardPad>
                <FieldStack>
                  <div>
                    <CardTitle>
                      {token ? 'Elegí una contraseña nueva' : 'Recuperá tu contraseña'}
                    </CardTitle>
                    <CardText>
                      {token
                        ? 'Al guardarla vas a entrar de nuevo con la contraseña nueva.'
                        : 'Te mandamos un enlace al correo con el que te registraste.'}
                    </CardText>
                  </div>

                  {error ? (
                    <AuthAviso role="alert" data-tono="error">
                      {error}
                    </AuthAviso>
                  ) : null}

                  {aviso ? <AuthAviso role="status">{aviso}</AuthAviso> : null}

                  {!hayBackend() ? (
                    <AuthAviso role="status">
                      Esta versión no tiene servidor configurado.
                    </AuthAviso>
                  ) : token ? (
                    <form onSubmit={cambiarPassword}>
                      <FieldStack>
                        <FieldGroup>
                          <FieldLabel>
                            <KeyRound size={16} aria-hidden="true" />
                            Contraseña nueva
                          </FieldLabel>
                          <FieldInput
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            placeholder="Al menos 8 caracteres"
                            required
                          />
                        </FieldGroup>

                        <FieldGroup>
                          <FieldLabel>
                            <KeyRound size={16} aria-hidden="true" />
                            Repetila
                          </FieldLabel>
                          <FieldInput
                            name="repetida"
                            type="password"
                            autoComplete="new-password"
                            placeholder="La misma otra vez"
                            required
                          />
                        </FieldGroup>

                        <AuthEnviar type="submit" disabled={enviando}>
                          {enviando ? 'Guardando…' : 'Guardar contraseña'}
                        </AuthEnviar>
                      </FieldStack>
                    </form>
                  ) : (
                    /* Con el aviso mostrado no se repite el formulario: quien
                       ya pidió el enlace tiene que ir al correo, no volver a
                       pedirlo. */
                    !aviso && (
                      <form onSubmit={pedirEnlace}>
                        <FieldStack>
                          <FieldGroup>
                            <FieldLabel>
                              <Mail size={16} aria-hidden="true" />
                              Email
                            </FieldLabel>
                            <FieldInput
                              name="email"
                              type="email"
                              autoComplete="email"
                              placeholder="vos@email.com"
                              required
                            />
                          </FieldGroup>

                          <AuthEnviar type="submit" disabled={enviando}>
                            {enviando ? 'Enviando…' : 'Enviar el enlace'}
                          </AuthEnviar>
                        </FieldStack>
                      </form>
                    )
                  )}

                  <AuthCambio>
                    <Link to="/ingresar">
                      <ArrowLeft size={14} aria-hidden="true" />
                      Volver al ingreso
                    </Link>
                  </AuthCambio>
                </FieldStack>
              </CardPad>
            </Card>
          </AuthShell>
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
