import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'

import compression from 'vite-plugin-compression'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 8082,
    host: '0.0.0.0',
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer(), postcssPresetEnv()],
    },
  },
  plugins: [
    react(),
    compression({ threshold: 10240 }),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/chunk/[name]-[hash].js',
        entryFileNames: 'assets/chunk/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          'chunk-vendor': ['react', 'react-dom', 'react-router-dom', 'react-redux'],
        },
      },
    },
  },
})
