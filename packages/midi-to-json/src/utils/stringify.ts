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

  // String.fromCharCode() does normally expect numbers but it can also handle a typed array.
  return String.fromCharCode.apply(
    null,
    <number[]>(<unknown>(<Uint8Array>array)),
  );
}
