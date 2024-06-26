import { stringify } from './stringify';

/**
 * @name parseHeaderChunk
 * @description This function handles parsing the header information for a midi file
 * @param {DataView} dataView
 * @returns {Record<string, number>}
 */
export function parseHeaderChunk(dataView: DataView): {
  division: number;
  format: number;
  numberOfTracks: number;
} {
  if (dataView.byteLength < 14) {
    throw new Error(
      `Expected at least 14 bytes instead of ${dataView.byteLength}`,
    );
  }

  if (stringify(dataView, 0, 4) !== 'MThd') {
    throw new Error(
      `Unexpected characters "${stringify(dataView, 0, 4)}" found instead of "MThd"`,
    );
  }

  if (dataView.getUint32(4) !== 6) {
    throw new Error(
      `The header has an unexpected length of ${dataView.getUint32(4)} instead of 6`,
    );
  }

  const format = dataView.getUint16(8);

  const numberOfTracks = dataView.getUint16(10);

  const division = dataView.getUint16(12);

  return {
    division,
    format,
    numberOfTracks,
  };
}
