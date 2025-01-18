import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from 'node:url';

const viteConfig = defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: "localhost",
    port: 3000,
  },
  preview: {
    host: "localhost",
    port: 8080,
  },
  css: {
    devSourcemap: true,
  },
});

export default viteConfig;
