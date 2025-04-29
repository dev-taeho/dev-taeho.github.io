import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@src", replacement: path.resolve(__dirname, "src") }
    ],
  },
  server: {
    port: 3000,
    open: true,
  }
})
