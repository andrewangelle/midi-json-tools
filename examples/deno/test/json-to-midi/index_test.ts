import { jsonToMidi } from '@midi-json-tools/json-to-midi';
import { assertEquals, assertThrows } from '@std/assert';
import { filenames } from './filenames.ts';

async function shouldParseJSONFile(_ctx: Deno.TestContext, filename: string) {
  const filePath = `./test/json-to-midi/fixtures/${filename}`;
  const midiSrcFile = await Deno.readFile(`${filePath}.mid`);
  const jsonSrcFile = await Deno.readTextFile(`${filePath}.json`);
  const midiFile = jsonToMidi(JSON.parse(jsonSrcFile));

  assertEquals(midiSrcFile, new Uint8Array(midiFile));
}

async function shouldRefuseToParseMIDIFile(
  _ctx: Deno.TestContext,
  filename: string,
) {
  const filePath = `./test/json-to-midi/fixtures/${filename}`;
  const midiSrcFile = await Deno.readFile(`${filePath}.mid`);

  assertThrows(
    // @ts-expect-error: explicitly testing the wrong filetime
    () => jsonToMidi(midiSrcFile),
    'Unexpected characters "{" found instead of "MThd"',
  );
}

for (const filename of filenames) {
  Deno.test(`should parse the json file for ${filename}`, async (ctx) =>
    await shouldParseJSONFile(ctx, filename));

  Deno.test(`should refuse to parse the midi file for ${filename}`, async (ctx) =>
    await shouldRefuseToParseMIDIFile(ctx, filename));
}
