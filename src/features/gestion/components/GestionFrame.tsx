/**
 * El marco del sistema de gestión.
 *
 * Es el mismo en el navegador, en la computadora del negocio y en el
 * teléfono: los datos salen del mismo lado. Lo único que cambia es que las
 * funciones que necesitan la lectora o la impresora quedan atenuadas cuando
 * no se está en el mostrador.
 */
import { type ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeftRight,
  BadgePercent,
  BarChart3,
  Boxes,
  ClipboardList,
  Menu,
  MessagesSquare,
  Receipt,
  ScanBarcode,
  Store,
  Truck,
  Users,
  Wallet,
  X,
} from 'lucide-react';

import { disponible } from '../entorno';
import {
  BarraSuperior,
  BotonMenu,
  Cajon,
  Contador,
  Contenido,
  Cuerpo,
  Fondo,
  GrupoLateral,
  ItemLateral,
  Lateral,
  Marco,
} from './GestionFrameStyled';

interface Entrada {
  id: string;
  nombre: string;
  icono: typeof Store;
  ruta: string;
  /** Nombre en REQUISITOS, si depende del mostrador. */
  funcion?: string;
}

interface Grupo {
  titulo: string;
  entradas: Entrada[];
}

/* El menú sigue el recorrido de un día de trabajo: primero lo que entra,
   después lo que sale, después con quién, y al final lo que se mira. */
export const GRUPOS: Grupo[] = [
  {
    titulo: 'El mostrador',
    entradas: [
      { id: 'resumen', nombre: 'Resumen', icono: Store, ruta: '/gestion' },
      {
        id: 'caja-rapida',
        nombre: 'Caja rápida',
        icono: ScanBarcode,
        ruta: '/gestion/caja-rapida',
        funcion: 'cajaRapida',
      },
      { id: 'caja', nombre: 'Caja', icono: Wallet, ruta: '/gestion/caja' },
    ],
  },
  {
    titulo: 'Lo que entra y sale',
    entradas: [
      { id: 'ventas', nombre: 'Ventas', icono: Receipt, ruta: '/gestion/ventas' },
      { id: 'compras', nombre: 'Compras', icono: ArrowLeftRight, ruta: '/gestion/compras' },
      { id: 'pedidos', nombre: 'Pedidos de la app', icono: ClipboardList, ruta: '/gestion/pedidos' },
      { id: 'envios', nombre: 'Envíos', icono: Truck, ruta: '/gestion/envios' },
    ],
  },
  {
    titulo: 'El negocio',
    entradas: [
      { id: 'productos', nombre: 'Productos', icono: Boxes, ruta: '/gestion/productos' },
      { id: 'ofertas', nombre: 'Ofertas', icono: BadgePercent, ruta: '/gestion/ofertas' },
      { id: 'contactos', nombre: 'Clientes y proveedores', icono: Users, ruta: '/gestion/contactos' },
      { id: 'chats', nombre: 'Chats', icono: MessagesSquare, ruta: '/gestion/chats' },
    ],
  },
  {
    titulo: 'Para mirar',
    entradas: [{ id: 'informes', nombre: 'Informes', icono: BarChart3, ruta: '/gestion/informes' }],
  },
];

interface GestionFrameProps {
  titulo: string;
  children: ReactNode;
  /** Acciones de la pantalla, a la derecha del título. */
  acciones?: ReactNode;
  /** Cuántos mensajes sin leer, para el contador del menú. */
  sinLeer?: number;
}

export function GestionFrame({ titulo, children, acciones, sinLeer = 0 }: GestionFrameProps) {
  const navegar = useNavigate();
  const { pathname } = useLocation();
  const [cajonAbierto, setCajonAbierto] = useState(false);

  /* Al cambiar de pantalla el cajón se cierra solo: si no, queda tapando lo
     que la persona acaba de elegir. */
  useEffect(() => setCajonAbierto(false), [pathname]);

  useEffect(() => {
    if (!cajonAbierto) return;

    const alSalir = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') setCajonAbierto(false);
    };

    window.addEventListener('keydown', alSalir);
    return () => window.removeEventListener('keydown', alSalir);
  }, [cajonAbierto]);

  const menu = (
    <>
      {GRUPOS.map((grupo) => (
        <GrupoLateral key={grupo.titulo}>
          <h3>{grupo.titulo}</h3>

          {grupo.entradas.map((entrada) => {
            const Icono = entrada.icono;
            /* La ruta del resumen es prefijo de todas: se compara exacto. */
            const activo =
              entrada.ruta === '/gestion' ? pathname === '/gestion' : pathname.startsWith(entrada.ruta);
            const sePuede = !entrada.funcion || disponible(entrada.funcion);

            return (
              <ItemLateral
                key={entrada.id}
                type="button"
                data-activo={activo ? 'si' : 'no'}
                onClick={() => navegar(entrada.ruta)}
                title={sePuede ? undefined : 'Funciona en la computadora del negocio'}
              >
                <Icono size={17} aria-hidden="true" />
                <span>{entrada.nombre}</span>

                {entrada.id === 'chats' && sinLeer > 0 ? <Contador>{sinLeer}</Contador> : null}
              </ItemLateral>
            );
          })}
        </GrupoLateral>
      ))}
    </>
  );

  return (
    <Marco>
      <Lateral aria-label="Secciones de la gestión">{menu}</Lateral>

      <Cuerpo>
        <BarraSuperior>
          <BotonMenu
            type="button"
            onClick={() => setCajonAbierto(true)}
            aria-label="Abrir el menú"
          >
            <Menu size={19} aria-hidden="true" />
          </BotonMenu>

          <h1>{titulo}</h1>
          {acciones}
        </BarraSuperior>

        <Contenido>{children}</Contenido>
      </Cuerpo>

      {cajonAbierto ? (
        <>
          <Fondo onClick={() => setCajonAbierto(false)} />
          <Cajon aria-label="Secciones de la gestión">
            <BotonMenu
              type="button"
              onClick={() => setCajonAbierto(false)}
              aria-label="Cerrar el menú"
            >
              <X size={19} aria-hidden="true" />
            </BotonMenu>
            {menu}
          </Cajon>
        </>
      ) : null}
    </Marco>
  );
}
