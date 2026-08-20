import { defineConfig } from 'vite'

export default defineConfig({
  base: '/AI-AGENT/',
  publicDir: 'public',
  build: {
    outDir: 'dist-pages',
    emptyOutDir: true,
  },
})
