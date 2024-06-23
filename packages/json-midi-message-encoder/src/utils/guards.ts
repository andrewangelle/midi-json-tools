import type {
  MidiChannelPrefixEvent,
  MidiChannelPressureEvent,
  MidiControlChangeEvent,
  MidiCopyrightNoticeEvent,
  MidiCuePointEvent,
  MidiDeviceNameEvent,
  MidiEndOfTrackEvent,
  MidiEvent,
  MidiInstrumentNameEvent,
  MidiKeyPressureEvent,
  MidiKeySignatureEvent,
  MidiLyricEvent,
  MidiMarkerEvent,
  MidiMidiPortEvent,
  MidiNoteOffEvent,
  MidiNoteOnEvent,
  MidiPitchBendEvent,
  MidiProgramChangeEvent,
  MidiProgramNameEvent,
  MidiSequencerSpecificEvent,
  MidiSetTempoEvent,
  MidiSmpteOffsetEvent,
  MidiSysexEvent,
  MidiTextEvent,
  MidiTimeSignatureEvent,
  MidiTrackNameEvent,
  MidiUnknownTextEvent,
} from '@midi-json-tools/midi-to-json';

/**
 * type guard for a MidiUnknownTextEvent object
 */
export function isMidiUnknownTextEvent(
  event: Partial<MidiEvent>,
): event is MidiUnknownTextEvent {
  return (<MidiUnknownTextEvent>event).metaTypeByte !== undefined;
}

/**
 * type guard for a MidiTrackNameEvent object
 */
export function isMidiTrackNameEvent(
  event: Partial<MidiEvent>,
): event is MidiTrackNameEvent {
  return (<MidiTrackNameEvent>event).trackName !== undefined;
}

/**
 * type guard for a MidiTimeSignatureEvent object
 */
export function isMidiTimeSignatureEvent(
  event: Partial<MidiEvent>,
): event is MidiTimeSignatureEvent {
  return (<MidiTimeSignatureEvent>event).timeSignature !== undefined;
}

/**
 * type guard for a MidiTextEvent object
 */
export function isMidiTextEvent(
  event: Partial<MidiEvent>,
): event is MidiTextEvent {
  return (
    (<MidiTextEvent>event).text !== undefined &&
    (<MidiUnknownTextEvent>event).metaTypeByte === undefined
  );
}

/**
 * type guard for a MidiSysexEvent object
 */
export function isMidiSysexEvent(
  event: Partial<MidiEvent>,
): event is MidiSysexEvent {
  return (<MidiSysexEvent>event).sysex !== undefined;
}

/**
 * type guard for a MidiSetTempoEvent object
 */
export function isMidiSetTempoEvent(
  event: Partial<MidiEvent>,
): event is MidiSetTempoEvent {
  return (<MidiSetTempoEvent>event).setTempo !== undefined;
}

/**
 * type guard for a MidiSmpteOffsetEvent object
 */
export function isMidiSmpteOffsetEvent(
  event: Partial<MidiEvent>,
): event is MidiSmpteOffsetEvent {
  return (<MidiSmpteOffsetEvent>event).smpteOffset !== undefined;
}

/**
 * type guard for a MidiSequencerSpecificEvent object
 */
export function isMidiSequencerSpecificEvent(
  event: Partial<MidiEvent>,
): event is MidiSequencerSpecificEvent {
  return (
    (<MidiSequencerSpecificEvent>event).sequencerSpecificData !== undefined
  );
}

/**
 * type guard for a MidiProgramNameEvent object
 */
export function isMidiProgramNameEvent(
  event: Partial<MidiEvent>,
): event is MidiProgramNameEvent {
  return (<MidiProgramNameEvent>event).programName !== undefined;
}

/**
 * type guard for a MidiProgramChangeEvent object
 */
export function isMidiProgramChangeEvent(
  event: Partial<MidiEvent>,
): event is MidiProgramChangeEvent {
  return (<MidiProgramChangeEvent>event).programChange !== undefined;
}

/**
 * type guard for a MidiPitchBendEvent object
 */
export function isMidiPitchBendEvent(
  event: Partial<MidiEvent>,
): event is MidiPitchBendEvent {
  return (<MidiPitchBendEvent>event).pitchBend !== undefined;
}

