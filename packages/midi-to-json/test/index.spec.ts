import { midiToJson } from '../src';
import { filenames } from './helper/filenames';
import {
  loadFixtureAsArrayBuffer,
  loadFixtureAsJson,
} from './helper/load-fixture';

test.each(filenames)('should parse the midi file for %s', async (filename) => {
  const arrayBuffer = await loadFixtureAsArrayBuffer(`${filename}.mid`);
  const json = await loadFixtureAsJson(`${filename}.json`);
  const midiFile = midiToJson(arrayBuffer);

  expect(midiFile).to.deep.equal(json);
});

test.each(filenames)(
  'should refuse to parse the json file  for %s',
  async (filename) => {
    const arrayBuffer = await loadFixtureAsArrayBuffer(`${filename}.json`);
    try {
      midiToJson(arrayBuffer);
    } catch (err) {
      expect((err as Error).message).to.equal(
        'Unexpected characters "{\n  " found instead of "MThd"',
      );
    }
  },
);
