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
  ArrowLeft,
  ArrowLeftRight,
  BadgePercent,
  BarChart3,
  Boxes,
  ClipboardList,
  Menu,
  MessagesSquare,
  Monitor,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Receipt,
  ScanBarcode,
  Store,
  FileText,
  HandCoins,
  Sun,
  Truck,
  Users,
  Wallet,
  X,
} from 'lucide-react';

import { useThemeMode } from '@core/theme/ThemeProvider';

import { disponible } from '../entorno';
import { AvisoActualizacion } from './AvisoActualizacion';
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
  PieLateral,
  VolverALaApp,
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
      { id: 'fiado', nombre: 'Fiado', icono: HandCoins, ruta: '/gestion/fiado' },
    ],
  },
  {
    titulo: 'Lo que entra y sale',
    entradas: [
      { id: 'ventas', nombre: 'Ventas', icono: Receipt, ruta: '/gestion/ventas' },
      { id: 'presupuestos', nombre: 'Presupuestos', icono: FileText, ruta: '/gestion/presupuestos' },
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
      { id: 'clientes', nombre: 'Clientes', icono: Users, ruta: '/gestion/clientes' },
      { id: 'chats', nombre: 'Chats', icono: MessagesSquare, ruta: '/gestion/chats' },
    ],
  },
  {
    titulo: 'Para mirar',
    entradas: [{ id: 'informes', nombre: 'Informes', icono: BarChart3, ruta: '/gestion/informes' }],
  },
  {
    titulo: 'Esta computadora',
    entradas: [
      { id: 'mostrador', nombre: 'Este mostrador', icono: Monitor, ruta: '/gestion/mostrador' },
    ],
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
  const { isDarkMode, toggleMode } = useThemeMode();
  const [cajonAbierto, setCajonAbierto] = useState(false);

  /* Si el lateral está plegado, en escritorio. Se recuerda entre pantallas
     porque es una preferencia de cómo trabajar, no de dónde se está: quien
     lo plegó para ver más columnas no quiere volver a plegarlo en cada
     sección. */
  const [plegado, setPlegado] = useState(() => {
    try {
      return window.localStorage.getItem('gestion:lateral') === 'plegado';
    } catch {
      /* Navegador sin almacenamiento (ventana privada): se abre entero, que
         es lo que espera quien entra por primera vez. */
      return false;
    }
  });

  const alternarPlegado = () => {
    setPlegado((antes) => {
      const ahora = !antes;

      try {
        window.localStorage.setItem('gestion:lateral', ahora ? 'plegado' : 'abierto');
      } catch {
        /* Que no se recuerde no es motivo para no plegarlo ahora. */
      }

      return ahora;
    });
  };

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

  /* El menú se dibuja dos veces —al costado en escritorio, en el cajón en el
     teléfono— y en el cajón nunca va plegado: ahí el espacio no es el
     problema, y un menú de íconos sueltos no se entiende. */
  const dibujarMenu = (comprimido: boolean) => (
    <>
      {GRUPOS.map((grupo) => (
        <GrupoLateral key={grupo.titulo}>
          <h3>{grupo.titulo}</h3>

          {grupo.entradas.map((entrada) => {
            const Icono = entrada.icono;
            /* Se compara exacto y no por prefijo. Con `startsWith`, "Caja"
               (/gestion/caja) se pintaba también estando en "Caja rápida"
               (/gestion/caja-rapida), porque una ruta empieza con la otra.
               Todas las secciones son hermanas, ninguna cuelga de otra. */
            const activo = pathname === entrada.ruta;
            const sePuede = !entrada.funcion || disponible(entrada.funcion);

            return (
              <ItemLateral
                key={entrada.id}
                type="button"
                data-activo={activo ? 'si' : 'no'}
                data-comprimido={comprimido ? 'si' : 'no'}
                onClick={() => navegar(entrada.ruta)}
                /* Plegado, el nombre sólo está en el globo: sin esto queda una
                   columna de íconos que hay que adivinar. */
                title={
                  sePuede
                    ? comprimido
                      ? entrada.nombre
                      : undefined
                    : 'Funciona en la computadora del negocio'
                }
              >
                <Icono size={17} aria-hidden="true" />
                <span>{entrada.nombre}</span>

                {entrada.id === 'chats' && sinLeer > 0 ? <Contador>{sinLeer}</Contador> : null}
              </ItemLateral>
            );
          })}
        </GrupoLateral>
      ))}

      <PieLateral>
        {/* La salida hacia la aplicación. Se entra al sistema desde el menú
            dorado, pero no había por dónde volver: el comercio quedaba
            adentro y tenía que usar el botón del navegador, que en el
            teléfono instalado no existe. */}
        <VolverALaApp
          type="button"
          data-comprimido={comprimido ? 'si' : 'no'}
          onClick={() => navegar('/panel/comercio')}
          title={comprimido ? 'Volver a la app' : undefined}
        >
          <ArrowLeft size={17} aria-hidden="true" />
          <span>Volver a la app</span>
        </VolverALaApp>

        <ItemLateral
          type="button"
          data-activo="no"
          data-comprimido={comprimido ? 'si' : 'no'}
          onClick={toggleMode}
          title={comprimido ? (isDarkMode ? 'Modo día' : 'Modo noche') : undefined}
        >
          {isDarkMode ? (
            <Sun size={17} aria-hidden="true" />
          ) : (
            <Moon size={17} aria-hidden="true" />
          )}
          <span>{isDarkMode ? 'Modo día' : 'Modo noche'}</span>
        </ItemLateral>

        {/* Plegar es sólo de escritorio: en el teléfono el menú ya se cierra
            entero al elegir algo. */}
        <ItemLateral
          type="button"
          data-activo="no"
          data-comprimido={comprimido ? 'si' : 'no'}
          data-solo-escritorio="si"
          onClick={alternarPlegado}
          title={comprimido ? 'Ampliar el menú' : undefined}
        >
          {comprimido ? (
            <PanelLeftOpen size={17} aria-hidden="true" />
          ) : (
            <PanelLeftClose size={17} aria-hidden="true" />
          )}
          <span>Plegar el menú</span>
        </ItemLateral>
      </PieLateral>
    </>
  );

  return (
    <Marco data-plegado={plegado ? 'si' : 'no'}>
      <Lateral aria-label="Secciones de la gestión" data-plegado={plegado ? 'si' : 'no'}>
        {dibujarMenu(plegado)}
      </Lateral>

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

        <Contenido>
          <AvisoActualizacion />
          {children}
        </Contenido>
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
            {dibujarMenu(false)}
          </Cajon>
        </>
      ) : null}
    </Marco>
  );
}
