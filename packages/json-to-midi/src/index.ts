import type { MidiFile } from '@midi-json-tools/midi-to-json';
import { encodeHeaderChunk } from './utils/encode-header-chunk';
import { encodeTrackChunk } from './utils/encode-track-chunk';
import { joinArrayBuffers } from './utils/join-array-buffers';

/**
 * This function takes in a JSON representation of a MIDI file and encodes it to binary
 */
export function jsonToMidi({
  division,
  format,
  tracks,
}: MidiFile): ArrayBufferLike {
  const arrayBuffers = [];

  try {
    arrayBuffers.push(encodeHeaderChunk(division, format, tracks));
  } catch {
    throw new Error('The given JSON object seems to be invalid.');
  }

  for (const track of tracks) {
    try {
      arrayBuffers.push(encodeTrackChunk(track));
    } catch (err) {
      if (
        (err as Error).message.match(
          /Unencodable\sevent\sat\sposition\s[0-9]+\./,
        )
      ) {
        const index = tracks.indexOf(track);

        throw new Error(
          `${(err as Error).message.slice(0, -1)} of the track at index ${index}.`,
        );
      }

      throw err;
    }
  }

  return joinArrayBuffers(arrayBuffers);
}
