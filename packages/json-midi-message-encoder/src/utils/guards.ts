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
 * @name isMidiUnknownTextEvent
 * @description type guard for a MidiUnknownTextEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiUnknownTextEvent(
  event: Partial<MidiEvent>,
): event is MidiUnknownTextEvent {
  return (<MidiUnknownTextEvent>event).metaTypeByte !== undefined;
}

/**
 * @name isMidiTrackNameEvent
 * @description type guard for a MidiTrackNameEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiTrackNameEvent(
  event: Partial<MidiEvent>,
): event is MidiTrackNameEvent {
  return (<MidiTrackNameEvent>event).trackName !== undefined;
}

/**
 * @name isMidiTimeSignatureEvent
 * @description type guard for a MidiTimeSignatureEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiTimeSignatureEvent(
  event: Partial<MidiEvent>,
): event is MidiTimeSignatureEvent {
  return (<MidiTimeSignatureEvent>event).timeSignature !== undefined;
}

/**
 * @name isMidiTextEvent
 * @description type guard for a MidiTextEvent object
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
 * @name isMidiSysexEvent
 * @description type guard for a MidiSysexEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiSysexEvent(
  event: Partial<MidiEvent>,
): event is MidiSysexEvent {
  return (<MidiSysexEvent>event).sysex !== undefined;
}

/**
 * @name isMidiSetTempoEvent
 * @description type guard for a MidiSetTempoEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiSetTempoEvent(
  event: Partial<MidiEvent>,
): event is MidiSetTempoEvent {
  return (<MidiSetTempoEvent>event).setTempo !== undefined;
}

/**
 * @name isMidiSmpteOffsetEvent
 * @description type guard for a MidiSmpteOffsetEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiSmpteOffsetEvent(
  event: Partial<MidiEvent>,
): event is MidiSmpteOffsetEvent {
  return (<MidiSmpteOffsetEvent>event).smpteOffset !== undefined;
}

/**
 * @name isMidiSequencerSpecificEvent
 * @description type guard for a MidiSequencerSpecificEvent object
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
 * @name isMidiProgramNameEvent
 * @description type guard for a MidiProgramNameEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiProgramNameEvent(
  event: Partial<MidiEvent>,
): event is MidiProgramNameEvent {
  return (<MidiProgramNameEvent>event).programName !== undefined;
}

/**
 * @name isMidiProgramChangeEvent
 * @description type guard for a MidiProgramChangeEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiProgramChangeEvent(
  event: Partial<MidiEvent>,
): event is MidiProgramChangeEvent {
  return (<MidiProgramChangeEvent>event).programChange !== undefined;
}

/**
 * @name isMidiPitchBendEvent
 * @description type guard for a MidiPitchBendEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiPitchBendEvent(
  event: Partial<MidiEvent>,
): event is MidiPitchBendEvent {
  return (<MidiPitchBendEvent>event).pitchBend !== undefined;
}

/**
 * @name isMidiNoteOnEvent
 * @description type guard for a MidiNoteOnEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiNoteOnEvent(
  event: Partial<MidiEvent>,
): event is MidiNoteOnEvent {
  return (<MidiNoteOnEvent>event).noteOn !== undefined;
}

/**
 * @name isMidiNoteOffEvent
 * @description type guard for a MidiNoteOffEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiNoteOffEvent(
  event: Partial<MidiEvent>,
): event is MidiNoteOffEvent {
  return (<MidiNoteOffEvent>event).noteOff !== undefined;
}

/**
 * @name isMidiMidiPortEvent
 * @description type guard for a MidiMidiPortEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiMidiPortEvent(
  event: Partial<MidiEvent>,
): event is MidiMidiPortEvent {
  return (<MidiMidiPortEvent>event).midiPort !== undefined;
}

/**
 * @name isMidiMarkerEvent
 * @description type guard for a MidiMarkerEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiMarkerEvent(
  event: Partial<MidiEvent>,
): event is MidiMarkerEvent {
  return (<MidiMarkerEvent>event).marker !== undefined;
}

/**
 * @name isMidiLyricEvent
 * @description type guard for a MidiLyricEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiLyricEvent(
  event: Partial<MidiEvent>,
): event is MidiLyricEvent {
  return (<MidiLyricEvent>event).lyric !== undefined;
}

/**
 * @name isMidiKeySignatureEvent
 * @description type guard for a MidiKeySignatureEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiKeySignatureEvent(
  event: Partial<MidiEvent>,
): event is MidiKeySignatureEvent {
  return (<MidiKeySignatureEvent>event).keySignature !== undefined;
}

/**
 * @name isMidiKeyPressureEvent
 * @description type guard for a MidiKeyPressureEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiKeyPressureEvent(
  event: Partial<MidiEvent>,
): event is MidiKeyPressureEvent {
  return (<MidiKeyPressureEvent>event).keyPressure !== undefined;
}

/**
 * @name isMidiInstrumentNameEvent
 * @description type guard for a MidiInstrumentNameEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiInstrumentNameEvent(
  event: Partial<MidiEvent>,
): event is MidiInstrumentNameEvent {
  return (<MidiInstrumentNameEvent>event).instrumentName !== undefined;
}

/**
 * @name isMidiEndOfTrackEvent
 * @description type guard for a MidiEndOfTrackEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiEndOfTrackEvent(
  event: Partial<MidiEvent>,
): event is MidiEndOfTrackEvent {
  return (<MidiEndOfTrackEvent>event).endOfTrack !== undefined;
}

/**
 * @name isMidiDeviceNameEvent
 * @description type guard for a MidiDeviceNameEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiDeviceNameEvent(
  event: Partial<MidiEvent>,
): event is MidiDeviceNameEvent {
  return (<MidiDeviceNameEvent>event).deviceName !== undefined;
}

/**
 * @name isMidiCuePointEvent
 * @description type guard for a MidiCuePointEvent object
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
 * @name isMidiCopyrightNoticeEvent
 * @description type guard for a MidiCopyrightNoticeEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiCopyrightNoticeEvent(
  event: Partial<MidiEvent>,
): event is MidiCopyrightNoticeEvent {
  return (<MidiCopyrightNoticeEvent>event).copyrightNotice !== undefined;
}

/**
 * @name isMidiControlChangeEvent
 * @description type guard for a MidiControlChangeEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiControlChangeEvent(
  event: Partial<MidiEvent>,
): event is MidiControlChangeEvent {
  return (<MidiControlChangeEvent>event).controlChange !== undefined;
}

/**
 * @name isMidiChannelPressureEvent
 * @description type guard for a MidiChannelPressureEvent object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiChannelPressureEvent(
  event: Partial<MidiEvent>,
): event is MidiChannelPressureEvent {
  return (<MidiChannelPressureEvent>event).channelPressure !== undefined;
}

/**
 * @name isMidiChannelPrefixEvent
 * @description type guard for a MidiChannelPrefix event object
 * @param {Partial<MidiEvent>} event
 * @returns {boolean}
 */
export function isMidiChannelPrefixEvent(
  event: Partial<MidiEvent>,
): event is MidiChannelPrefixEvent {
  return (<MidiChannelPrefixEvent>event).channelPrefix !== undefined;
}
