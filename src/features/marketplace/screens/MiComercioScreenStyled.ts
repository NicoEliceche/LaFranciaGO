import styled from 'styled-components';
import { Link } from 'react-router-dom';


// ── Panel del comercio ──

export const ComercioCabecera = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  min-width: 0;
`;

export const ComercioNombre = styled.strong`
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  letter-spacing: -0.02em;
`;

export const ComercioDatos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem ${({ theme }) => theme.spacing[2]};
  margin-top: 0.15rem;
`;

/** Los datos se separan con un punto, salvo el primero. */
export const ComercioDato = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};

  & + &::before {
    content: '·';
    margin-right: ${({ theme }) => theme.spacing[2]};
  }
`;

export const NuevoProductoBoton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 2.75rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px dashed ${({ theme }) => theme.color.borderStrong};
  background: transparent;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
  }
`;

export const ProductoFila = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};

  /* En un teléfono, el nombre y los chips no entran en la misma línea: el
     nombre se partía en dos y quedaba ilegible. Se apilan, con los chips
     debajo y alineados a la izquierda: estirados a todo el ancho parecen
     barras y no etiquetas. */
  @media (max-width: 30rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

/** Los chips de estado, juntos: en móvil quedan en su propia línea. */
export const ChipsFila = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;
  flex: 0 0 auto;
`;

export const ProductoInfo = styled.div`
  min-width: 0;
`;

export const ProductoNombre = styled.strong`
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

/**
 * El título de una sección del panel, con su ícono a la derecha.
 *
 * El ícono va después del texto y no antes: lo primero que se lee es de qué
 * se trata la sección, y el dibujo acompaña. Empujado al margen derecho
 * queda alineado con los de las otras secciones, que es lo que lo hace ver
 * ordenado cuando hay varias tarjetas seguidas.
 */
export const SeccionTitulo = styled.strong`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};

  > svg {
    margin-left: auto;
    flex: 0 0 auto;
    color: ${({ theme }) => theme.color.textSoft};
  }
`;

export const ProductoPrecio = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const ProductoAcciones = styled.div`
  display: flex;
  flex: 0 0 auto;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const ProductoBotonIcono = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  cursor: pointer;
  transition: color 180ms ease, border-color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};
  }

  /* Borrar se distingue en rojo sólo al pasar por encima: en reposo compite
     menos con editar, que es la acción habitual. */
  &[data-tono='danger']:hover {
    color: ${({ theme }) => theme.color.danger};
    border-color: ${({ theme }) => theme.color.danger};
  }
`;

// ── Secciones del panel ──

/**
 * El acceso al sistema de gestión.
 *
 * Va con el color de acento y no como una pestaña más porque no es una
 * sección de esta pantalla: lleva a otro lado. Tratarlo igual que las demás
 * haría que se busque el panel entre las pestañas y no se encuentre.
 */
export const EntradaGestion = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  transition: background 0.15s ease;

  span {
    display: grid;
    gap: 0.15rem;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.color.textMuted};
  }

  strong {
    font-size: 0.98rem;
    color: ${({ theme }) => theme.color.text};
  }

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.color.primary};
  }

  &:hover {
    background: ${({ theme }) => theme.color.surfaceMuted};
  }
`;

export const SeccionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const SeccionChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  min-height: 2.5rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textMuted};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  cursor: pointer;
  transition: border-color 180ms ease, color 180ms ease;

  &[data-active='true'] {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

/** Mensajes sin leer: el número tiene que verse sin buscar. */
export const SeccionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.3rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.danger};
  color: #ffffff;
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const EstadoChip = styled.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;

  &[data-estado='proceso'],
  &[data-estado='en_camino'],
  &[data-estado='asignado'] {
    color: ${({ theme }) => theme.color.primary};
  }

  &[data-estado='terminado'],
  &[data-estado='entregado'] {
    color: ${({ theme }) => theme.color.success};
  }

  &[data-estado='cancelado'] {
    color: ${({ theme }) => theme.color.danger};
  }
`;

/** El mapa necesita alto explícito: sin esto Leaflet no dibuja nada. */
export const MapaCaja = styled.div`
  /* Encerrado en su propia capa: Leaflet apila lo suyo con z-index de hasta
     1000 y sin esto se dibuja por delante del encabezado al scrollear. */
  position: relative;
  isolation: isolate;
  z-index: 0;
  height: 18rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 24rem;
  }
`;

// ── Ofertas del comercio ──

export const OfertaCabecera = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: 0.35rem;

  > strong {
    flex: 1 1 auto;
    min-width: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.sm};
    overflow-wrap: anywhere;
  }
`;

export const OfertaTipoChip = styled.span`
  flex: 0 0 auto;
  padding: 0.15rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  white-space: nowrap;

  /* Una oferta apagada se ve apagada: si no, el comercio cree que está
     publicada y no entiende por qué nadie la usa. */
  &[data-apagada='true'] {
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.textMuted};
  }
