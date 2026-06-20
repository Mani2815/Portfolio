import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Split vendor chunks for better caching (function form required for Vite 8 / rolldown)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/aos')) {
            return 'animation-vendor';
          }
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Increase warning threshold slightly for video assets
    chunkSizeWarningLimit: 1000,
  },
})
