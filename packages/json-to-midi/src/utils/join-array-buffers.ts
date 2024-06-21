export function joinArrayBuffers(
  arrayBuffers: (ArrayBuffer | SharedArrayBuffer)[],
) {
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
