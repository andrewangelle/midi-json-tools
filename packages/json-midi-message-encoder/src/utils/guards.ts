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
 * @name isMidiUnknownTextEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiUnknownTextEvent(
  event: Partial<MidiEvent>,
): event is MidiUnknownTextEvent {
  return (<MidiUnknownTextEvent>event).metaTypeByte !== undefined;
}

/**
 * type guard for a MidiTrackNameEvent object
 * @name isMidiTrackNameEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiTrackNameEvent(
  event: Partial<MidiEvent>,
): event is MidiTrackNameEvent {
  return (<MidiTrackNameEvent>event).trackName !== undefined;
}

/**
 * type guard for a MidiTimeSignatureEvent object
 * @name isMidiTimeSignatureEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiTimeSignatureEvent(
  event: Partial<MidiEvent>,
): event is MidiTimeSignatureEvent {
  return (<MidiTimeSignatureEvent>event).timeSignature !== undefined;
}

/**
 * type guard for a MidiTextEvent object
 * @name isMidiTextEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
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
 * @name isMidiSysexEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiSysexEvent(
  event: Partial<MidiEvent>,
): event is MidiSysexEvent {
  return (<MidiSysexEvent>event).sysex !== undefined;
}

/**
 * type guard for a MidiSetTempoEvent object
 * @name isMidiSetTempoEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiSetTempoEvent(
  event: Partial<MidiEvent>,
): event is MidiSetTempoEvent {
  return (<MidiSetTempoEvent>event).setTempo !== undefined;
}

/**
 * type guard for a MidiSmpteOffsetEvent object
 * @name isMidiSmpteOffsetEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiSmpteOffsetEvent(
  event: Partial<MidiEvent>,
): event is MidiSmpteOffsetEvent {
  return (<MidiSmpteOffsetEvent>event).smpteOffset !== undefined;
}

/**
 * type guard for a MidiSequencerSpecificEvent object
 * @name isMidiSequencerSpecificEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
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
 * @name isMidiProgramNameEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiProgramNameEvent(
  event: Partial<MidiEvent>,
): event is MidiProgramNameEvent {
  return (<MidiProgramNameEvent>event).programName !== undefined;
}

/**
 * type guard for a MidiProgramChangeEvent object
 * @name isMidiProgramChangeEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiProgramChangeEvent(
  event: Partial<MidiEvent>,
): event is MidiProgramChangeEvent {
  return (<MidiProgramChangeEvent>event).programChange !== undefined;
}

/**
 * type guard for a MidiPitchBendEvent object
 * @name isMidiPitchBendEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiPitchBendEvent(
  event: Partial<MidiEvent>,
): event is MidiPitchBendEvent {
  return (<MidiPitchBendEvent>event).pitchBend !== undefined;
}

/**
 * type guard for a MidiNoteOnEvent object
 * @name isMidiNoteOnEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiNoteOnEvent(
  event: Partial<MidiEvent>,
): event is MidiNoteOnEvent {
  return (<MidiNoteOnEvent>event).noteOn !== undefined;
}

/**
 * type guard for a MidiNoteOffEvent object
 * @name isMidiNoteOffEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiNoteOffEvent(
  event: Partial<MidiEvent>,
): event is MidiNoteOffEvent {
  return (<MidiNoteOffEvent>event).noteOff !== undefined;
}

/**
 * type guard for a MidiMidiPortEvent object
 * @name isMidiMidiPortEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiMidiPortEvent(
  event: Partial<MidiEvent>,
): event is MidiMidiPortEvent {
  return (<MidiMidiPortEvent>event).midiPort !== undefined;
}

/**
 * type guard for a MidiMarkerEvent object
 * @name isMidiMarkerEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiMarkerEvent(
  event: Partial<MidiEvent>,
): event is MidiMarkerEvent {
  return (<MidiMarkerEvent>event).marker !== undefined;
}

/**
 * type guard for a MidiLyricEvent object
 * @name isMidiLyricEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiLyricEvent(
  event: Partial<MidiEvent>,
): event is MidiLyricEvent {
  return (<MidiLyricEvent>event).lyric !== undefined;
}

/**
 * type guard for a MidiKeySignatureEvent object
 * @name isMidiKeySignatureEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiKeySignatureEvent(
  event: Partial<MidiEvent>,
): event is MidiKeySignatureEvent {
  return (<MidiKeySignatureEvent>event).keySignature !== undefined;
}

/**
 * type guard for a MidiKeyPressureEvent object
 * @name isMidiKeyPressureEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiKeyPressureEvent(
  event: Partial<MidiEvent>,
): event is MidiKeyPressureEvent {
  return (<MidiKeyPressureEvent>event).keyPressure !== undefined;
}

/**
 * type guard for a MidiInstrumentNameEvent object
 * @name isMidiInstrumentNameEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiInstrumentNameEvent(
  event: Partial<MidiEvent>,
): event is MidiInstrumentNameEvent {
  return (<MidiInstrumentNameEvent>event).instrumentName !== undefined;
}

/**
 * type guard for a MidiEndOfTrackEvent object
 * @name isMidiEndOfTrackEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiEndOfTrackEvent(
  event: Partial<MidiEvent>,
): event is MidiEndOfTrackEvent {
  return (<MidiEndOfTrackEvent>event).endOfTrack !== undefined;
}

/**
 * type guard for a MidiDeviceNameEvent object
 * @name isMidiDeviceNameEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiDeviceNameEvent(
  event: Partial<MidiEvent>,
): event is MidiDeviceNameEvent {
  return (<MidiDeviceNameEvent>event).deviceName !== undefined;
}

/**
 * type guard for a MidiCuePointEvent object
 * @name isMidiCuePointEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
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
 * @name isMidiCopyrightNoticeEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiCopyrightNoticeEvent(
  event: Partial<MidiEvent>,
): event is MidiCopyrightNoticeEvent {
  return (<MidiCopyrightNoticeEvent>event).copyrightNotice !== undefined;
}

/**
 * type guard for a MidiControlChangeEvent object
 * @name isMidiControlChangeEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiControlChangeEvent(
  event: Partial<MidiEvent>,
): event is MidiControlChangeEvent {
  return (<MidiControlChangeEvent>event).controlChange !== undefined;
}

/**
 * type guard for a MidiChannelPressureEvent object
 * @name isMidiChannelPressureEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiChannelPressureEvent(
  event: Partial<MidiEvent>,
): event is MidiChannelPressureEvent {
  return (<MidiChannelPressureEvent>event).channelPressure !== undefined;
}

/**
 * type guard for a MidiChannelPrefix event object
 * @name isMidiChannelPrefixEvent
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiChannelPrefixEvent(
  event: Partial<MidiEvent>,
): event is MidiChannelPrefixEvent {
  return (<MidiChannelPrefixEvent>event).channelPrefix !== undefined;
}
