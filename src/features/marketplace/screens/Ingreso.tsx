import { useSearchParams } from 'react-router-dom';

import { AuthScreen } from './AuthScreen';
import { IngresarScreen } from './IngresarScreen';

/**
 * Qué se muestra en /ingresar.
 *
 * El ingreso va a pantalla completa, sin menú ni encabezado: lo único que hay
 * para hacer ahí es entrar. El registro sigue dentro del marco de siempre,
 * porque es un formulario más largo y quien lo completa ya decidió quedarse.
 *
 * Se resuelve en un componente y no con dos rutas para no cambiar la
 * dirección: hay enlaces a `/ingresar?modo=registro` repartidos por la app y
 * en los correos que ya se mandaron.
 */
export function Ingreso() {
  const [parametros] = useSearchParams();

  return parametros.get('modo') === 'registro' ? <AuthScreen /> : <IngresarScreen />;
}
