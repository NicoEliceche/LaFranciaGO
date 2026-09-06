import { type FormEvent, useEffect, useMemo, useState } from 'react';
import { ImagePlus, X } from 'lucide-react';

import {
  type NuevaOferta,
  type ProductoApi,
  type TipoOferta,
  mediaApi,
} from '@core/data/services/apiClient';
import { formatMoney } from '@shared/utils/format';
import { useMediaUpload } from '@shared/hooks/useMediaUpload';

import { CardText, CardTitle } from '../ui';
import { AuthAviso, AuthEnviar } from '../screens/AuthScreenStyled';
import {
  PanelDialogCard,
  PanelDialogCerrar,
  PanelDialogHeader,
  PanelDialogOverlay,
} from './PanelLoginDialogStyled';
import {
  OfertaAyuda,
  OfertaCampo,
  OfertaFila,
  PreviaAhorro,
  PreviaCaja,
  PreviaDatos,
  PreviaFoto,
  PreviaPrecios,
  PreviaSello,
  ProductoLista,
  ProductoOpcion,
  UnidadesCombo,
} from './OfertaDialogStyled';

/**
 * Alta de una oferta.
 *
 * Un solo modal para los tres tipos: lo que cambia entre ellos son dos o tres
 * campos, y separarlos en tres formularios obligaría a elegir el tipo antes de
 * saber qué pide cada uno.
 *
 * El precio de lista se calcula acá para la vista previa, pero el que vale es
 * el que devuelve el servidor: si el comercio cambia un precio mientras arma
 * la promoción, manda la base.
 */

type Props = {
  open: boolean;
  productos: ProductoApi[];
  onClose: () => void;
  onGuardar: (datos: NuevaOferta) => Promise<void>;
};

const TIPOS: Array<{ id: TipoOferta; nombre: string; ayuda: string }> = [
  {
    id: 'descuento',
    nombre: '% de descuento',
    ayuda: 'Un producto a un porcentaje menos. El número se muestra sobre la foto.',
  },
  {
    id: 'combo',
    nombre: 'Combo',
    ayuda: 'Varios productos juntos a un precio total menor que la suma.',
  },
  {
    id: 'cantidad',
    nombre: 'Promo por cantidad',
    ayuda: 'Llevando varias unidades del mismo producto, el paquete sale menos.',
  },
];

