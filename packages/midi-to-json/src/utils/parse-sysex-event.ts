import type { MidiSysexEvent } from '../types';
import { hexify } from './hexify';
import { readVariableLengthQuantity } from './read-variable-length-quantity';

/**
 * This function handles parsing system exclusive messages for a midi event
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
