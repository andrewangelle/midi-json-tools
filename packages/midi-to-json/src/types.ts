export interface MidiChannelPrefixEvent extends MidiMetaEvent {
  channelPrefix: number;
}

export interface MidiUnknownTextEvent extends MidiMetaEvent {
  metaTypeByte: '0A' | '0B' | '0C' | '0D' | '0E' | '0F';
  text: string;
}

export interface MidiTrackNameEvent extends MidiMetaEvent {
  trackName: string;
}

export interface MidiTimeSignatureEvent extends MidiMetaEvent {
  timeSignature: {
    denominator: number;
    metronome: number;
    numerator: number;
    thirtyseconds: number;
  };
}

export interface MidiSysexEvent extends MidiStatusEvent {
  sysex: string;
}

export interface MidiStatusEvent extends ValueMap {
  channel: number;

  delta: number;
}

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

export interface MidiSetTempoEvent extends MidiMetaEvent {
  setTempo: {
    microsecondsPerQuarter: number;
  };
}

export interface MidiSequencerSpecificEvent extends MidiMetaEvent {
  sequencerSpecificData: string;
}

export interface MidiProgramNameEvent extends MidiMetaEvent {
  programName: string;
}

export interface MidiTextEvent extends MidiMetaEvent {
  text: string;
}

export interface MidiProgramChangeEvent extends MidiStatusEvent {
  programChange: {
    programNumber: number;
  };
}

export interface MidiPitchBendEvent extends MidiStatusEvent {
  pitchBend: number;
}

export interface MidiNoteOnEvent extends MidiStatusEvent {
  noteOn: {
    noteNumber: number;
    velocity: number;
  };
}

export interface MidiMetaEvent extends ValueMap {
  delta: number;
}

export interface MidiMarkerEvent extends MidiMetaEvent {
  marker: string;
}

export interface MidiLyricEvent extends MidiMetaEvent {
  lyric: string;
}

export interface MidiNoteOffEvent extends MidiStatusEvent {
  noteOff: {
    noteNumber: number;
    velocity: number;
  };
}

export interface MidiKeySignatureEvent extends MidiMetaEvent {
  keySignature: {
    key: number;
    scale: number;
  };
}

export interface MidiKeyPressureEvent extends MidiStatusEvent {
  keyPressure: {
    noteNumber: number;
    pressure: number;
  };
}

export interface MidiInstrumentNameEvent extends MidiMetaEvent {
  instrumentName: string;
}

export interface MidiFile extends ValueMap {
  division: number;
  format: number;
  tracks: MidiEvent[][];
}

export interface MidiEndOfTrackEvent extends MidiMetaEvent {
  endOfTrack: boolean;
}

export interface MidiDeviceNameEvent extends MidiMetaEvent {
  deviceName: string;
}

export interface MidiCuePointEvent extends MidiMetaEvent {
  cuePoint: string;
}

export interface MidiCopyrightNoticeEvent extends MidiMetaEvent {
  copyrightNotice: string;
}

export interface MidiChannelPressureEvent extends MidiStatusEvent {
  channelPressure: {
    pressure: number;
  };
}

export interface MidiControlChangeEvent extends MidiStatusEvent {
  controlChange: {
    type: number;
    value: number;
  };
}

export interface MidiMidiPortEvent extends MidiMetaEvent {
  midiPort: number;
}

export type MidiEvent = MidiMetaEvent | MidiStatusEvent;

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

export type MidiStatusEventType =
  | MidiChannelPressureEvent
  | MidiControlChangeEvent
  | MidiKeyPressureEvent
  | MidiNoteOffEvent
  | MidiNoteOnEvent
  | MidiPitchBendEvent
  | MidiProgramChangeEvent
  | MidiSysexEvent;

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

export interface ValueMapBase {
  [key: string]: Value;
}

export type ValueMap<ValueMap extends ValueMapBase = ValueMapBase> = {
  [P in keyof ValueMap]: ValueMap[P];
};

export type Value =
  | boolean
  | null
  | number
  | string
  | Array<Value>
  | RegExp
  | TypedArray
  | ValueMap;
