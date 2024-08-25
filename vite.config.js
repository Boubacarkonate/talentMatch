import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
<<<<<<< HEAD
=======
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
>>>>>>> 7fcf4a46212488026bb46d995858fc17f7c63a96
    environment: 'jsdom', // Utilise jsdom pour les tests
    globals: true, // Permet d'utiliser les globals de Jest comme describe, it, etc.
  },
});
