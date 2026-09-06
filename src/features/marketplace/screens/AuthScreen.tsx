import { type FormEvent, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LogIn, Mail, ShieldCheck, UserRound } from 'lucide-react';

import { GoogleIcon } from '@shared/components/icons/GoogleIcon';
import { hayBackend } from '@core/data/services/apiClient';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { PanelLoginDialog } from '../components/PanelLoginDialog';
import { PanelLoginEnlace } from '../components/PanelLoginDialogStyled';
import { ingresarConGoogle, useSesion } from '../sessionStore';
import { Card, CardPad, CardText, CardTitle, SectionInner } from '../ui';
import { CompactSection } from './screenLayout';
import {
  FieldGroup,
  FieldHint,
  FieldInput,
  FieldLabel,
  FieldStack,
} from './formStyles';
import {
  AuthAviso,
  AuthCambio,
  AuthCambioBoton,
  AuthEnviar,
  AuthGoogleBoton,
  AuthSeparador,
  AuthShell,
} from './AuthScreenStyled';

type Modo = 'entrar' | 'registro';

/**
 * Ingreso y registro.
 *
 * El acceso con Google va primero porque es el camino corto: un toque contra
 * cuatro campos. Quien prefiera email lo tiene igual de disponible abajo.
 */
export function AuthScreen() {
  const [searchParams] = useSearchParams();
  const [modo, setModo] = useState<Modo>(
    searchParams.get('modo') === 'registro' ? 'registro' : 'entrar',
  );
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [panelAbierto, setPanelAbierto] = useState(false);

  const { entrar, registrar } = useSesion();
  const navigate = useNavigate();

  /* A dónde volver al terminar: se respeta de dónde vino el usuario. */
  const destino = searchParams.get('destino') || '/mi-cuenta';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enviando) {
      return;
    }

    const datos = new FormData(event.currentTarget);
    const email = String(datos.get('email') ?? '').trim();
    const password = String(datos.get('password') ?? '');

    setError(null);
    setEnviando(true);

    try {
      if (modo === 'registro') {
        await registrar({
          email,
          password,
          nombre: String(datos.get('nombre') ?? '').trim(),
        });
      } else {
        await entrar(email, password);
      }

      navigate(destino, { replace: true });
    } catch (fallo) {
      /* El backend explica el motivo (clave débil, cuenta bloqueada); si no
         llegó respuesta, se avisa de forma genérica. */
      setError(fallo instanceof Error ? fallo.message : 'No pudimos completar el ingreso.');
    } finally {
      setEnviando(false);
    }
  };

  const handleGoogle = async () => {
    setError(null);

    try {
      await ingresarConGoogle();
      navigate(destino, { replace: true });
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos entrar con Google.');
    }
  };

  const esRegistro = modo === 'registro';

  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <AuthShell>
            <Card>
              <CardPad>
                <FieldStack>
                  <div>
                    <CardTitle>{esRegistro ? 'Creá tu cuenta' : 'Entrá a tu cuenta'}</CardTitle>
                    <CardText>
                      {esRegistro
                        ? 'Para guardar tus direcciones y seguir tus pedidos.'
                        : 'Con tu cuenta ves tus pedidos y direcciones guardadas.'}
                    </CardText>
                  </div>

                  {!hayBackend() ? (
                    <AuthAviso role="status" data-tono="aviso">
                      La app está funcionando con datos de ejemplo. Para crear cuentas hace
                      falta conectar el servidor.
                    </AuthAviso>
                  ) : null}

                  <AuthGoogleBoton type="button" onClick={handleGoogle} disabled={!hayBackend()}>
                    <GoogleIcon size={18} />
                    Continuar con Google
                  </AuthGoogleBoton>

                  <AuthSeparador>
                    <span>o con tu email</span>
                  </AuthSeparador>

                  <form onSubmit={handleSubmit}>
                    <FieldStack>
                      {esRegistro ? (
                        <FieldGroup htmlFor="auth-nombre">
                          <FieldLabel>
                            <UserRound size={16} aria-hidden="true" />
                            Nombre
                          </FieldLabel>
                          <FieldInput
                            id="auth-nombre"
                            name="nombre"
                            type="text"
                            autoComplete="name"
                            placeholder="Cómo te llamás"
                            required
                          />
                        </FieldGroup>
                      ) : null}

                      <FieldGroup htmlFor="auth-email">
                        <FieldLabel>
                          <Mail size={16} aria-hidden="true" />
                          Email
                        </FieldLabel>
                        <FieldInput
                          id="auth-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="vos@email.com"
                          required
                        />
                      </FieldGroup>

                      <FieldGroup htmlFor="auth-password">
                        <FieldLabel>
                          <ShieldCheck size={16} aria-hidden="true" />
                          Contraseña
                        </FieldLabel>
                        <FieldInput
                          id="auth-password"
                          name="password"
                          type="password"
                          /* Le dice al gestor de contraseñas si guardar una
                             nueva o completar la que ya tiene. */
                          autoComplete={esRegistro ? 'new-password' : 'current-password'}
                          placeholder={esRegistro ? 'Al menos 8 caracteres' : 'Tu contraseña'}
                          minLength={8}
                          required
                        />
                        {esRegistro ? (
                          <FieldHint>
                            Mejor una frase larga que sepas de memoria, y que no incluya tu
                            nombre ni tu email.
                          </FieldHint>
                        ) : null}
                      </FieldGroup>

                      {error ? (
                        <AuthAviso role="alert" data-tono="error">
                          {error}
                        </AuthAviso>
                      ) : null}

                      <AuthEnviar type="submit" disabled={enviando || !hayBackend()}>
                        <LogIn size={18} aria-hidden="true" />
                        {enviando
                          ? 'Un momento…'
                          : esRegistro
                            ? 'Crear cuenta'
                            : 'Entrar'}
                      </AuthEnviar>
                    </FieldStack>
                  </form>

                  <PanelLoginEnlace type="button" onClick={() => setPanelAbierto(true)}>
                    Ingresar como Comercio / Delivery / Flete
                  </PanelLoginEnlace>

                  <AuthCambio>
                    {esRegistro ? '¿Ya tenés cuenta?' : '¿Todavía no tenés cuenta?'}
                    <AuthCambioBoton
                      type="button"
                      onClick={() => {
                        setModo(esRegistro ? 'entrar' : 'registro');
                        setError(null);
                      }}
                    >
                      {esRegistro ? 'Entrar' : 'Crear una'}
                    </AuthCambioBoton>
                  </AuthCambio>
                </FieldStack>
              </CardPad>
            </Card>
          </AuthShell>
        </SectionInner>
      </CompactSection>

      <PanelLoginDialog open={panelAbierto} onClose={() => setPanelAbierto(false)} />
    </MarketplaceFrame>
  );
}
