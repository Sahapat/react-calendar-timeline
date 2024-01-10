import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import typescript from '@rollup/plugin-typescript'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: resolve("src", 'index.ts'),
      name: 'react-calendar-timeline-4ef',
      fileName: (format) => `react-calendar-timeline-4ef.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      },
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          outDir: 'dist',
          declaration: true,
        }),
      ],
    },
  },
  server: {
    port: 3000,
  },
  plugins: [react(), libInjectCss()],
})
