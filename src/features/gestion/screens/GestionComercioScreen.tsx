/**
 * Las secciones del comercio, adentro del sistema de gestión.
 *
 * Pedidos de la app, envíos, productos, ofertas y chats ya existían en el
 * panel del comercio, y son exactamente los mismos datos. Lo único distinto
 * es el marco: desde la aplicación van con el menú del marketplace y desde el
 * sistema con el suyo.
 *
 * Antes estas entradas del menú apuntaban a rutas que no existían, así que el
 * router mandaba a la portada de LaFranciaGO: el comercio tocaba "Pedidos de
 * la app" estando en el sistema y aparecía afuera, como cliente. Por eso se
 * reusa la pantalla en lugar de escribir otra: dos copias de la misma lista
 * de pedidos se separan solas con el primer cambio, y ahí uno de los dos
 * lados empieza a mentir.
 */
import { MiComercioScreen } from '@features/marketplace/screens/MiComercioScreen';

import { GestionFrame } from '../components/GestionFrame';

/** Cada entrada del menú de gestión con su sección del panel. */
type SeccionComercio = 'pedidos' | 'envios' | 'productos' | 'ofertas' | 'chats';

const TITULOS: Record<SeccionComercio, string> = {
  pedidos: 'Pedidos de la app',
  envios: 'Envíos',
  productos: 'Productos',
  ofertas: 'Ofertas',
  chats: 'Chats',
};

export function GestionComercioScreen({ seccion }: { seccion: SeccionComercio }) {
  return (
    <MiComercioScreen
      seccionInicial={seccion}
      /* Sin pestañas: el menú de la izquierda ya es la navegación. */
      conPestanas={false}
      marco={(contenido) => (
        <GestionFrame titulo={TITULOS[seccion]}>{contenido}</GestionFrame>
      )}
    />
  );
}
