import type {
  MidiChannelPressureEvent,
  MidiControlChangeEvent,
  MidiEvent,
  MidiKeyPressureEvent,
  MidiNoteOffEvent,
  MidiNoteOnEvent,
  MidiPitchBendEvent,
  MidiProgramChangeEvent,
  MidiStatusEvent,
} from '../types';
import { hexifyNumber } from './hexify-number';

export function parseMidiEvent(
  statusByte: number,
  dataView: DataView,
  offset: number,
  lastStatusByte: null | number,
): { event: MidiEvent; offset: number } {
  const sanitizedLastStatusByte =
    (statusByte & 0x80) === 0 ? lastStatusByte : null;
  const eventType =
    (sanitizedLastStatusByte === null ? statusByte : sanitizedLastStatusByte) >>
    4;

  let event: MidiStatusEvent;
  let sanitizedOffset = sanitizedLastStatusByte === null ? offset : offset - 1;

  if (eventType === 0x08) {
    event = <MidiNoteOffEvent>{
      noteOff: {
        noteNumber: dataView.getUint8(sanitizedOffset),
        velocity: dataView.getUint8(sanitizedOffset + 1),
      },
    };

    sanitizedOffset += 2;
  } else if (eventType === 0x09) {
    const noteNumber = dataView.getUint8(sanitizedOffset);
    const velocity = dataView.getUint8(sanitizedOffset + 1);

    if (velocity === 0) {
      event = <MidiNoteOffEvent>{
        noteOff: {
          noteNumber,
          velocity,
        },
      };
    } else {
      event = <MidiNoteOnEvent>{
        noteOn: {
          noteNumber,
          velocity,
        },
      };
    }

    sanitizedOffset += 2;
  } else if (eventType === 0x0a) {
    event = <MidiKeyPressureEvent>{
      keyPressure: {
        noteNumber: dataView.getUint8(sanitizedOffset),
        pressure: dataView.getUint8(sanitizedOffset + 1),
      },
    };

    sanitizedOffset += 2;
  } else if (eventType === 0x0b) {
    event = <MidiControlChangeEvent>{
      controlChange: {
        type: dataView.getUint8(sanitizedOffset),
        value: dataView.getUint8(sanitizedOffset + 1),
      },
    };

    sanitizedOffset += 2;
  } else if (eventType === 0x0c) {
    event = <MidiProgramChangeEvent>{
      programChange: {
        programNumber: dataView.getUint8(sanitizedOffset),
      },
    };

    sanitizedOffset += 1;
  } else if (eventType === 0x0d) {
    event = <MidiChannelPressureEvent>{
      channelPressure: {
        pressure: dataView.getUint8(sanitizedOffset),
      },
    };

    sanitizedOffset += 1;
  } else if (eventType === 0x0e) {
    event = <MidiPitchBendEvent>{
      pitchBend:
        dataView.getUint8(sanitizedOffset) |
        (dataView.getUint8(sanitizedOffset + 1) << 7),
    };

    sanitizedOffset += 2;
  } else {
    throw new Error(
      `Cannot parse a midi event with a type of "${hexifyNumber(eventType)}"`,
    );
  }

  event.channel =
    (sanitizedLastStatusByte === null ? statusByte : sanitizedLastStatusByte) &
    0x0f;

  return { event, offset: sanitizedOffset };
}
