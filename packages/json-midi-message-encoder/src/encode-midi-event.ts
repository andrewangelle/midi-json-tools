import { createArrayBufferWithDataView } from './utils/create-array-buffer-with-data-view';
import { createEncodeMidiEvent } from './utils/encode-midi-event';
import { createEncodeMidiMetaEventWithText } from './utils/encode-midi-meta-event-with-text';
import { joinArrayBuffers } from './utils/join-array-buffers';
import { createWriteVariableLengthQuantity } from './utils/write-variable-length-quantity';

export const writeVariableLengthQuantity = createWriteVariableLengthQuantity(
  createArrayBufferWithDataView,
);

export const encodeMidiEvent = createEncodeMidiEvent(
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
