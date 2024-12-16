import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' 
import autoImportPlugin from './src/auto-import/index.js'
import autoTryCatchPlugin from './src/auto-trycatch/index.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    autoImportPlugin(),
    autoTryCatchPlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}) 