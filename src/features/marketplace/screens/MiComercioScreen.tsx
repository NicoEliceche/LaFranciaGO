import { useCallback, useEffect, useState } from 'react';
import { Pencil, Plus, PackageSearch, Store, X } from 'lucide-react';

import {
  type ComercioApi,
  type ProductoApi,
  miComercioApi,
} from '@core/data/services/apiClient';
import { formatMoney } from '@shared/utils/format';
import { priceSuffix, stepLabel } from '@core/data/saleUnits';
import type { SaleUnitId } from '@shared/types/saleUnit.types';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { EmptyState } from '../components/EmptyState';
import { ProductoDialog } from '../components/ProductoDialog';
import { SectionHeading } from '../components/SectionHeading';
import { Avatar } from '@shared/components/Media';
import { Card, CardPad, SectionInner } from '../ui';
import { CompactSection, SectionStack } from './screenLayout';
import { AuthAviso } from './AuthScreenStyled';
import {
  ComercioCabecera,
  ComercioDato,
  ComercioDatos,
  ComercioNombre,
  NuevoProductoBoton,
  ProductoAcciones,
  ProductoBotonIcono,
  ProductoFila,
  ProductoInfo,
  ProductoNombre,
  ProductoPrecio,
} from './MiComercioScreenStyled';

/**
 * Panel del comercio: sus datos y su catálogo.
 *
 * Es lo primero que ve quien entra como comercio, así que muestra lo que
 * necesita para operar: quién es y qué está vendiendo, con las acciones a
 * mano.
 */
export function MiComercioScreen() {
  const [comercio, setComercio] = useState<ComercioApi | null>(null);
  const [productos, setProductos] = useState<ProductoApi[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [dialogoAbierto, setDialogoAbierto] = useState(false);
  const [editando, setEditando] = useState<ProductoApi | null>(null);
  const [porBorrar, setPorBorrar] = useState<ProductoApi | null>(null);

  const cargar = useCallback(async () => {
    setCargando(true);

    try {
      const datos = await miComercioApi.ver();

      setComercio(datos.comercio);
      setProductos(datos.productos);
      setError(null);
    } catch {
      setError('No pudimos cargar tu comercio.');
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    void cargar();
  }, [cargar]);

  const guardar = async (datos: Record<string, unknown>) => {
    if (editando) {
      await miComercioApi.editarProducto(editando.id, datos);
    } else {
      await miComercioApi.crearProducto({ ...datos, comercioId: comercio?.id });
    }

    await cargar();
  };

  const borrar = async () => {
    if (!porBorrar) {
      return;
    }

    try {
      await miComercioApi.borrarProducto(porBorrar.id);
      await cargar();
    } catch {
      setError('No pudimos borrar el producto.');
    } finally {
      setPorBorrar(null);
    }
  };

  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <SectionStack>
            {error ? (
              <AuthAviso role="alert" data-tono="error">
                {error}
              </AuthAviso>
            ) : null}

            {comercio ? (
              <Card>
                <CardPad>
                  <ComercioCabecera>
                    <Avatar $size="3.5rem" $tone="blue">
                      <Store size={24} aria-hidden="true" />
                    </Avatar>

                    <div>
                      <ComercioNombre>{comercio.nombre}</ComercioNombre>
                      <ComercioDatos>
                        <ComercioDato>{comercio.rubro_nombre}</ComercioDato>
                        <ComercioDato>{comercio.direccion}</ComercioDato>
                        {comercio.horario ? (
                          <ComercioDato>{comercio.horario}</ComercioDato>
                        ) : null}
                      </ComercioDatos>
                    </div>
                  </ComercioCabecera>
                </CardPad>
              </Card>
            ) : null}

            {!cargando && !comercio && !error ? (
              <EmptyState
                icon={Store}
                title="Todavía no tenés comercio"
                text="Cuando aprobemos tu alta vas a poder cargar productos."
                dashed
              />
            ) : null}

            {comercio ? (
              <>
                <SectionHeading
                  title="Tus productos"
                  chip={`${productos.length}`}
                  subtitle="Lo que ve el cliente en tu catálogo."
                />

                <NuevoProductoBoton
                  type="button"
                  onClick={() => {
                    setEditando(null);
                    setDialogoAbierto(true);
                  }}
                >
                  <Plus size={18} aria-hidden="true" />
                  Agregar producto
                </NuevoProductoBoton>

                {productos.length === 0 && !cargando ? (
                  <EmptyState
                    icon={PackageSearch}
                    title="Sin productos"
                    text="Cargá el primero para que tu comercio aparezca completo."
                    dashed
                  />
                ) : null}

                {productos.map((producto) => (
                  <Card key={producto.id}>
                    <CardPad>
                      <ProductoFila>
                        <ProductoInfo>
                          <ProductoNombre>{producto.nombre}</ProductoNombre>
                          <ProductoPrecio>
                            {formatMoney(producto.precio)}{' '}
                            {producto.unidad_venta !== 'unidad'
                              ? priceSuffix(producto.unidad_venta as SaleUnitId)
                              : 'c/u'}
                            {/* El primer escalón dice cómo se pide: "1/4" en
                                pan, "1 unid." en gaseosas. */}
                            {' · desde '}
                            {stepLabel(producto.unidad_venta as SaleUnitId, 0)}
                          </ProductoPrecio>
                        </ProductoInfo>

                        <ProductoAcciones>
                          <ProductoBotonIcono
                            type="button"
                            onClick={() => {
                              setEditando(producto);
                              setDialogoAbierto(true);
                            }}
                            aria-label={`Editar ${producto.nombre}`}
                          >
                            <Pencil size={15} aria-hidden="true" />
                          </ProductoBotonIcono>

                          <ProductoBotonIcono
                            type="button"
                            data-tono="danger"
                            onClick={() => setPorBorrar(producto)}
                            aria-label={`Borrar ${producto.nombre}`}
                          >
                            <X size={15} aria-hidden="true" />
                          </ProductoBotonIcono>
                        </ProductoAcciones>
                      </ProductoFila>
                    </CardPad>
                  </Card>
                ))}
              </>
            ) : null}
          </SectionStack>
        </SectionInner>
      </CompactSection>

      <ProductoDialog
        open={dialogoAbierto}
        producto={editando}
        onClose={() => setDialogoAbierto(false)}
        onGuardar={guardar}
      />

      <ConfirmDialog
        open={porBorrar !== null}
        title="¿Borrar este producto?"
        text={`"${porBorrar?.nombre ?? ''}" deja de aparecer en tu catálogo.`}
        onCancel={() => setPorBorrar(null)}
        onConfirm={() => void borrar()}
      />
    </MarketplaceFrame>
  );
}
