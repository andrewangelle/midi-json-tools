import {
  filenames,
  loadFixtureAsArrayBuffer,
  loadFixtureAsJson,
} from '@midi-json-tools/test-utils';
import { midiToJson } from '~/index';

test.each(filenames)('should parse the midi file for %s', async (filename) => {
  const arrayBuffer = await loadFixtureAsArrayBuffer(`${filename}.mid`);
  const json = await loadFixtureAsJson(`${filename}.json`);
  const midiFile = midiToJson(arrayBuffer);

  expect(midiFile).toEqual(json);
});

test.each(
  filenames,
)('should refuse to parse the json file for %s', async (filename) => {
  const arrayBuffer = await loadFixtureAsArrayBuffer(`${filename}.json`);
  expect(() => midiToJson(arrayBuffer)).toThrow(
    'Unexpected characters "{\n  " found instead of "MThd"',
  );
});
