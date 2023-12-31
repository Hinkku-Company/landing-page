import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    AstroPWA({
      devOptions: {
        enabled: true
        /* other options */
      },
      base: '/landing-page/',
      scope: '/landing-page/',
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'HINKKU_isotipo.svg'],
      manifest: {
        name: 'Aphrodite Project',
        short_name: 'Aphrodite Project',
        display_override: ["window-controls-overlay"],
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        description: "Aphrodite Project es una innovadora app para reservación de citas para peluquerías y gestión completa de negocios del sector de la belleza.",
        icons: [
          {
            src: "/landing-page/HINKKU_isotipo.svg",
            sizes: "48x48",
            type: "image/svg+xml"
          },
          {
            src: "/landing-page/HINKKU_isotipo.svg",
            sizes: "72x72",
            type: "image/svg+xml"
          },
          {
            src: "/landing-page/HINKKU_isotipo.svg",
            sizes: "96x96",
            type: "image/svg+xml"
          },
          {
            src: "/landing-page/HINKKU_isotipo.svg",
            sizes: "144x144",
            type: "image/svg+xml"
          },
          {
            src: "/landing-page/HINKKU_isotipo.svg",
            sizes: "168x168",
            type: "image/svg+xml"
          },
          {
            src: "/landing-page/HINKKU_isotipo.svg",
            sizes: "192x192",
            type: "image/svg+xml"
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}']
      }
    })
  ],
  site: 'https://Hinkku-Company.github.io',
  base: '/landing-page'
});