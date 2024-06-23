import type {
  EncodeMidiEventFunction,
  WriteVariableLengthQuantityFunction,
} from './types';
import { createArrayBufferWithDataView } from './utils/create-array-buffer-with-data-view';
import { createEncodeMidiEvent } from './utils/create-encode-midi-event';
import { createEncodeMidiMetaEventWithText } from './utils/encode-midi-meta-event-with-text';
import { joinArrayBuffers } from './utils/join-array-buffers';
import { createWriteVariableLengthQuantity } from './utils/write-variable-length-quantity';

/**
 * @name writeVariableLengthQuantity
 * @description Writes the length of the array buffer
 */
export const writeVariableLengthQuantity: WriteVariableLengthQuantityFunction =
  createWriteVariableLengthQuantity(createArrayBufferWithDataView);

/**
 * @name encodeMidiEvent
 * @description Handles encodes the given event originating from a given midi track
 */
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
