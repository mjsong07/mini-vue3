import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoPlgin from './src/auto-import'
import autoTry from './src/auto-try'

// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [
    vue(),
    vueJsx(),autoPlgin(),autoTry()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

