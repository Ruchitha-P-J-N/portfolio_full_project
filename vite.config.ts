import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import path from 'path'

export default defineConfig({
  base: '/portfolio_full_project/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Enable Pug support
        }
      }
    }),
    vuetify({ autoImport: true })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    css: false,               // ignore all CSS imports
    mockReset: true   
  }
});