import { assertEquals, assertThrows } from 'jsr:@std/assert';

import { midiToJson } from '@midi-json-tools/midi-to-json';
import { filenames } from './filenames.ts';

async function shouldParseMidiFile(_ctx: Deno.TestContext, filename: string) {
  const filePath = `./test/midi-to-json/fixtures/${filename}`;
  const midiSrcFile = await Deno.readFile(`${filePath}.mid`);
  const jsonSrcFile = await Deno.readTextFile(`${filePath}.json`);
  const jsonFile = midiToJson(midiSrcFile.buffer);

  assertEquals(jsonFile, JSON.parse(jsonSrcFile.toString()));
}

async function shouldRefuseToParseJsonFile(
  _ctx: Deno.TestContext,
  filename: string,
) {
  const filePath = `./test/midi-to-json/fixtures/${filename}`;
  const jsonSrcFile = await Deno.readFile(`${filePath}.json`);
  assertThrows(
    () => midiToJson(jsonSrcFile.buffer),
    'Unexpected characters "{" found instead of "MThd"',
  );
}

for (const filename of filenames) {
  Deno.test(
    `should parse the midi file for ${filename}`,
    { permissions: { read: true } },
    async (ctx) => await shouldParseMidiFile(ctx, filename),
  );

  Deno.test(
    `should refuse to parse the json file for ${filename}`,
    { permissions: { read: true } },
    async (ctx) => await shouldRefuseToParseJsonFile(ctx, filename),
  );
}
