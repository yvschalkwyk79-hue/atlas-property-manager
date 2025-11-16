import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows you to access the app from your local network
    port: 5173, // default Vite port
  },
});
