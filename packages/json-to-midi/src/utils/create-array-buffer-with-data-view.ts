/**
 * This function takes in a byte length and instantiates an ArrayBuffer and DataView instance
 */
export function createArrayBufferWithDataView(length: number): {
  arrayBuffer: ArrayBuffer;
  dataView: DataView;
} {
  const arrayBuffer = new ArrayBuffer(length);
  const dataView = new DataView(arrayBuffer);

  return { arrayBuffer, dataView };
}
