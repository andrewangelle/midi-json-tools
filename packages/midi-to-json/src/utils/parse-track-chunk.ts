import { isMidiStatusEvent } from './is-midi-status-event';
import { parseEvent } from './parse-event';
import { stringify } from './stringify';

export function parseTrackChunk(dataView: DataView, offset: number) {
  if (stringify(dataView, offset, 4) !== 'MTrk') {
    throw new Error(
      `Unexpected characters "${stringify(dataView, offset, 4)}" found instead of "MTrk"`,
    );
  }

  const events = [];
  const length = dataView.getUint32(offset + 4) + offset + 8;

  let lastStatusByte: null | number = null;
  let nextOffset = offset + 8;

  while (nextOffset < length) {
    const result = parseEvent(dataView, nextOffset, lastStatusByte);
    const { event, eventTypeByte } = result;

    events.push(event);
    nextOffset = result.offset;

    if (isMidiStatusEvent(event) && (eventTypeByte & 0x80) > 0) {
      lastStatusByte = eventTypeByte;
    }
  }

  return {
    offset: nextOffset,
    track: events,
  };
}
