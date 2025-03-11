import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./", // Ensures correct relative asset paths
  build: {
    assetsDir: "assets", // Ensure assets are placed in "dist/assets"
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // Preserve asset paths
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
