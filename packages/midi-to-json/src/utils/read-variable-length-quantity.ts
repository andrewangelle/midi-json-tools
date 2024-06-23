/**
 * @name readVariableLengthQuantity
 * @description This function handles deciphering the length of a midi event
 * @param {DataView} dataView
 * @param {number} offset
 * @returns {object}
 */
export function readVariableLengthQuantity(
  dataView: DataView,
  offset: number,
): {
  offset: number;
  value: number;
} {
  let nextOffset = offset;
  let value = 0;

  while (true) {
    const byte = dataView.getUint8(nextOffset);

    nextOffset += 1;

    if (byte > 127) {
      value += byte & 0x7f;
      value <<= 7;
    } else {
      value += byte;

      return {
        offset: nextOffset,
        value,
      };
    }
  }
}
