import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Utilise jsdom pour les tests
    globals: true, // Permet d'utiliser les globals de Jest comme describe, it, etc.
  },
});
