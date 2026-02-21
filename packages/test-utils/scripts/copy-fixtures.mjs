import { cpSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
cpSync(join(root, 'src', 'fixtures'), join(root, 'dist', 'fixtures'), {
  recursive: true,
});
