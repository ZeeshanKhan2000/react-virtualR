// // vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: './postcss.config.js', // Specify the path to PostCSS config if needed
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: path.resolve(__dirname, './postcss.config.js'),  // Ensure PostCSS config is properly resolved
  },
  server: {
    host: true,  // Expose the server to the local network
    port: 3000,  // Default port for Vite
    open: true,  // Open the browser automatically on server start
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Create an alias for cleaner imports
    },
  },
});
