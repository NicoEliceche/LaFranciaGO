# LaFranciaGO

Marketplace local mobile-first para La Francia, Córdoba.

## Stack actual

- React 18 + TypeScript
- Vite
- styled-components
- Lucide React
- Vite PWA
- GitHub Pages

## Branding

- Color principal: azul del logo (`#0047E7`)
- Base visual: azul + negro + neutros claros
- Tipografías: Rubik para títulos, Nunito Sans para cuerpo
- Favicon: ícono superior del logo, extraído y separado automáticamente

## Estructura base

```text
src/
  core/theme/         sistema de diseño
  features/home/      landing / home mobile-first
  main.tsx            entrypoint de Vite
  App.tsx             composición raíz
public/
  favicon.png
  icon-192.png
  icon-512.png
  apple-touch-icon.png
```

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run typecheck
npm run deploy
```

## Deploy a GitHub Pages

El proyecto ya queda preparado para publicar en:

`https://NicoEliceche.github.io/LaFranciaGO/`

La base de Vite está configurada para ese subpath.

## Notas de implementación

- Se usa una navegación mobile-first con secciones ancla.
- El buscador filtra contenido local de ejemplo mientras no exista API.
- El proyecto evita `localStorage` para secretos y deja la estructura lista para una futura app React Native.

## Siguiente paso

Con esta base ya se puede avanzar a:

1. autenticación real,
2. catálogo y comercios desde API,
3. pedidos,
4. paneles por rol,
5. app React Native para Android/iOS.
