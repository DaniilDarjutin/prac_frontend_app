import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Разрешает доступ извне (из Docker)
    port: 4173,  // Оставляем тот же порт
    strictPort: true,
  },
});