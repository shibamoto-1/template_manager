import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.js'],
  },
  define: {
    'import.meta.env.VITE_BASE_URL': JSON.stringify('http://localhost:3000')
  }
}) 