import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: './src/index.ts',
  dts: true,
  clean: true,
  outDir: 'dist',
  minify: false,
  tsconfig: './tsconfig.json',
});
