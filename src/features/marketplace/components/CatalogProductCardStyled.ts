import styled from 'styled-components';

// ── Producto del catálogo ──

export const CatalogCardShell = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  overflow: hidden;
  transition: border-color 200ms ease, box-shadow 200ms ease;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.32);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const CatalogCardBody = styled.div`
  display: grid;
  /* La fila del precio se estira y empuja el botón al fondo. Sin esto, dos
     tarjetas vecinas terminan con el botón a distinta altura apenas una parte
     el nombre en dos líneas y la otra no, y la grilla se ve despareja. */
  grid-template-rows: auto 1fr auto auto;
  gap: 0.15rem;
  /* La grilla estira las tarjetas a la altura de la más alta; el cuerpo tiene
     que ocupar lo que le toca para que el fondo sea el fondo de verdad. */
  flex: 1;
  min-height: 0;
  padding: ${({ theme }) => theme.spacing[2]};
`;

export const CatalogCardName = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.25;
  color: ${({ theme }) => theme.color.text};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CatalogCardPriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-top: ${({ theme }) => theme.spacing[1]};
  /* Sin esto el precio empuja al selector fuera de la tarjeta en vez de
     achicarse: una columna de 168px con un texto de "1 kg + 1/4" al lado no
     entra, y lo que se salía era el borde. */
  min-width: 0;
`;

/**
 * El precio y su aclaración, uno debajo del otro.
 *
 * Iban en la misma línea y el "el kg" cortaba solo cuando no entraba, con lo
 * que la altura de la tarjeta dependía de si el texto había cortado o no: dos
 * productos vecinos quedaban con el precio a distinta altura. Puestos en
 * columna a propósito, siempre ocupan lo mismo y sobra ancho para el
 * selector, que es de donde salía el problema.
 */
export const CatalogCardPriceBlock = styled.div`
  display: grid;
  gap: 0;
  min-width: 0;
`;

export const CatalogCardPrice = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.primary};
  /* El precio es lo único que no puede partirse en dos renglones. */
  white-space: nowrap;
`;

export const CatalogCardTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

/**
 * El selector de cantidad, en vertical.
 *
 * Estaba en fila —menos, cantidad, más— y funcionaba mientras la cantidad
 * decía "1/4". Pero las etiquetas de peso llegan a "1 kg + 1/4": en una
 * columna de 168px eso empujaba el precio afuera de la tarjeta.
 *
 * Con los botones arriba y abajo, el texto se queda con todo el ancho del
 * selector en lugar de pelearlo contra dos círculos, y deja de crecer hacia
 * los costados por más largo que sea. La altura que suma es la misma que ya
 * ocupaba el bloque del precio al lado, así que la tarjeta no crece.
 */
export const CatalogStepper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 0.05rem;
  flex: 0 0 auto;
  /* Un piso para que no se angoste con "1/4" y un techo para que "1 docena
     + 1/2" no lo estire al doble que el de la tarjeta de al lado: la grilla
     se ve despareja aunque cada uno entre en la suya. */
  min-width: 3.1rem;
  max-width: 4.6rem;
  padding: 0.2rem 0.3rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.primarySoft};
`;

export const CatalogStepperButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 1.75rem;
  height: 1.4rem;

  /* El botón se ve chato, pero el área que responde al dedo sigue llegando a
     los 44px que pide el sistema de diseño. Se extiende hacia afuera del
     selector —arriba el de menos, abajo el de más— donde no hay nada más
     que tocar, así que no le roba el toque a ningún vecino. */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 44px;
    height: 44px;
    transform: translate(-50%, -50%);
  }
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.onPrimary};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.textSoft};
    cursor: not-allowed;
  }
`;

export const CatalogStepperValue = styled.span`
  /* Entre los dos botones, con el ancho del selector entero para él. Ya no
     pelea contra los círculos por el espacio, que es lo que lo hacía
     superponerse. */
  padding: 0.05rem 0.1rem;
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: 0.7rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.2;
  color: ${({ theme }) => theme.color.primary};
  /* Las etiquetas más largas ("1 docena + 1/2") no entran en el techo de
     arriba. Se parten en dos renglones dentro del selector, que para eso
     está en vertical, en vez de empujar el ancho. */
  overflow-wrap: anywhere;
`;

export const CatalogAddToCartButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  width: 100%;
  min-height: 2.25rem;
  /* Alineado abajo de todo: la fila de arriba se estira y lo empuja acá, así
     dos tarjetas vecinas tienen el botón a la misma altura aunque una tenga
     el nombre en dos líneas y la otra en una. */
  align-self: end;
  margin-top: ${({ theme }) => theme.spacing[2]};
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.01em;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.color.brandHover};
  }

  /* Confirmación breve al sumar al pedido. */
  &[data-added='true'] {
    background: ${({ theme }) => theme.color.success};
  }
`;

export const CatalogInCartHint = styled.span`
  display: block;
  margin-top: 0.3rem;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  text-align: center;
`;

/**
 * Aclara a qué corresponde el precio cuando no se vende por unidad.
 *
 * Va debajo del precio y bien pegado: así no compite por el ancho con el
 * selector, que es lo que rompía la tarjeta, y el par se lee como una sola
 * cosa en lugar de dos.
 */
export const CatalogCardPriceUnit = styled.span`
  display: block;
  margin-top: -0.1rem;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
