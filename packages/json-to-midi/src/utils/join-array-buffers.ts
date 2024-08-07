/**
 * @name joinArrayBuffers
 * @description This function takes in an array of ArrayBuffers and joins them into one ArrayBuffer
 * @param {(ArrayBuffer | SharedArrayBuffer)[]} arrayBuffers
 * @returns {ArrayBufferLike}
 */
export function joinArrayBuffers(
  arrayBuffers: (ArrayBuffer | SharedArrayBuffer)[],
): ArrayBufferLike {
  const byteLength = arrayBuffers.reduce(
    (bytLngth, arrayBuffer) => bytLngth + arrayBuffer.byteLength,
    0,
  );

  const { uint8Array } = arrayBuffers.reduce(
    ({ offset, uint8Array: nt8Rry }, arrayBuffer) => {
      nt8Rry.set(new Uint8Array(arrayBuffer), offset);

      return { offset: offset + arrayBuffer.byteLength, uint8Array: nt8Rry };
    },
    { offset: 0, uint8Array: new Uint8Array(byteLength) },
  );

  return uint8Array.buffer;
}
