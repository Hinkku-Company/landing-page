import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import AstroPWA from '@vite-pwa/astro';

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    compress(),
    AstroPWA({
      name: "Aphrodite Project",
      base: "/landing-page",
      manifest: {
        name: 'Aphrodite Project',
        short_name: 'Aphrodite Project',
        start_url: "/landing-page",
        display: "standalone",
        background_color: "#fff",
        description: "Aphrodite Project es una innovadora app para reservación de citas en salones de belleza y gestión completa de negocios del sector de la belleza.",
        icons: [
          {
            "src": "images/touch/homescreen48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "images/touch/homescreen72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "images/touch/homescreen96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "images/touch/homescreen144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "images/touch/homescreen168.png",
            "sizes": "168x168",
            "type": "image/png"
          },
          {
            "src": "images/touch/homescreen192.png",
            "sizes": "192x192",
            "type": "image/png"
          }
        ],
        related_applications: [
          {
            platform: "play",
            url: "https://play.google.com/store/apps/details"
          }
        ]
      }
    })
  ],
  site: 'https://Hinkku-Company.github.io',
  base: '/landing-page'
});