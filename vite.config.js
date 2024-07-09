import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import compression from 'vite-plugin-compression' // 代码压缩
import legacy from '@vitejs/plugin-legacy' // js浏览器兼容

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer' // css浏览器前缀
import postcssPresetEnv from 'postcss-preset-env' // css浏览器兼容性

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
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/chunks/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          'chunk-vendor': ['react', 'react-dom', 'react-router-dom', 'react-redux'],
        },
      },
    },
  },
})
