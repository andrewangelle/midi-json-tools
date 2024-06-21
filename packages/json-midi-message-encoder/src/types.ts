import type { TextEncoder } from 'node:util';
import type { MidiEvent, MidiMetaEvent } from '@midi-json-tools/midi-to-json';

export type CreateArrayBufferWithDataViewFunction = (length: number) => {
  arrayBuffer: ArrayBuffer;
  dataView: DataView;
};

export type EncodeMidiEventFactory = (
  createArrayBufferWithDataView: CreateArrayBufferWithDataViewFunction,
  encodeMidiMetaEventWithText: EncodeMidiMetaEventWithTextFunction,
  joinArrayBuffers: JoinArrayBuffersFunction,
  writeVariableLengthQuantity: WriteVariableLengthQuantityFunction,
) => EncodeMidiEventFunction;

export type EncodeMidiEventFunction = (
  event: Partial<MidiEvent>,
) => ArrayBuffer;

export type EncodeMidiMetaEventWithTextFactory = (
  createArrayBufferWithDataView: CreateArrayBufferWithDataViewFunction,
  joinArrayBuffers: JoinArrayBuffersFunction,
  textEncoder: TextEncoder,
  writeVariableLengthQuantity: WriteVariableLengthQuantityFunction,
) => EncodeMidiMetaEventWithTextFunction;

export type EncodeMidiMetaEventWithTextFunction = <
  MidiMetaEventExtended extends MidiMetaEvent & {
    [Key in MidiMetaEventExtendedKey]: string;
  },
  MidiMetaEventExtendedKey extends keyof MidiMetaEventExtended,
>(
  event: MidiMetaEventExtended,
  metaTypeByte: number,
  key: MidiMetaEventExtendedKey,
) => ArrayBuffer;

export type JoinArrayBuffersFunction = (
  arrayBuffers: ArrayBuffer[],
) => ArrayBuffer;

export type WriteVariableLengthQuantityFactory = (
  createArrayBufferWithDataView: CreateArrayBufferWithDataViewFunction,
) => WriteVariableLengthQuantityFunction;

export type WriteVariableLengthQuantityFunction = (
  value: number,
) => ArrayBuffer;
