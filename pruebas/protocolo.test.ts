/**
 * El enlace que abre la aplicación instalada.
 *
 * `lafranciago://caja` lo escribe una página web, así que llega de afuera y
 * se trata como lo que es: texto que puso alguien más. La lista de destinos
 * es cerrada justamente por eso — sin ella, cualquier sitio podría empujar la
 * aplicación del negocio a la pantalla que se le ocurra, y algunas de esas
 * cobran.
 *
 * Los casos de abajo son sobre todo intentos de salirse de la lista. Son los
 * que importan: que `caja` funcione se nota enseguida, que
 * `../../etc/passwd` no haga nada sólo se nota si alguien lo prueba.
 */
import { describe, expect, it } from 'vitest';
import { createRequire } from 'node:module';

const requerir = createRequire(import.meta.url);

const { DESTINOS, destinoDe, direccionEnArgumentos } = requerir(
  '../escritorio/protocolo.js',
) as {
  DESTINOS: Record<string, string>;
  destinoDe: (direccion: unknown) => string | null;
  direccionEnArgumentos: (argumentos: string[]) => string | undefined;
};

describe('destinoDe', () => {
  it('lleva a la caja rápida, que es lo que usa el botón de la web', () => {
    expect(destinoDe('lafranciago://caja')).toBe('/gestion/caja-rapida');
  });

  it('no le importan las mayúsculas ni la barra final', () => {
    /* Windows puede entregar la dirección con otra capitalización. */
    expect(destinoDe('LAFRANCIAGO://CAJA')).toBe('/gestion/caja-rapida');
    expect(destinoDe('lafranciago://caja/')).toBe('/gestion/caja-rapida');
    expect(destinoDe('lafranciago://Caja?x=1')).toBe('/gestion/caja-rapida');
  });

  it('conoce todos los destinos de la lista', () => {
    for (const [nombre, ruta] of Object.entries(DESTINOS)) {
      expect(destinoDe(`lafranciago://${nombre}`)).toBe(ruta);
    }
  });

  it('ignora cualquier destino que no esté en la lista', () => {
    expect(destinoDe('lafranciago://no-existe')).toBeNull();
    expect(destinoDe('lafranciago://admin')).toBeNull();
    expect(destinoDe('lafranciago://')).toBeNull();
  });

  it('no se deja escapar de la lista', () => {
    /* Lo que intentaría alguien para llegar a una pantalla que no está
       ofrecida. */
    expect(destinoDe('lafranciago://../../etc/passwd')).toBeNull();
    expect(destinoDe('lafranciago://caja/../../gestion/ventas')).toBe('/gestion/caja-rapida');
    expect(destinoDe('lafranciago://%2e%2e%2fadmin')).toBeNull();
  });

  it('ignora direcciones que no son de esta aplicación', () => {
    expect(destinoDe('https://malicioso.test/caja')).toBeNull();
    expect(destinoDe('javascript:alert(1)')).toBeNull();
    expect(destinoDe('file:///C:/Windows')).toBeNull();
  });

  it('aguanta que no le pasen nada', () => {
    /* Arrancar sin enlace es lo normal: se abre por el ícono. */
    expect(destinoDe(undefined)).toBeNull();
    expect(destinoDe(null)).toBeNull();
    expect(destinoDe('')).toBeNull();
    expect(destinoDe(42)).toBeNull();
  });
});

describe('direccionEnArgumentos', () => {
  it('encuentra la dirección entre los argumentos del sistema', () => {
    /* Windows la pasa mezclada con los suyos, así que se busca por el
       esquema y no por la posición. */
    expect(
      direccionEnArgumentos(['C:\\app.exe', '--allow-file-access', 'lafranciago://caja']),
    ).toBe('lafranciago://caja');
  });

  it('devuelve nada cuando se abrió por el ícono', () => {
    expect(direccionEnArgumentos(['C:\\app.exe', '--flag'])).toBeUndefined();
    expect(direccionEnArgumentos([])).toBeUndefined();
  });

  it('no confunde una ruta de archivo con una dirección', () => {
    expect(direccionEnArgumentos(['C:\\lafranciago\\app.exe'])).toBeUndefined();
  });
});