export function OfertaDialog({ open, productos, onClose, onGuardar }: Props) {
  const [tipo, setTipo] = useState<TipoOferta>('descuento');
  const [elegidos, setElegidos] = useState<Record<string, number>>({});
  const [porcentaje, setPorcentaje] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [titulo, setTitulo] = useState('');
  const [precioFinal, setPrecioFinal] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  const { photos, error: mediaError, processing, addPhotos, removePhoto } = useMediaUpload();

  /* Al abrir se arranca de cero: la oferta anterior ya se publicó. */
  useEffect(() => {
    if (open) {
      setTipo('descuento');
      setTitulo('');
      setElegidos({});
      setPorcentaje('');
      setCantidad('');
      setPrecioFinal('');
      setError(null);
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const alPresionar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', alPresionar);

    return () => document.removeEventListener('keydown', alPresionar);
  }, [onClose, open]);

  const ids = useMemo(() => Object.keys(elegidos), [elegidos]);

  /* Lo que costaría sin la promoción: es contra esto que se compara. */
  const lista = useMemo(() => {
    return ids.reduce((suma, id) => {
      const producto = productos.find((fila) => fila.id === id);

      if (!producto) {
        return suma;
      }

      const unidades =
        tipo === 'cantidad' ? Math.max(0, Number(cantidad) || 0) : elegidos[id];

      return suma + producto.precio * unidades;
    }, 0);
  }, [cantidad, elegidos, ids, productos, tipo]);

  const final = useMemo(() => {
    if (tipo === 'descuento') {
      const pct = Math.min(90, Math.max(0, Number(porcentaje) || 0));

      return Math.round(lista * (100 - pct)) / 100;
    }

    return Number(precioFinal) || 0;
  }, [lista, porcentaje, precioFinal, tipo]);

  if (!open) {
    return null;
  }

  /* Elegir un producto en descuento o cantidad reemplaza al anterior: esos
     tipos son sobre uno solo, y dejar marcar varios prometería algo que el
     servidor después rechaza. */
  const alternar = (id: string, marcado: boolean) => {
    setElegidos((previos) => {
      if (!marcado) {
        const copia = { ...previos };

        delete copia[id];

        return copia;
      }

      return tipo === 'combo' ? { ...previos, [id]: previos[id] ?? 1 } : { [id]: 1 };
    });
  };

  const cambiarTipo = (nuevo: TipoOferta) => {
    setTipo(nuevo);

    /* Pasar a descuento o cantidad con varios marcados dejaría una selección
       inválida: se conserva el primero. */
    setElegidos((previos) => {
      const claves = Object.keys(previos);

      if (nuevo === 'combo' || claves.length <= 1) {
        return previos;
      }

      return { [claves[0]]: 1 };
    });
  };

  const enviar = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (guardando) {
      return;
    }

    const datos = new FormData(evento.currentTarget);
    const nombre = titulo.trim();

    if (!nombre) {
      setError('Poné un título para la oferta.');
      return;
    }

    if (ids.length === 0) {
      setError('Elegí al menos un producto.');
      return;
    }

    if (tipo === 'descuento' && (Number(porcentaje) < 1 || Number(porcentaje) > 90)) {
      setError('El descuento va entre 1 % y 90 %.');
      return;
    }

    if (tipo === 'cantidad' && Number(cantidad) < 2) {
      setError('La promo por cantidad arranca en 2 unidades.');
      return;
    }

    if (tipo !== 'descuento' && (final <= 0 || final > lista)) {
      setError('El precio final tiene que ser menor al de lista.');
      return;
    }

    setError(null);
    setGuardando(true);

    try {
      /* La foto es opcional: sin una propia se usa la del producto. */
      let fotoUrl: string | undefined;

      if (photos[0]) {
        const { url } = await mediaApi.subir(photos[0].blob, 'oferta.webp');

        fotoUrl = url;
      }

      await onGuardar({
        tipo,
        titulo: nombre,
        descripcion: String(datos.get('descripcion') ?? '').trim() || undefined,
        porcentaje: tipo === 'descuento' ? Number(porcentaje) : undefined,
        cantidad: tipo === 'cantidad' ? Number(cantidad) : undefined,
        precioFinal: tipo === 'descuento' ? undefined : final,
        fotoUrl,
        hasta: String(datos.get('hasta') ?? '') || undefined,
        productos: ids.map((id) => ({ productoId: id, unidades: elegidos[id] })),
      });

      onClose();
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos crear la oferta.');
    } finally {
      setGuardando(false);
    }
  };

  const ayuda = TIPOS.find((fila) => fila.id === tipo)?.ayuda ?? '';
  const primero = productos.find((fila) => fila.id === ids[0]) ?? null;
  const fotoPrevia = photos[0]?.previewUrl ?? primero?.fotos?.[0] ?? null;

  return (
    <PanelDialogOverlay onClick={onClose} role="presentation">
      <PanelDialogCard
        role="dialog"
        aria-modal="true"
        aria-label="Nueva oferta"
        onClick={(evento) => evento.stopPropagation()}
      >
        <PanelDialogHeader>
          <div>
            <CardTitle>Nueva oferta</CardTitle>
            <CardText>Se publica al guardarla.</CardText>
          </div>
          <PanelDialogCerrar type="button" onClick={onClose} aria-label="Cerrar">
            <X size={18} aria-hidden="true" />
          </PanelDialogCerrar>
        </PanelDialogHeader>

        {error || mediaError ? (
          <AuthAviso role="alert" data-tono="error">
            {error ?? mediaError}
          </AuthAviso>
        ) : null}

        <form onSubmit={enviar}>
          <OfertaCampo>
            <span>Tipo de oferta</span>
            <select
              value={tipo}
              onChange={(evento) => cambiarTipo(evento.target.value as TipoOferta)}
            >
              {TIPOS.map((fila) => (
                <option key={fila.id} value={fila.id}>
                  {fila.nombre}
                </option>
              ))}
            </select>
          </OfertaCampo>

          <OfertaAyuda>{ayuda}</OfertaAyuda>

          <OfertaCampo>
            <span>Título</span>
            <input
              name="titulo"
              maxLength={80}
              value={titulo}
              onChange={(evento) => setTitulo(evento.target.value)}
              placeholder={tipo === 'combo' ? 'Combo merienda' : 'Pan del día'}
              required
            />
          </OfertaCampo>

          <OfertaCampo>
            <span>
              {tipo === 'combo'
                ? 'Productos del combo'
                : tipo === 'cantidad'
                  ? 'Producto de la promo'
                  : 'Producto en descuento'}
            </span>
          </OfertaCampo>

          {productos.length === 0 ? (
            <OfertaAyuda>Cargá algún producto antes de armar una oferta.</OfertaAyuda>
          ) : (
            <ProductoLista>
              {productos.map((producto) => {
                const marcado = producto.id in elegidos;

                return (
                  <ProductoOpcion key={producto.id} data-elegido={marcado}>
                    <input
                      type={tipo === 'combo' ? 'checkbox' : 'radio'}
                      name="producto"
                      checked={marcado}
                      onChange={(evento) => alternar(producto.id, evento.target.checked)}
                    />
                    <span>{producto.nombre}</span>

                    {tipo === 'combo' && marcado ? (
                      <UnidadesCombo
                        type="number"
                        min={1}
                        max={20}
                        value={elegidos[producto.id]}
                        aria-label={`Unidades de ${producto.nombre}`}
                        onChange={(evento) =>
                          setElegidos((previos) => ({
                            ...previos,
                            [producto.id]: Math.max(1, Number(evento.target.value) || 1),
                          }))
                        }
                      />
                    ) : null}

                    <small>{formatMoney(producto.precio)}</small>
                  </ProductoOpcion>
                );
              })}
            </ProductoLista>
          )}

          {tipo === 'descuento' ? (
            <OfertaCampo>
              <span>Porcentaje de descuento</span>
              <input
                type="number"
                min={1}
                max={90}
                value={porcentaje}
                onChange={(evento) => setPorcentaje(evento.target.value)}
                placeholder="20"
                required
              />
            </OfertaCampo>
          ) : null}

          {tipo === 'cantidad' ? (
            <OfertaFila>
              <OfertaCampo>
                <span>Unidades</span>
                <input
                  type="number"
                  min={2}
                  max={99}
                  value={cantidad}
                  onChange={(evento) => setCantidad(evento.target.value)}
                  placeholder="3"
                  required
                />
              </OfertaCampo>

              <OfertaCampo>
                <span>Precio del paquete</span>
                <input
                  type="number"
                  min={0}
                  step="0.01"
                  value={precioFinal}
                  onChange={(evento) => setPrecioFinal(evento.target.value)}
                  required
                />
              </OfertaCampo>
            </OfertaFila>
          ) : null}

          {tipo === 'combo' ? (
            <OfertaCampo>
              <span>Precio final del combo</span>
              <input
                type="number"
                min={0}
                step="0.01"
                value={precioFinal}
                onChange={(evento) => setPrecioFinal(evento.target.value)}
                required
              />
            </OfertaCampo>
          ) : null}

          <OfertaCampo>
            <span>Hasta cuándo (opcional)</span>
            <input type="date" name="hasta" />
          </OfertaCampo>

          <OfertaCampo>
            <span>Descripción (opcional)</span>
            <textarea name="descripcion" maxLength={280} />
          </OfertaCampo>

          <OfertaCampo as="div">
            <span>Foto de la oferta (opcional)</span>
            <AuthEnviar
              as="label"
              style={{ cursor: processing ? 'progress' : 'pointer' }}
              data-variante="suave"
            >
              <ImagePlus size={16} aria-hidden="true" />
              {photos[0] ? 'Cambiar la foto' : 'Subir una foto'}
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(evento) => {
                  if (photos[0]) {
                    removePhoto(photos[0].id);
                  }

                  void addPhotos(evento.target.files);
                  evento.target.value = '';
                }}
              />
            </AuthEnviar>
          </OfertaCampo>

          {/* Vista previa: un descuento mal cargado se ve acá, no en la app
              del cliente. */}
          {ids.length > 0 && lista > 0 ? (
            <PreviaCaja>
              <PreviaFoto>
                {fotoPrevia ? <img src={fotoPrevia} alt="" /> : null}
                {tipo === 'descuento' && Number(porcentaje) > 0 ? (
                  <PreviaSello>-{Math.trunc(Number(porcentaje))}%</PreviaSello>
                ) : null}
              </PreviaFoto>

              <PreviaDatos>
                <strong>{primero?.nombre ?? 'Combo'}</strong>
                <PreviaPrecios>
                  <s>{formatMoney(lista)}</s>
                  <strong>{formatMoney(final)}</strong>
                </PreviaPrecios>
                {final > 0 && final < lista ? (
                  <PreviaAhorro>Ahorra {formatMoney(lista - final)}</PreviaAhorro>
                ) : null}
              </PreviaDatos>
            </PreviaCaja>
          ) : null}

          <AuthEnviar type="submit" disabled={guardando || processing}>
            {guardando ? 'Publicando…' : 'Publicar oferta'}
          </AuthEnviar>
        </form>
      </PanelDialogCard>
    </PanelDialogOverlay>
  );
}
