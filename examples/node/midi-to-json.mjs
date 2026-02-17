import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { midiToJson } from '@midi-json-tools/midi-to-json';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const filePaths = {
  midi: join(__dirname, './TimeMachineAlbumAll.mid'),
  json: join(__dirname, './example-output/TimeMachineAlbumAll.json'),
};

const midiFile = await readFile(filePaths.midi);
const result = midiToJson(midiFile.buffer);

await writeFile(filePaths.json, JSON.stringify(result));
