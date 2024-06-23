import { createArrayBufferWithDataView } from '@midi-json-tools/json-midi-message-encoder';
import type { MidiEvent } from '@midi-json-tools/midi-to-json';

/**
 * @name encodeHeaderChunk
 * @description This function encodes a JSON representation of midi header information to binary
 * @param {number} division
 * @param {number} format
 * @param {MidiEvent[][]} tracks
 * @returns {ArrayBuffer}
 */
export function encodeHeaderChunk(
  division: number,
  format: number,
  tracks: MidiEvent[][],
): ArrayBuffer {
  const { arrayBuffer, dataView } = createArrayBufferWithDataView(14);

  // Write MThd as number.
  dataView.setUint32(0, 1297377380);
  dataView.setUint32(4, 6);
  dataView.setUint16(8, format);
  dataView.setUint16(10, tracks.length);
  dataView.setUint16(12, division);

  return arrayBuffer;
}
