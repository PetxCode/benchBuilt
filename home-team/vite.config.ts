import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "home_app",
      filename: "home.js",
      exposes: {
        "./HomeScreen": "./src/pages/HomeScreen",
        "./main": "./src/main",
      },
      shared: ["react", "react-dom", "@tanstack/react-query"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
