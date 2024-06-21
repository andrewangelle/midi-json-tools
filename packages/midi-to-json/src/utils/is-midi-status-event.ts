import type { MidiEvent, MidiStatusEvent } from '../types';

export function isMidiStatusEvent(
  midiEvent: Partial<MidiEvent>,
): midiEvent is MidiStatusEvent {
  return (<MidiStatusEvent>midiEvent).channel !== undefined;
}
