import type { MidiEvent } from '../types';
import { parseMetaEvent } from './parse-meta-event';
import { parseMidiEvent } from './parse-midi-event';
import { parseSysexEvent } from './parse-sysex-event';
import { readVariableLengthQuantity } from './read-variable-length-quantity';

/**
 * @name parseEvent
 * @description This function handles deciding how to parse the given midi event from a midi track
 * @param {DataView} dataView
 * @param {number} offset
 * @param {null | number} lastStatusByte
 * @returns {object}
 */
export function parseEvent(
  dataView: DataView,
  offset: number,
  lastStatusByte: null | number,
): { event: MidiEvent; eventTypeByte: number; offset: number } {
  let result: { event: MidiEvent; offset: number };

  const { offset: nextOffset, value: delta } = readVariableLengthQuantity(
    dataView,
    offset,
  );

  const eventTypeByte = dataView.getUint8(nextOffset);

  if (eventTypeByte === 0xf0) {
    result = parseSysexEvent(dataView, nextOffset + 1);
  } else if (eventTypeByte === 0xff) {
    result = parseMetaEvent(dataView, nextOffset + 1);
  } else {
    result = parseMidiEvent(
      eventTypeByte,
      dataView,
      nextOffset + 1,
      lastStatusByte,
    );
  }

  return { ...result, event: { ...result.event, delta }, eventTypeByte };
}
