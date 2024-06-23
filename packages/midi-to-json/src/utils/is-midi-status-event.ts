import type { MidiEvent, MidiStatusEvent } from '../types';

/**
 * type guard for a MidiStatusEvent object
 */
export function isMidiStatusEvent(
  midiEvent: Partial<MidiEvent>,
): midiEvent is MidiStatusEvent {
  return (<MidiStatusEvent>midiEvent).channel !== undefined;
}
