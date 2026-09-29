/**
 * El ingreso, a pantalla completa.
 *
 * Sin menú, sin encabezado y sin pie: lo único que hay para hacer acá es
 * entrar, y todo lo demás compite con eso. Antes el ingreso vivía dentro del
 * marco del marketplace, así que un comercio entraba como cliente y después
 * tenía que darse cuenta de que existe "Cambiar de cuenta".
 *
 * No hay que elegir el tipo de cuenta. El backend sabe qué roles tiene cada
 * persona, así que preguntarlo sería pedir un dato que ya tenemos, con la
 * posibilidad de que se equivoque y reciba un error que no entiende. Después
 * de entrar, la aplicación lleva a cada uno a donde le sirve.
 */
import { type FormEvent, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { authApi, hayBackend } from '@core/data/services/apiClient';
import { GoogleIcon } from '@shared/components/icons/GoogleIcon';

import { recordarInvitado } from '../components/PortadaOIngreso';
import { ingresarConGoogle, useSesion } from '../sessionStore';
import {
  Aviso,
  Campo,
  CampoEtiqueta,
  CampoIcono,
  CampoMarco,
  CampoOlvide,
  Divisor,
  Encabezado,
  Entrar,
  Fondo,
  Formulario,
  Google,
  Haz,
  Marca,
  MarcaIcono,
  Nota,
  Panel,
  Pantalla,
  Pie,
  Reja,
  Seguridad,
  Titulo,
  Volanta,
} from './IngresarScreenStyled';

const iconoMarca = `${import.meta.env.BASE_URL}favicon.png`;

/**
 * A dónde va cada rol después de entrar, en orden de prioridad.
 *
 * Quien tiene comercio y además reparte entra a su comercio, que es lo que
 * hace todos los días. Desde ahí puede cambiar con un toque.
 */
const DESTINOS: Array<[rol: string, panel: string]> = [
  ['admin', '/panel/admin/postulaciones'],
  ['comercio', '/panel/comercio'],
  ['delivery', '/panel/repartidor'],
  ['fletero', '/panel/repartidor'],
];

/**
 * Desde qué rol entra una cuenta y a qué panel va, o la portada si sólo
 * compra.
 *
 * Se miran los roles disponibles y no el activo: el login devuelve "cliente"
 * hasta que se cambia a mano, así que fijarse en él mandaría al comercio a la
 * portada, que es justamente lo que este rediseño vino a resolver.
 *
 * Devuelve el rol junto con el panel y no sólo el panel, porque delivery y
 * flete comparten pantalla: buscar el rol a partir del destino daba siempre
 * "delivery", y al fletero se le pedía entrar con un rol que no tiene.
 */
function ingresoDe(roles: string[] | undefined) {
  const suyos = roles ?? [];
  const encontrado = DESTINOS.find(([rol]) => suyos.includes(rol));

  return { rol: encontrado?.[0], panel: encontrado?.[1] ?? '/' };
}

/**
 * Los comienzos de cada panel, para saber de quien es una direccion.
 *
 * No alcanza con la lista de arriba: un panel tiene muchas pantallas colgando
 * —/panel/admin/registro, /panel/comercio/productos— y todas son del mismo
 * rol.
 */
const PANELES: Array<[rol: string, prefijo: string]> = [
  ['admin', '/panel/admin'],
  ['comercio', '/panel/comercio'],
  ['delivery', '/panel/repartidor'],
  ['fletero', '/panel/repartidor'],
];

/**
 * Si la cuenta que acaba de entrar puede abrir esa direccion.
 *
 * Al cerrar sesion desde un panel, el guardia de ruta manda a /ingresar
 * anotando de donde venia. Eso esta bien cuando la misma persona vuelve a
 * entrar —sigue donde estaba— pero estaba mandando a la cuenta *siguiente* a
 * la pantalla de la anterior: se salia de admin, entraba un comercio, y
 * aterrizaba en el panel de administracion.
 *
 * Asi que el destino guardado se respeta solo si le corresponde a quien
 * entro. Si es de otro rol se descarta y cada uno arranca en su propio
 * inicio, que es lo que se espera de un login.
 */
function puedeAbrir(destino: string, roles: string[] | undefined) {
  const suyos = roles ?? [];
  const duenos = PANELES.filter(([, prefijo]) => destino.startsWith(prefijo));

  /* Una pantalla que no es de ningun panel —el carrito, un pedido— la puede
     abrir cualquiera que haya entrado. */
  if (duenos.length === 0) {
    return true;
  }

  return duenos.some(([rol]) => suyos.includes(rol));
}

export function IngresarScreen() {
  const [parametros] = useSearchParams();
  const navegar = useNavigate();
  const { cambiarRol, entrar } = useSesion();

  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  /* A dónde volver después de entrar. Lo pone RutaPrivada cuando alguien
     quiso abrir algo que pedía sesión: así el carrito a medio armar o el
     pedido que estaba mirando siguen donde estaban. */
  const destinoPedido = parametros.get('destino');

  const enviar = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (enviando) return;

    const datos = new FormData(evento.currentTarget);

    setError(null);
    setEnviando(true);

    try {
      const usuario = await entrar(
        String(datos.get('email') ?? '').trim(),
        String(datos.get('password') ?? ''),
      );

      /* El login devuelve la cuenta pero no con qué roles puede entrar: eso
         lo arma /auth/yo. Sin preguntarlo, un comercio aterrizaría en la
         portada como cliente, que es lo que este rediseño vino a evitar. */
      const completo = usuario?.roles ? usuario : await authApi.yo().catch(() => usuario);
      const { rol, panel } = ingresoDe(completo?.roles);

      /* Además de llevarlo al panel hay que pararse en ese rol: la sesión
         arranca siempre como cliente, y el menú y las pantallas miran el rol
         activo. Sin esto el comercio llega a su panel pero con el menú del
         vecino, y quien reparte ve las categorías y los favoritos. */
      if (rol && completo?.rol !== rol) {
        try {
          await cambiarRol(rol);
        } catch {
          /* Si no se pudo cambiar, igual entra: lo hace desde el menú. */
        }
      }

      /* Si venía de algún lado, vuelve ahí —el carrito a medio armar o el
         pedido que estaba mirando siguen donde estaban— siempre que esa
         pantalla sea de esta cuenta. Si no, va a su propio inicio. */
      const volverA =
        destinoPedido && puedeAbrir(destinoPedido, completo?.roles) ? destinoPedido : panel;

      navegar(volverA, { replace: true });
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos entrar.');
      setEnviando(false);
    }
  };

  const conGoogle = async () => {
    setError(null);

    try {
      await ingresarConGoogle();
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos entrar con Google.');
    }
  };

  return (
    <Pantalla>
      {/* Decoración: no se lee ni se toca, así que se esconde del lector de
          pantalla en lugar de hacerle anunciar tres divs vacíos. */}
      <Fondo aria-hidden="true" />
      <Reja aria-hidden="true" />
      <Haz aria-hidden="true" />

      <Panel aria-labelledby="titulo-ingreso">
        <Encabezado>
          <Marca>
            <MarcaIcono>
              <img src={iconoMarca} alt="" aria-hidden="true" />
            </MarcaIcono>

            <Volanta>Acceso seguro</Volanta>
            <Titulo id="titulo-ingreso">Bienvenido a LaFranciaGO</Titulo>
          </Marca>

          <Nota>Ingresá tus credenciales para continuar.</Nota>
        </Encabezado>

        <Formulario onSubmit={enviar} noValidate>
          {error ? <Aviso role="alert">{error}</Aviso> : null}

          <Campo>
            <CampoEtiqueta htmlFor="email">Email</CampoEtiqueta>
            <CampoMarco>
              <CampoIcono aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 6.75h16v10.5H4V6.75Z" stroke="currentColor" strokeWidth="1.7" />
                  <path
                    d="m5 8 7 5 7-5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </CampoIcono>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="username"
                placeholder="tu@email.com"
                required
              />
            </CampoMarco>
          </Campo>

          {/* "¿La olvidaste?" va después del campo en el HTML aunque se vea
              arriba, porque el orden del documento es el que sigue el
              tabulador: antes, al salir del email con Tab, el foco caía en el
              enlace y había que tocar Tab otra vez para escribir la
              contraseña. La grilla lo devuelve a su lugar visual. */}
          <Campo>
            <CampoEtiqueta htmlFor="password">Contraseña</CampoEtiqueta>

            <CampoMarco>
              <CampoIcono aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="5"
                    y="10"
                    width="14"
                    height="10"
                    rx="2.3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M8 10V7.5a4 4 0 0 1 8 0V10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path d="M12 14v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </CampoIcono>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Ingresá tu contraseña"
                required
              />
            </CampoMarco>

            <CampoOlvide to="/recuperar">¿La olvidaste?</CampoOlvide>
          </Campo>

          <Entrar type="submit" disabled={enviando}>
            <span>{enviando ? 'Entrando…' : 'Ingresar'}</span>
            {enviando ? null : (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="m14 7 5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Entrar>

          <Divisor aria-hidden="true">o</Divisor>

          <Google type="button" onClick={() => void conGoogle()} disabled={!hayBackend()}>
            <GoogleIcon size={18} />
            Continuar con Google
          </Google>

          <Pie>
            ¿Todavía no tenés cuenta? <Link to="/ingresar?modo=registro">Crear una cuenta</Link>
          </Pie>

          {/* Mirar el pueblo no pide cuenta: el vecino que entra por
              curiosidad se va si lo primero que ve es un formulario sin
              salida. La cuenta se pide al confirmar el pedido, cuando ya
              sabe qué está comprando. */}
          <Pie>
            <Link to="/" onClick={recordarInvitado}>
              Mirar sin cuenta
            </Link>
          </Pie>
        </Formulario>

        <Seguridad>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 3 5 6v5c0 4.6 2.8 8.5 7 10 4.2-1.5 7-5.4 7-10V6l-7-3Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="m9.5 12 1.7 1.7 3.6-3.8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Conexión segura · Tus datos están protegidos</span>
        </Seguridad>
      </Panel>
    </Pantalla>
  );
}
