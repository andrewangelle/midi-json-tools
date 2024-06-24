import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
// import { jsonToMidi } from '../../packages/json-to-midi/dist/index.mjs';
import { jsonToMidi } from '@midi-json-tools/json-to-midi';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const filename = path.join(__dirname, './TimeMachineAlbumAll.json');
const response = await fs.readFile(filename);
const json = JSON.parse(response.toString());

const midiFile = await jsonToMidi(json);

const outfile = path.join(
  __dirname,
  './example-output/TimeMachineAlbumAll.mid',
);

await fs.writeFile(outfile, new Uint8Array(midiFile));