import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import { midiToJson } from '../packages/midi-to-json/dist/index.mjs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const filename = path.join(__dirname, './example-output/TimeMachineAlbumAll.mid');
const response = await fs.readFile(filename);
const jsonFile = midiToJson(response.buffer);
const outfile = path.join(
  __dirname,
  './example-output/TimeMachineAlbumAll-2.json',
);

await fs.writeFile(outfile, JSON.stringify(jsonFile));
