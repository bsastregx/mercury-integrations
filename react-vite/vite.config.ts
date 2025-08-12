import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "./src/assets/mercury-css/*",
          dest: "./assets/css/",
        },
        {
          src: "./node_modules/@genexus/mercury/dist/assets/fonts/*",
          dest: "./assets/fonts/",
        },
        {
          src: "./node_modules/@genexus/mercury/dist/assets/icons/*",
          dest: "./assets/icons/",
        },
      ],
    }),
  ],
});
