import {
  createArrayBufferWithDataView,
  encodeMidiEvent,
  writeVariableLengthQuantity,
} from '@midi-json-tools/json-midi-message-encoder';
import type { MidiEvent } from '@midi-json-tools/midi-to-json';
import { joinArrayBuffers } from './join-array-buffers';

/**
 * This function encodes a JSON representation of a midi track to binary
 */
export function encodeTrackChunk(track: MidiEvent[]): ArrayBufferLike {
  const { arrayBuffer, dataView } = createArrayBufferWithDataView(8);

  const arrayBuffers = [arrayBuffer];

  let byteLength = 0;

  // Write MTrk as number.
  dataView.setUint32(0, 1297379947);

  for (const message of track) {
    const deltaArrayBuffer = writeVariableLengthQuantity(message.delta);

    try {
      const messageArrayBuffer = encodeMidiEvent(message);

      byteLength += deltaArrayBuffer.byteLength + messageArrayBuffer.byteLength;

      arrayBuffers.push(deltaArrayBuffer, messageArrayBuffer);
    } catch (err) {
      if (
        (err as Error).message.match(
          /Unencodable\smessage\swith\sa\sdelta\sof\s[0-9]+\./,
        )
      ) {
        const index = track.indexOf(message);

        throw new Error(`Unencodable message at index ${index}.`);
      }

      throw err;
    }
  }

  dataView.setUint32(4, byteLength);

  return joinArrayBuffers(arrayBuffers);
}
