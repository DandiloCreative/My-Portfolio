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
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // MUI + emotion are very heavy – isolate them
            if (id.includes('@mui') || id.includes('@emotion')) {
              return 'mui-vendor';
            }
            // Motion library
            if (id.includes('motion')) {
              return 'motion';
            }
            // Lucide icons
            if (id.includes('lucide-react')) {
              return 'lucide';
            }
            // Radix UI primitives
            if (id.includes('@radix-ui')) {
              return 'radix-vendor';
            }
            // React core
            if (id.includes('react-dom') || id.includes('react/')) {
              return 'react-vendor';
            }
          }
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify with esbuild (faster than terser, still very efficient)
    minify: 'esbuild',
    // Enable source map only in dev (not prod) for faster builds
    sourcemap: false,
  },
})
