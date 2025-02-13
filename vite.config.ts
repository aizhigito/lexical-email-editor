import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    dts({
      outDir: 'dist/types',
      tsconfigPath: "./tsconfig.app.json",
      rollupTypes: true,
    })
  ],
  base: '/lexical-email-editor/',
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'umd'],
      name: 'LexicalEmailEditor',
      fileName: 'lexical-email-editor',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'lexical',
        '@lexical/react',
        '@lexical/rich-text',
        '@lexical/link',
        '@lexical/html',
        '@lexical/selection',
        '@lexical/utils',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
