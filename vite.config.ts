// vite.config.js
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set to '/' for the root
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
