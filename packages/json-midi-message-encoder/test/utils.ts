export function transformBufferToArray(arrayBuffer: ArrayBufferLike) {
  return Array.from(new Uint8Array(arrayBuffer));
}
