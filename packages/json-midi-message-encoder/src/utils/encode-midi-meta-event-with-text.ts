import type { EncodeMidiMetaEventWithTextFactory } from '../types';

export const createEncodeMidiMetaEventWithText: EncodeMidiMetaEventWithTextFactory =
  (
    createArrayBufferWithDataView,
    joinArrayBuffers,
    textEncoder,
    writeVariableLengthQuantity,
  ) => {
    return (event, metaTypeByte, key) => {
      const { arrayBuffer, dataView } = createArrayBufferWithDataView(2);

      // Write an eventTypeByte with a value of 0xFF.
      dataView.setUint8(0, 0xff);
      // Write a metaTypeByte with the given value.
      dataView.setUint8(1, metaTypeByte);

      const textArrayBuffer = textEncoder.encode(
        event[key] as string | undefined,
      ).buffer;
      const textLengthArrayBuffer = writeVariableLengthQuantity(
        textArrayBuffer.byteLength,
      );

      return joinArrayBuffers([
        arrayBuffer,
        textLengthArrayBuffer,
        textArrayBuffer,
      ]);
    };
  };
