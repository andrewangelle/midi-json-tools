import type { EncodeMidiMetaEventWithTextFactory } from '@midi-json-tools/types';

/**
 * @name createEncodeMidiMetaEventWithText
 * @description This is a factory function for EncodeMidiMetaEventWithTextFunction
 */
export const createEncodeMidiMetaEventWithText: EncodeMidiMetaEventWithTextFactory =
  (
    createArrayBufferWithDataView,
    joinArrayBuffers,
    textEncoder,
    writeVariableLengthQuantity,
  ) => {
    return (event, metaTypeByte, key) => {
      const { arrayBuffer, dataView } = createArrayBufferWithDataView(2);

      // eventTypeByte
      dataView.setUint8(0, 0xff);

      // metaTypeByte
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
