import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import EsLint from 'vite-plugin-linter';
import tsConfigPaths from 'vite-tsconfig-paths';
const { EsLinter, linterPlugin } = EsLint;
import * as packageJson from './package.json';
import i18next from 'rollup-plugin-i18next-conv';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    dts({
      include: ['src/lib/'],
    }),
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'lib/index.ts'),
      name: 'ReactLibraryTest',
      formats: ['es', 'umd'],
      fileName: (format) => `artemis-ui.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      plugins: [
        i18next({
          include: 'node_modules/**',
          exclude: ['node_modules/foo/**', 'node_modules/bar/**'],
          determineDomain: (filename) => path.basename(filename, '.json'),
          keyseparator: '$$',
        }),
      ],
    },
  },
}));
