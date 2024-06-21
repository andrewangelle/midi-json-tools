export function createArrayBufferWithDataView(length: number) {
  const arrayBuffer = new ArrayBuffer(length);
  const dataView = new DataView(arrayBuffer);

  return { arrayBuffer, dataView };
}