/**
 * type guard for a MidiNoteOnEvent object
 */
export function isMidiNoteOnEvent(
  event: Partial<MidiEvent>,
): event is MidiNoteOnEvent {
  return (<MidiNoteOnEvent>event).noteOn !== undefined;
}

/**
 * type guard for a MidiNoteOffEvent object
 */
export function isMidiNoteOffEvent(
  event: Partial<MidiEvent>,
): event is MidiNoteOffEvent {
  return (<MidiNoteOffEvent>event).noteOff !== undefined;
}

/**
 * type guard for a MidiMidiPortEvent object
 */
export function isMidiMidiPortEvent(
  event: Partial<MidiEvent>,
): event is MidiMidiPortEvent {
  return (<MidiMidiPortEvent>event).midiPort !== undefined;
}

/**
 * type guard for a MidiMarkerEvent object
 */
export function isMidiMarkerEvent(
  event: Partial<MidiEvent>,
): event is MidiMarkerEvent {
  return (<MidiMarkerEvent>event).marker !== undefined;
}

/**
 * type guard for a MidiLyricEvent object
 */
export function isMidiLyricEvent(
  event: Partial<MidiEvent>,
): event is MidiLyricEvent {
  return (<MidiLyricEvent>event).lyric !== undefined;
}

/**
 * type guard for a MidiKeySignatureEvent object
 */
export function isMidiKeySignatureEvent(
  event: Partial<MidiEvent>,
): event is MidiKeySignatureEvent {
  return (<MidiKeySignatureEvent>event).keySignature !== undefined;
}

/**
 * type guard for a MidiKeyPressureEvent object
 */
export function isMidiKeyPressureEvent(
  event: Partial<MidiEvent>,
): event is MidiKeyPressureEvent {
  return (<MidiKeyPressureEvent>event).keyPressure !== undefined;
}

/**
 * type guard for a MidiInstrumentNameEvent object
 */
export function isMidiInstrumentNameEvent(
  event: Partial<MidiEvent>,
): event is MidiInstrumentNameEvent {
  return (<MidiInstrumentNameEvent>event).instrumentName !== undefined;
}

/**
 * type guard for a MidiEndOfTrackEvent object
 */
export function isMidiEndOfTrackEvent(
  event: Partial<MidiEvent>,
): event is MidiEndOfTrackEvent {
  return (<MidiEndOfTrackEvent>event).endOfTrack !== undefined;
}

/**
 * type guard for a MidiDeviceNameEvent object
 */
export function isMidiDeviceNameEvent(
  event: Partial<MidiEvent>,
): event is MidiDeviceNameEvent {
  return (<MidiDeviceNameEvent>event).deviceName !== undefined;
}

/**
 * type guard for a MidiUnknownTextEvent object
 */
export function isMidiCuePointEvent(
  event: Partial<MidiEvent>,
): event is MidiCuePointEvent {
  return (
    (<MidiCuePointEvent>event).cuePoint !== undefined &&
    (<MidiUnknownTextEvent>event).metaTypeByte === undefined
  );
}

/**
 * type guard for a MidiCopyrightNoticeEvent object
 */
export function isMidiCopyrightNoticeEvent(
  event: Partial<MidiEvent>,
): event is MidiCopyrightNoticeEvent {
  return (<MidiCopyrightNoticeEvent>event).copyrightNotice !== undefined;
}

/**
 * type guard for a MidiControlChangeEvent object
 */
export function isMidiControlChangeEvent(
  event: Partial<MidiEvent>,
): event is MidiControlChangeEvent {
  return (<MidiControlChangeEvent>event).controlChange !== undefined;
}

/**
 * type guard for a MidiChannelPressureEvent object
 */
export function isMidiChannelPressureEvent(
  event: Partial<MidiEvent>,
): event is MidiChannelPressureEvent {
  return (<MidiChannelPressureEvent>event).channelPressure !== undefined;
}

/**
 * type guard for a MidiChannelPrefixEvent object
 */
export function isMidiChannelPrefixEvent(
  event: Partial<MidiEvent>,
): event is MidiChannelPrefixEvent {
  return (<MidiChannelPrefixEvent>event).channelPrefix !== undefined;
}
