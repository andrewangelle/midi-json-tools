/**
 * Rewrites `*.mid` next to each `*.json` under the test fixture trees using
 *
 * Run from repo root: `cd examples/deno && deno task regen-fixtures`
 * (needs network once to resolve JSR.)
 */
import { jsonToMidi } from '@midi-json-tools/json-to-midi';
import { filenames as jsonToMidiNames } from '../test/json-to-midi/filenames.ts';
import { filenames as midiToJsonNames } from '../test/midi-to-json/filenames.ts';

async function writeMidFromJson(
  baseDir: string,
  names: readonly string[],
): Promise<void> {
  for (const name of names) {
    const jsonPath = `${baseDir}/${name}.json`;
    const midPath = `${baseDir}/${name}.mid`;
    const text = await Deno.readTextFile(jsonPath);
    const midi = jsonToMidi(JSON.parse(text));
    await Deno.writeFile(midPath, new Uint8Array(midi));
    console.log(midPath);
  }
}

await writeMidFromJson('./test/json-to-midi/fixtures', jsonToMidiNames);
await writeMidFromJson('./test/midi-to-json/fixtures', midiToJsonNames);
