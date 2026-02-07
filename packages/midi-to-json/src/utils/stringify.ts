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
) {
  const byteOffset = offset + dataView.byteOffset;

  const array = new Uint8Array(dataView.buffer, byteOffset, length);

  // Try UTF-8 first
  const utf8Decoder = new TextDecoder('utf-8');
  const utf8Result = utf8Decoder.decode(array);

  // Check for replacement characters that indicate invalid UTF-8 sequences and Fall back to Latin-1 (ISO-8859-1) encoding
  // This could happen with older MIDI files that use Latin-1 encoding (e.g., copyright symbol © as single byte 0xA9).
  if (utf8Result.includes('\uFFFD')) {
    const latin1Decoder = new TextDecoder('iso-8859-1');
    return latin1Decoder.decode(array);
  }

  return utf8Result;
}
