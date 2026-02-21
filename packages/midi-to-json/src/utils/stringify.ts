/**
 * @name stringify
 * @description This function turns a part of a given ArrayBuffer into a String.
 * @param {DataView} dataView
 * @param {number} offset
 * @param {number} length
 * @returns {string}
 */
export function stringify(
  dataView: DataView,
  offset = 0,
  length = dataView.byteLength - (offset - dataView.byteOffset),
): string {
  const byteOffset = offset + dataView.byteOffset;
  const raw = new Uint8Array(dataView.buffer, byteOffset, length);
  const decoder = new TextDecoder('utf-8');
  const result = decoder.decode(raw);

  // Check for replacement characters that indicate invalid UTF-8 sequences and fallback to iso-8859-1 (latin-1) encoding
  // This could happen with older MIDI files (e.g., copyright symbol © as single byte 0xA9).
  if (result.includes('\uFFFD')) {
    const fallbackDecoder = new TextDecoder('iso-8859-1');
    return fallbackDecoder.decode(raw);
  }

  return result;
}
