import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // or '@vitejs/plugin-react', not both
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace this with your actual GitHub repo name
const repoName = 'lakshx-ai-website';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig(({ mode }) => ({
  // Use repo base on GitHub Pages, root base elsewhere (Lovable, custom domains)
  base: isGithubActions ? `/${repoName}/` : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
