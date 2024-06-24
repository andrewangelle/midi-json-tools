import { jsonToMidi } from '@midi-json-tools/json-to-midi';
import { midiToJson } from '@midi-json-tools/midi-to-json';

import { getFileInfo } from './utils.ts';

const { readFile, writeTextFile, writeFile } = Deno;

const filenames = getFileInfo();
const midiFile = await readFile(filenames.input);

const json = midiToJson(midiFile.buffer);
const transformedMIDI = jsonToMidi(json);

await writeTextFile(filenames.output.json, JSON.stringify(json));
await writeFile(filenames.output.midi, new Uint8Array(transformedMIDI));
