// filepath: c:\Users\KuldeepGohel\demoProjects\profile-showcase-website\vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/resume/", // Ensure this matches your repository name
});
