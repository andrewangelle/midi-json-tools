import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { jsonToMidi } from '@midi-json-tools/json-to-midi';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const filePaths = {
  midi: join(__dirname, './example-output/TimeMachineAlbumAll.mid'),
  json: join(__dirname, './TimeMachineAlbumAll.json'),
};

const jsonFile = await readFile(filePaths.json, 'utf-8');
const result = jsonToMidi(JSON.parse(jsonFile));

await writeFile(filePaths.midi, new Uint8Array(result));
