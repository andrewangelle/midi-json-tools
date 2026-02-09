import { jsonToMidi } from '../src/index';
import { filenames } from './utils/filenames';
import {
  loadFixtureAsArrayBuffer,
  loadFixtureAsJson,
} from './utils/load-fixture';

test.each(
  filenames,
)('should encode the json object for %s', async (filename) => {
  const arrayBuffer = await loadFixtureAsArrayBuffer(`${filename}.mid`);
  const json = await loadFixtureAsJson(`${filename}.json`);
  const midiFile = jsonToMidi(json);

  expect(new Uint8Array(midiFile)).to.deep.equal(new Uint8Array(arrayBuffer));
});

test.each(
  filenames,
)('should refuse to encode the object with a binary file for %s', async (filename) => {
  const arrayBuffer = await loadFixtureAsArrayBuffer(`${filename}.mid`);

  try {
    // @ts-expect-error - purposefully passing in file of the wrong type
    jsonToMidi(arrayBuffer);
  } catch (err) {
    expect((err as Error).message).to.equal(
      'The given JSON object seems to be invalid.',
    );
  }
});
