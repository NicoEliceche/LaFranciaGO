import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

const repoBase = '/LaFranciaGO/';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? repoBase : '/',
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        /* Al publicar, los chunks cambian de nombre. Sin esto, un usuario con
           la app instalada conserva el HTML viejo y pide archivos que ya no
           existen (404 en las pantallas diferidas). */
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
      },
      includeAssets: ['favicon.png', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'LaFranciaGO',
        short_name: 'LaFranciaGO',
        description: 'Marketplace local mobile-first para La Francia, Córdoba.',
        theme_color: '#0047E7',
        background_color: '#050816',
        display: 'standalone',
        start_url: '.',
        scope: '.',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        /* Se separan las dependencias grandes para que el bundle inicial
           no arrastre el mapa ni todo el set de íconos. */
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
}));
