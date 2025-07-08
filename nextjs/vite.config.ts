import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "./src/assets/mercury-css/",
          dest: "/assets/css/",
        },
        {
          src: "./node_modules/@genexus/mercury/dist/assets/fonts",
          dest: "/assets/fonts/",
        },
        {
          src: "./node_modules/@genexus/mercury/dist/assets/icons",
          dest: "/assets/icons/",
        },
      ],
    }),
  ],
});
