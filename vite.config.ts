import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
      'figma:asset': path.resolve(__dirname, './src/assets'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    // Target modern browsers for smaller output
    target: 'es2020',
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor libraries into separate chunks for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['motion/react'],
          'lucide': ['lucide-react'],
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify with esbuild (faster than terser)
    minify: 'esbuild',
  },
})
