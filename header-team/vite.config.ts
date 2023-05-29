import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "hearder",
      filename: "project-x.js",
      exposes: {
        "./Header": "./src/components/common/Header",
        "./Layout": "./src/components/common/Layout",
        "./mainRoute": "./src/router/mainRoute",
        "./HomePage": "./src/pages/HomePage",
        "./AboutPage": "./src/pages/AboutPage",
        "./App": "./src/App",
      },
      remotes: {
        aboutApp: "http://localhost:3333/assets/about-x.js",
        homeApp: "http://localhost:3344/assets/contact-x.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
