import type { MidiEvent, MidiFile } from './types';
import { parseHeaderChunk } from './utils/parse-header-chunk';
import { parseTrackChunk } from './utils/parse-track-chunk';

export * from './types';

/**
 * @name midiToJson
 * @description This function takes in an array buffer and returns a JSON representation of MIDI data
 * @param {ArrayBuffer} arrayBuffer
 * @returns {MidiFile}
 */
export function midiToJson(arrayBuffer: ArrayBuffer): MidiFile {
  const dataView = new DataView(arrayBuffer);

  const header = parseHeaderChunk(dataView);

  let offset = 14;

  const tracks: MidiEvent[][] = [];

  for (let i = 0, length = header.numberOfTracks; i < length; i += 1) {
    let track: MidiEvent[];

    ({ offset, track } = parseTrackChunk(dataView, offset));

    tracks.push(track);
  }

  return {
    division: header.division,
    format: header.format,
    tracks,
  };
}
