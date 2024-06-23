import type { MidiEvent, MidiStatusEvent } from '../types';

/**
 * @name isMidiStatusEvent
 * @description type guard for a MidiStatusEvent object
 * @param {Partial<MidiEvent>} midiEvent
 * @returns {boolean}
 */
export function isMidiStatusEvent(
  midiEvent: Partial<MidiEvent>,
): midiEvent is MidiStatusEvent {
  return (<MidiStatusEvent>midiEvent).channel !== undefined;
}