`;

export const OfertaSello = styled.span`
  flex: 0 0 auto;
  padding: 0.15rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const OfertaPrecios = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;

  > s {
    color: ${({ theme }) => theme.color.textMuted};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }

  > strong {
    color: ${({ theme }) => theme.color.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.base};
  }
`;

export const OfertaDetalle = styled.p`
  margin: 0.2rem 0 0;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.4;
  overflow-wrap: anywhere;
`;

// ── Métricas ──

export const MetricaGrilla = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const MetricaCaja = styled.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
`;

export const MetricaEtiqueta = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const MetricaValor = styled.strong`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xl};
  line-height: 1.1;
`;

/**
 * La variación contra el período anterior.
 *
 * Verde si subió, rojo si bajó, gris si no hay con qué comparar. Un número
 * sin referencia no dice si el negocio va bien: dice cuánto vendió.
 */
export const MetricaVariacion = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  &[data-tono='sube'] {
    color: ${({ theme }) => theme.color.success};
  }

  &[data-tono='baja'] {
    color: ${({ theme }) => theme.color.danger};
  }
`;

export const RankingFila = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  font-size: ${({ theme }) => theme.typography.size.sm};

  &:last-child {
    border-bottom: 0;
  }

  > span:first-child {
    flex: 1 1 auto;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  > small {
    flex: 0 0 auto;
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

// ── Preparación del pedido ──

/**
 * En qué punto está el pedido dentro del comercio.
 *
 * Se distingue del estado general: un pedido puede estar "en proceso" y a la
 * vez ya listo para retirar.
 */
export const PreparacionChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  flex: 0 0 auto;
  padding: 0.15rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  white-space: nowrap;
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textSoft};

  &[data-estado='preparando'] {
    background: rgba(217, 119, 6, 0.16);
    color: ${({ theme }) => theme.color.warning};
  }

  &[data-estado='listo'] {
    background: rgba(52, 211, 153, 0.16);
    color: ${({ theme }) => theme.color.success};
  }
`;

/**
 * El botón que avanza la preparación.
 *
 * Dice qué va a pasar al tocarlo, en la voz del comercio: "Empecé a
 * prepararlo" y no "marcar como en preparación".
 */
export const PrepararBoton = styled.button`
  width: 100%;
  min-height: 2.5rem;
  margin-top: ${({ theme }) => theme.spacing[2]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.brandHover};
  }

  /* Marcarlo listo es el paso que libera al repartidor: se distingue. */
  &[data-final='true'] {
    background: ${({ theme }) => theme.color.success};
  }

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`;

// ── Datos y horarios ──

export const CampoFila = styled.label`
  display: grid;
  gap: 0.25rem;
  margin-bottom: ${({ theme }) => theme.spacing[3]};

  > span {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  > input,
  > textarea {
    width: 100%;
    min-height: 2.75rem;
    padding: 0 ${({ theme }) => theme.spacing[3]};
    border-radius: ${({ theme }) => theme.radius.lg};
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  > textarea {
    min-height: 5rem;
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
    resize: vertical;
  }
`;

/**
 * Un día de la semana con sus tramos.
 *
 * Un comercio que cierra al mediodía tiene dos tramos el mismo día, y eso no
 * entra en un solo par de horarios.
 */
export const DiaFila = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  &:last-child { border-bottom: 0; }

  > strong {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
`;

export const TramoFila = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;

  > input[type='time'] {
    min-height: 2.25rem;
    padding: 0 ${({ theme }) => theme.spacing[2]};
    border-radius: ${({ theme }) => theme.radius.md};
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  > span {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const TramoBoton = styled.button`
  min-height: 2.25rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px dashed ${({ theme }) => theme.color.border};
  background: transparent;
  color: ${({ theme }) => theme.color.textSoft};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
  }

  &[data-tono='danger']:hover {
    border-color: ${({ theme }) => theme.color.danger};
    color: ${({ theme }) => theme.color.danger};
  }
`;

/** El stock de un producto, editable en la misma fila. */
export const StockCampo = styled.input`
  width: 4.5rem;
  min-height: 2rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.size.xs};
  text-align: center;
`;

/**
 * Cómo está el stock, de un vistazo.
 *
 * "Pocas" avisa antes de quedarse sin: el cliente decide si compra ahora, y
 * el comercio se entera de que tiene que reponer.
 */
export const StockChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.1rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 0.68rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  white-space: nowrap;
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textSoft};

  &[data-estado='poco'] {
    background: rgba(217, 119, 6, 0.16);
    color: ${({ theme }) => theme.color.warning};
  }

  &[data-estado='agotado'] {
    background: rgba(220, 38, 38, 0.14);
    color: ${({ theme }) => theme.color.danger};
  }
`;
