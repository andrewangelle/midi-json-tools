import type {
  EncodeMidiEventFunction,
  WriteVariableLengthQuantityFunction,
} from './types';
import { createArrayBufferWithDataView } from './utils/create-array-buffer-with-data-view';
import { createEncodeMidiEvent } from './utils/create-encode-midi-event';
import { createEncodeMidiMetaEventWithText } from './utils/encode-midi-meta-event-with-text';
import { joinArrayBuffers } from './utils/join-array-buffers';
import { createWriteVariableLengthQuantity } from './utils/write-variable-length-quantity';

export const writeVariableLengthQuantity: WriteVariableLengthQuantityFunction =
  createWriteVariableLengthQuantity(createArrayBufferWithDataView);

export const encodeMidiEvent: EncodeMidiEventFunction = createEncodeMidiEvent(
  createArrayBufferWithDataView,
  createEncodeMidiMetaEventWithText(
    createArrayBufferWithDataView,
    joinArrayBuffers,
    new TextEncoder(),
    writeVariableLengthQuantity,
  ),
  joinArrayBuffers,
  writeVariableLengthQuantity,
);
