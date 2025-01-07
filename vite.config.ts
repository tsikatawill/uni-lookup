import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "favicon.ico",
        "64.png",
        "180.png",
        "192.png",
        "512.png",
        "512-maskable.png",
        "logo.png",
        "favicon.ico",
        "vite.svg",
        "/assets/react.svg",
      ],
      manifest: {
        name: "UniLookup",
        short_name: "UniLookup",
        description: "Search for Universities in different countries",
        theme_color: "#ffffff",
        screenshots: [
          {
            src: "/sc-1.jpg",
            sizes: "1280x720",
            type: "image/jpg",
            form_factor: "wide",
          },
          {
            src: "/sc-1.jpg",
            sizes: "1280x720",
            type: "image/jpg",
            form_factor: "narrow",
          },
        ],
        icons: [
          {
            src: "/64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "/192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
