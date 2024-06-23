import type { WriteVariableLengthQuantityFactory } from '../types';

/**
 * @name createWriteVariableLengthQuantity
 * @description Factory function for WriteVariableLengthQuantityFunction
 */
export const createWriteVariableLengthQuantity: WriteVariableLengthQuantityFactory =
  (createArrayBufferWithDataView) => {
    return (value) => {
      const numberOfBytes = Math.max(
        1,
        Math.floor(Math.log(value) / Math.log(2) / 7) + 1,
      );

      const { arrayBuffer, dataView } =
        createArrayBufferWithDataView(numberOfBytes);

      for (let i = 1; i < numberOfBytes; i += 1) {
        dataView.setUint8(
          numberOfBytes - 1 - i,
          ((value >> (i * 7)) & 0x7f) | 0x80,
        );
      }

      dataView.setUint8(numberOfBytes - 1, value & 0x7f);

      return arrayBuffer;
    };
  };
