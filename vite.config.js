import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/gitfKal/',
  plugins: [react()],
  server: {
    mimeTypes: {
      '.jsx': 'application/javascript'
    }
  }
})
