import type { MidiSysexEvent } from '~/types';
import { hexify } from '~/utils/hexify';
import { readVariableLengthQuantity } from '~/utils/read-variable-length-quantity';

/**
 * @name parseSysexEvent
 * @description This function handles parsing system exclusive messages for a midi event
 * @param {DataView} dataView
 * @param {number} offset
 * @returns {object}
 */
export function parseSysexEvent(
  dataView: DataView,
  offset: number,
): { event: MidiSysexEvent; offset: number } {
  const { offset: nextOffset, value: length } = readVariableLengthQuantity(
    dataView,
    offset,
  );

  return {
    event: <MidiSysexEvent>{
      sysex: hexify(dataView, nextOffset, length),
    },
    offset: nextOffset + length,
  };
}
