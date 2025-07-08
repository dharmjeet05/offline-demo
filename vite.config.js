import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'logo.png'],
      manifest: {
        name: 'Offline Demo App',
        short_name: 'OfflineApp',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        description: 'A simple offline-ready Vite React app',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/posts\/1$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'home-api-cache',
              expiration: { maxEntries: 5, maxAgeSeconds: 86400 },
            },
          },
          {
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/posts\/2$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'about-api-cache',
              expiration: { maxEntries: 5, maxAgeSeconds: 86400 },
            },
          },
          {
            urlPattern: /^\/about$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'page-cache',
              expiration: { maxEntries: 5, maxAgeSeconds: 86400 },
            },
          },
        ],
      },
    }),
  ],
});
