import { defineConfig, TestProjectConfiguration } from 'vitest/config';
import tsConfigPaths from 'vite-tsconfig-paths';

const packages = [
  'json-midi-message-encoder',
  'json-to-midi',
  'midi-to-json'
]

type LabelColor = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white";

const labelColors: LabelColor[] = [
  'green',
  'blue',
  'magenta'
]

const configs: TestProjectConfiguration[] = packages.map((name, index) => ({
  extends: true,
  test: {
    globals: true,
    environment: 'node',
    include: [`packages/${name}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`],
    name: {
      label: `@midi-json-tools/${name}`,
      color: labelColors[index]
    }
  }
}))

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    watch: false,
    reporters: ['default'],
    coverage: {
      reportsDirectory: 'coverage',
      provider: 'v8',
    },
    projects: configs
  } 
});