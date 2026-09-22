import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, LogOut, Repeat2 } from 'lucide-react';

import { olvidarPlan } from '../planGestionStore';
import { olvidarInvitado } from './PortadaOIngreso';
import { useSesion } from '../sessionStore';
import {
  CuentaBloque,
  CuentaEntrar,
  CuentaEtiqueta,
  CuentaSalir,
  CuentaSelect,
} from './CuentaSidebarStyled';

/**
 * Cambiar de cuenta y cerrar sesión, al pie del menú lateral.
 *
 * Una misma persona puede ser comercio y cliente. Quien carga una oferta
 * quiere verla como la ve un vecino —si se entiende, si el precio se lee
 * bien— y hoy eso obligaba a salir y volver a entrar. Cambiar de rol es la
 * misma sesión mirando desde otro lado.
 *
 * Va al final del menú y no arriba: es algo que se usa de vez en cuando, no
 * en cada visita, y arriba le sacaría lugar a la navegación.
 */

const NOMBRES: Record<string, string> = {
  cliente: 'Cliente',
  comercio: 'Comercio',
  delivery: 'Delivery',
  fletero: 'Flete',
  admin: 'Administración',
};

/* A dónde lleva cada rol al cambiar. El cliente va a la portada; los demás,
   a su panel, que es lo que fueron a buscar. */
const DESTINOS: Record<string, string> = {
  cliente: '/',
  comercio: '/panel/comercio',
  delivery: '/panel/repartidor',
  fletero: '/panel/repartidor',
  admin: '/admin/postulaciones',
};

type Props = {
  /** Cierra el cajón en móvil: al cambiar de rol la pantalla ya cambió. */
  onNavegar?: () => void;
};

export function CuentaSidebar({ onNavegar }: Props) {
  const { usuario, conectado, cambiarRol, salir } = useSesion();
  const navigate = useNavigate();
  const [cambiando, setCambiando] = useState(false);

  /* Sin sesión el bloque no desaparece: ofrece entrar. Antes se escondía
     entero y el menú quedaba sin ninguna forma de iniciar sesión, salvo
     saber que el acceso está en el ícono de arriba a la derecha. */
  if (!conectado || !usuario) {
    return (
      <CuentaBloque>
        <CuentaEntrar to="/ingresar" onClick={() => onNavegar?.()}>
          <LogIn size={16} aria-hidden="true" />
          Iniciar sesión
        </CuentaEntrar>
      </CuentaBloque>
    );
  }

  const roles = usuario.roles ?? ['cliente'];

  const alCambiar = async (rol: string) => {
    if (rol === usuario.rol || cambiando) {
      return;
    }

    setCambiando(true);

    try {
      await cambiarRol(rol);
      onNavegar?.();
      navigate(DESTINOS[rol] ?? '/');
    } finally {
      setCambiando(false);
    }
  };

  const alSalir = async () => {
    await salir();

    /* Se olvida que habia elegido mirar sin cuenta: si no, al cerrar sesion
       volveria al marketplace como invitado en vez de al ingreso. */
    olvidarInvitado();
    olvidarPlan();
    onNavegar?.();
    navigate('/ingresar', { replace: true });
  };

  return (
    <CuentaBloque>
      {/* El desplegable aparece sólo si hay a dónde cambiar: con un solo rol
          sería un menú de una opción. */}
      {roles.length > 1 ? (
        <>
          <CuentaEtiqueta htmlFor="cambiar-cuenta">
            <Repeat2 size={14} aria-hidden="true" />
            Cambiar de cuenta
          </CuentaEtiqueta>
          <CuentaSelect
            id="cambiar-cuenta"
            value={usuario.rol}
            disabled={cambiando}
            onChange={(evento) => void alCambiar(evento.target.value)}
          >
            {roles.map((rol) => (
              <option key={rol} value={rol}>
                {NOMBRES[rol] ?? rol}
              </option>
            ))}
          </CuentaSelect>
        </>
      ) : null}

      <CuentaSalir type="button" onClick={() => void alSalir()}>
        <LogOut size={16} aria-hidden="true" />
        Cerrar sesión
      </CuentaSalir>
    </CuentaBloque>
  );
}
