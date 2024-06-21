import type {
  MidiChannelPrefixEvent,
  MidiCopyrightNoticeEvent,
  MidiCuePointEvent,
  MidiDeviceNameEvent,
  MidiEndOfTrackEvent,
  MidiInstrumentNameEvent,
  MidiKeySignatureEvent,
  MidiLyricEvent,
  MidiMarkerEvent,
  MidiMetaEvent,
  MidiMidiPortEvent,
  MidiProgramNameEvent,
  MidiSequencerSpecificEvent,
  MidiSetTempoEvent,
  MidiSmpteOffsetEvent,
  MidiTextEvent,
  MidiTimeSignatureEvent,
  MidiTrackNameEvent,
  MidiUnknownTextEvent,
} from '../types';
import { hexify } from './hexify';
import { hexifyNumber } from './hexify-number';
import { readVariableLengthQuantity } from './read-variable-length-quantity';
import { stringify } from './stringify';

export function parseMetaEvent(
  dataView: DataView,
  offset: number,
): { event: MidiMetaEvent; offset: number } {
  let event: MidiMetaEvent;

  const metaTypeByte = dataView.getUint8(offset);
  const { offset: nextOffset, value: length } = readVariableLengthQuantity(
    dataView,
    offset + 1,
  );

  if (metaTypeByte === 0x01) {
    event = <MidiTextEvent>{
      text: stringify(dataView, nextOffset, length),
    };
  } else if (metaTypeByte === 0x02) {
    event = <MidiCopyrightNoticeEvent>{
      copyrightNotice: stringify(dataView, nextOffset, length),
    };
  } else if (metaTypeByte === 0x03) {
    event = <MidiTrackNameEvent>{
      trackName: stringify(dataView, nextOffset, length),
    };
  } else if (metaTypeByte === 0x04) {
    event = <MidiInstrumentNameEvent>{
      instrumentName: stringify(dataView, nextOffset, length),
    };
  } else if (metaTypeByte === 0x05) {
    event = <MidiLyricEvent>{
      lyric: stringify(dataView, nextOffset, length),
    };
  } else if (metaTypeByte === 0x06) {
    event = <MidiMarkerEvent>{
      marker: stringify(dataView, nextOffset, length),
    };
  } else if (metaTypeByte === 0x07) {
    event = <MidiCuePointEvent>{
      cuePoint: stringify(dataView, nextOffset, length),
    };
  } else if (metaTypeByte === 0x08) {
    event = <MidiProgramNameEvent>{
      programName: stringify(dataView, nextOffset, length),
    };
  } else if (metaTypeByte === 0x09) {
    event = <MidiDeviceNameEvent>{
      deviceName: stringify(dataView, nextOffset, length),
    };
  } else if (
    metaTypeByte === 0x0a ||
    metaTypeByte === 0x0b ||
    metaTypeByte === 0x0c ||
    metaTypeByte === 0x0d ||
    metaTypeByte === 0x0e ||
    metaTypeByte === 0x0f
  ) {
    event = <MidiUnknownTextEvent>{
      metaTypeByte: hexifyNumber(metaTypeByte),
      text: stringify(dataView, nextOffset, length),
    };
  } else if (metaTypeByte === 0x20) {
    event = <MidiChannelPrefixEvent>{
      channelPrefix: dataView.getUint8(nextOffset),
    };
  } else if (metaTypeByte === 0x21) {
    event = <MidiMidiPortEvent>{
      midiPort: dataView.getUint8(nextOffset),
    };
  } else if (metaTypeByte === 0x2f) {
    // @todo length must be 0

    event = <MidiEndOfTrackEvent>{
      endOfTrack: true,
    };
  } else if (metaTypeByte === 0x51) {
    // @todo length must be 5

    event = <MidiSetTempoEvent>{
      setTempo: {
        microsecondsPerQuarter:
          (dataView.getUint8(nextOffset) << 16) +
          (dataView.getUint8(nextOffset + 1) << 8) +
          dataView.getUint8(nextOffset + 2),
      },
    };
  } else if (metaTypeByte === 0x54) {
    let frameRate: number | undefined;

    // @todo length must be 5

    const hourByte = dataView.getUint8(nextOffset);

    if ((hourByte & 0x60) === 0x00) {
      frameRate = 24;
    } else if ((hourByte & 0x60) === 0x20) {
      frameRate = 25;
    } else if ((hourByte & 0x60) === 0x40) {
      frameRate = 29;
    } else if ((hourByte & 0x60) === 0x60) {
      frameRate = 30;
    }

    event = <MidiSmpteOffsetEvent>{
      smpteOffset: {
        frame: dataView.getUint8(nextOffset + 3),
        frameRate,
        hour: hourByte & 0x1f,
        minutes: dataView.getUint8(nextOffset + 1),
        seconds: dataView.getUint8(nextOffset + 2),
        subFrame: dataView.getUint8(nextOffset + 4),
      },
    };
  } else if (metaTypeByte === 0x58) {
    event = <MidiTimeSignatureEvent>{
      timeSignature: {
        denominator: 2 ** dataView.getUint8(nextOffset + 1),
        metronome: dataView.getUint8(nextOffset + 2),
        numerator: dataView.getUint8(nextOffset),
        thirtyseconds: dataView.getUint8(nextOffset + 3),
      },
    };
  } else if (metaTypeByte === 0x59) {
    // @todo length must be 2

    event = <MidiKeySignatureEvent>{
      keySignature: {
        key: dataView.getInt8(nextOffset),
        scale: dataView.getInt8(nextOffset + 1),
      },
    };
  } else if (metaTypeByte === 0x7f) {
    event = <MidiSequencerSpecificEvent>{
      sequencerSpecificData: hexify(dataView, nextOffset, length),
    };
  } else {
    throw new Error(
      `Cannot parse a meta event with a type of "${hexifyNumber(metaTypeByte)}"`,
    );
  }

  return {
    event,
    offset: nextOffset + length,
  };
}
