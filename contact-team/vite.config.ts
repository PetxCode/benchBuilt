import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "contact",
      filename: "contact-x.js",
      exposes: {
        "./ContactScreen": "./src/pages/ContactScreen",
      },
      shared: ["react", "react-dom", "axios", "@tanstack/react-query"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
