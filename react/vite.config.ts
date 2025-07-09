import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  server: {
    fs: { strict: false },
  },

  esbuild: {
    // drop: ["console", "debugger"], // Removes console and debugger statements
    format: "esm",
    target: "esnext",
  },

  build: {
    minify: "terser", // When downloading the bundles in the browser this compression is better than ESBuild
    target: "esnext", // Necessary to force the ECMA script target version
  },

  plugins: [
    react(),

    viteStaticCopy({
      targets: [
        {
          src: "./node_modules/@genexus/mercury/dist/assets/icons/*",
          dest: "./assets/icons/",
        },
        {
          src: "./node_modules/@genexus/mercury/dist/assets/fonts/*",
          dest: "./assets/fonts/",
        },
        {
          src: "src/assets/mercury-bundles/*",
          dest: "./assets/css",
        },
      ],
    }),
  ],
});
