import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "needware-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: [
      '.vercel.run',  // Allow all Vercel sandbox domains
      '.e2b.dev',     // Allow all E2B sandbox domains
      'localhost'
    ],
    hmr: {
      clientPort: 443,
      protocol: 'wss'
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
