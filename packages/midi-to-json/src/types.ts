/**
 * A type of midi value found in an event object
 */
export interface MidiChannelPrefixEvent extends MidiMetaEvent {
  channelPrefix: number;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiUnknownTextEvent extends MidiMetaEvent {
  metaTypeByte: '0A' | '0B' | '0C' | '0D' | '0E' | '0F';
  text: string;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiTrackNameEvent extends MidiMetaEvent {
  trackName: string;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiTimeSignatureEvent extends MidiMetaEvent {
  timeSignature: {
    denominator: number;
    metronome: number;
    numerator: number;
    thirtyseconds: number;
  };
}

/**
 * A type of midi value found in an event object
 */
export interface MidiSysexEvent extends MidiStatusEvent {
  sysex: string;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiStatusEvent extends ValueMap {
  channel: number;

  delta: number;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiSmpteOffsetEvent extends MidiMetaEvent {
  smpteOffset: {
    frame: number;
    frameRate: number;
    hour: number;
    minutes: number;
    seconds: number;
    subFrame: number;
  };
}

/**
 * A type of midi value found in an event object
 */
export interface MidiSetTempoEvent extends MidiMetaEvent {
  setTempo: {
    microsecondsPerQuarter: number;
  };
}

/**
 * A type of midi value found in an event object
 */
export interface MidiSequencerSpecificEvent extends MidiMetaEvent {
  sequencerSpecificData: string;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiProgramNameEvent extends MidiMetaEvent {
  programName: string;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiTextEvent extends MidiMetaEvent {
  text: string;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiProgramChangeEvent extends MidiStatusEvent {
  programChange: {
    programNumber: number;
  };
}

/**
 * A type of midi value found in an event object
 */
export interface MidiPitchBendEvent extends MidiStatusEvent {
  pitchBend: number;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiNoteOnEvent extends MidiStatusEvent {
  noteOn: {
    noteNumber: number;
    velocity: number;
  };
}

/**
 * A type of midi value found in an event object
 */
export interface MidiMetaEvent extends ValueMap {
  delta: number;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiMarkerEvent extends MidiMetaEvent {
  marker: string;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiLyricEvent extends MidiMetaEvent {
  lyric: string;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiNoteOffEvent extends MidiStatusEvent {
  noteOff: {
    noteNumber: number;
    velocity: number;
  };
}

/**
 * A type of midi value found in an event object
 */
export interface MidiKeySignatureEvent extends MidiMetaEvent {
  keySignature: {
    key: number;
    scale: number;
  };
}

/**
 * A type of midi value found in an event object
 */
export interface MidiKeyPressureEvent extends MidiStatusEvent {
  keyPressure: {
    noteNumber: number;
    pressure: number;
  };
}

/**
 * A type of midi value found in an event object
 */
export interface MidiInstrumentNameEvent extends MidiMetaEvent {
  instrumentName: string;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiFile extends ValueMap {
  division: number;
  format: number;
  tracks: MidiEvent[][];
}

/**
 * A type of midi value found in an event object
 */
export interface MidiEndOfTrackEvent extends MidiMetaEvent {
  endOfTrack: boolean;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiDeviceNameEvent extends MidiMetaEvent {
  deviceName: string;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiCuePointEvent extends MidiMetaEvent {
  cuePoint: string;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiCopyrightNoticeEvent extends MidiMetaEvent {
  copyrightNotice: string;
}

/**
 * A type of midi value found in an event object
 */
export interface MidiChannelPressureEvent extends MidiStatusEvent {
  channelPressure: {
    pressure: number;
  };
}

/**
 * A type of midi value found in an event object
 */
export interface MidiControlChangeEvent extends MidiStatusEvent {
  controlChange: {
    type: number;
    value: number;
  };
}

/**
 * A type of midi value found in an event object
 */
export interface MidiMidiPortEvent extends MidiMetaEvent {
  midiPort: number;
}

/**
 * A union of all MidiMetaEvent and MidiStatus Event
 */
export type MidiEvent = MidiMetaEvent | MidiStatusEvent;

/**
 * A union of all midi meta event types
 */
export type MidiMetaEventType =
  | MidiChannelPrefixEvent
  | MidiCopyrightNoticeEvent
  | MidiCuePointEvent
  | MidiDeviceNameEvent
  | MidiEndOfTrackEvent
  | MidiInstrumentNameEvent
  | MidiKeySignatureEvent
  | MidiLyricEvent
  | MidiMarkerEvent
  | MidiMidiPortEvent
  | MidiProgramNameEvent
  | MidiSequencerSpecificEvent
  | MidiSetTempoEvent
  | MidiSmpteOffsetEvent
  | MidiTextEvent
  | MidiTimeSignatureEvent
  | MidiTrackNameEvent
  | MidiUnknownTextEvent;

/**
 * A union of all midi status event types
 */
export type MidiStatusEventType =
  | MidiChannelPressureEvent
  | MidiControlChangeEvent
  | MidiKeyPressureEvent
  | MidiNoteOffEvent
  | MidiNoteOnEvent
  | MidiPitchBendEvent
  | MidiProgramChangeEvent
  | MidiSysexEvent;

/**
 * A union of possible types of ArrayBuffers
 */
export type TypedArray =
  | Float32Array
  | Float64Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Uint8Array
  | Uint8ClampedArray
  | Uint16Array
  | Uint32Array;

/**
 * ValueMapBase
 */
export interface ValueMapBase {
  [key: string]: Value;
}

/**
 * ValueMap that takes in a generic
 */
export type ValueMap<ValueMap extends ValueMapBase = ValueMapBase> = {
  [P in keyof ValueMap]: ValueMap[P];
};

/**
 * A union of possible types of values that may be used
 */
export type Value =
  | boolean
  | null
  | number
  | string
  | Array<Value>
  | RegExp
  | TypedArray
  | ValueMap;
