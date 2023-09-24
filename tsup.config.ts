// tsup.config.ts

import { defineConfig } from 'tsup';
import tsconfig from './tsconfig.json';

export default defineConfig(() => ({
  entry: ['src/lib/index.ts', 'src/lib/locales/index.ts'],
  dts: true,
  outDir: 'dist',
  format: ['esm', 'cjs'],
  name: 'tsup-lib-test',
  splitting: false,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
  sourcemap: true,
  clean: true,
  target: tsconfig.compilerOptions.target as 'es2016',
  minify: false,
}));
