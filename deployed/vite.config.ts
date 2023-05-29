import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "deploy",
      remotes: {
        remoteApp: "http://localhost:3322/assets/project-x.js",
        homeApp: "http://localhost:3311/assets/home.js",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "@tanstack/react-query",
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
