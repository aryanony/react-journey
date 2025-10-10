import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // backend server host & port configuration settings for APIs
  server:{
    proxy:{
      '/api':'http://localhost:5000',
    }
  }
})
