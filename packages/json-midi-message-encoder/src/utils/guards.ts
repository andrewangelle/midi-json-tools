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

export function isMidiUnknownTextEvent(
  event: Partial<MidiEvent>,
): event is MidiUnknownTextEvent {
  return (<MidiUnknownTextEvent>event).metaTypeByte !== undefined;
}

export function isMidiTrackNameEvent(
  event: Partial<MidiEvent>,
): event is MidiTrackNameEvent {
  return (<MidiTrackNameEvent>event).trackName !== undefined;
}

export function isMidiTimeSignatureEvent(
  event: Partial<MidiEvent>,
): event is MidiTimeSignatureEvent {
  return (<MidiTimeSignatureEvent>event).timeSignature !== undefined;
}

export function isMidiTextEvent(
  event: Partial<MidiEvent>,
): event is MidiTextEvent {
  return (
    (<MidiTextEvent>event).text !== undefined &&
    (<MidiUnknownTextEvent>event).metaTypeByte === undefined
  );
}

export function isMidiSysexEvent(
  event: Partial<MidiEvent>,
): event is MidiSysexEvent {
  return (<MidiSysexEvent>event).sysex !== undefined;
}

export function isMidiSetTempoEvent(
  event: Partial<MidiEvent>,
): event is MidiSetTempoEvent {
  return (<MidiSetTempoEvent>event).setTempo !== undefined;
}

export function isMidiSmpteOffsetEvent(
  event: Partial<MidiEvent>,
): event is MidiSmpteOffsetEvent {
  return (<MidiSmpteOffsetEvent>event).smpteOffset !== undefined;
}

export function isMidiSequencerSpecificEvent(
  event: Partial<MidiEvent>,
): event is MidiSequencerSpecificEvent {
  return (
    (<MidiSequencerSpecificEvent>event).sequencerSpecificData !== undefined
  );
}

export function isMidiProgramNameEvent(
  event: Partial<MidiEvent>,
): event is MidiProgramNameEvent {
  return (<MidiProgramNameEvent>event).programName !== undefined;
}

export function isMidiProgramChangeEvent(
  event: Partial<MidiEvent>,
): event is MidiProgramChangeEvent {
  return (<MidiProgramChangeEvent>event).programChange !== undefined;
}

export function isMidiPitchBendEvent(
  event: Partial<MidiEvent>,
): event is MidiPitchBendEvent {
  return (<MidiPitchBendEvent>event).pitchBend !== undefined;
}

export function isMidiNoteOnEvent(
  event: Partial<MidiEvent>,
): event is MidiNoteOnEvent {
  return (<MidiNoteOnEvent>event).noteOn !== undefined;
}

export function isMidiNoteOffEvent(
  event: Partial<MidiEvent>,
): event is MidiNoteOffEvent {
  return (<MidiNoteOffEvent>event).noteOff !== undefined;
}

export function isMidiMidiPortEvent(
  event: Partial<MidiEvent>,
): event is MidiMidiPortEvent {
  return (<MidiMidiPortEvent>event).midiPort !== undefined;
}

export function isMidiMarkerEvent(
  event: Partial<MidiEvent>,
): event is MidiMarkerEvent {
  return (<MidiMarkerEvent>event).marker !== undefined;
}

export function isMidiLyricEvent(
  event: Partial<MidiEvent>,
): event is MidiLyricEvent {
  return (<MidiLyricEvent>event).lyric !== undefined;
}

export function isMidiKeySignatureEvent(
  event: Partial<MidiEvent>,
): event is MidiKeySignatureEvent {
  return (<MidiKeySignatureEvent>event).keySignature !== undefined;
}

export function isMidiKeyPressureEvent(
  event: Partial<MidiEvent>,
): event is MidiKeyPressureEvent {
  return (<MidiKeyPressureEvent>event).keyPressure !== undefined;
}

export function isMidiInstrumentNameEvent(
  event: Partial<MidiEvent>,
): event is MidiInstrumentNameEvent {
  return (<MidiInstrumentNameEvent>event).instrumentName !== undefined;
}

export function isMidiEndOfTrackEvent(
  event: Partial<MidiEvent>,
): event is MidiEndOfTrackEvent {
  return (<MidiEndOfTrackEvent>event).endOfTrack !== undefined;
}

export function isMidiDeviceNameEvent(
  event: Partial<MidiEvent>,
): event is MidiDeviceNameEvent {
  return (<MidiDeviceNameEvent>event).deviceName !== undefined;
}

export function isMidiCuePointEvent(
  event: Partial<MidiEvent>,
): event is MidiCuePointEvent {
  return (
    (<MidiCuePointEvent>event).cuePoint !== undefined &&
    (<MidiUnknownTextEvent>event).metaTypeByte === undefined
  );
}

export function isMidiCopyrightNoticeEvent(
  event: Partial<MidiEvent>,
): event is MidiCopyrightNoticeEvent {
  return (<MidiCopyrightNoticeEvent>event).copyrightNotice !== undefined;
}

export function isMidiControlChangeEvent(
  event: Partial<MidiEvent>,
): event is MidiControlChangeEvent {
  return (<MidiControlChangeEvent>event).controlChange !== undefined;
}

export function isMidiChannelPressureEvent(
  event: Partial<MidiEvent>,
): event is MidiChannelPressureEvent {
  return (<MidiChannelPressureEvent>event).channelPressure !== undefined;
}

export function isMidiChannelPrefixEvent(
  event: Partial<MidiEvent>,
): event is MidiChannelPrefixEvent {
  return (<MidiChannelPrefixEvent>event).channelPrefix !== undefined;
}
