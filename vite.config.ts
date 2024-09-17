import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import circleDependency from 'vite-plugin-circular-dependency'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
    circleDependency(),
  ],
  resolve: {
    alias: {
      app: '/src/app',
      entities: '/src/entities',
      features: '/src/features',
      pages: '/src/pages',
      shared: '/src/shared',
      widgets: '/src/widgets',
    },
  },
  server: {
    port: 3000,
  },
  build: {
    sourcemap: mode === 'development',
  },
}))
