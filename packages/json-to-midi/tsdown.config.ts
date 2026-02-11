import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: './src/index.ts',
  dts: true,
  clean: true,
  outDir: 'dist',
  minify: true,
  tsconfig: './tsconfig.json',
});
