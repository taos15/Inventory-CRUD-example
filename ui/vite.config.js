import react from '@vitejs/plugin-react';
import * as dotenv from 'dotenv';
import { defineConfig } from 'vite';

dotenv.config({ path: '../.env' });

const port = process.env.UIPORTI ?? 5000;

/* https://vitejs.dev/config/
https://vitejs.dev/config/server-options.html#server-watch */
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port,
  },
  // build: {
  //   outDir: '../api/view',
  // },
});
