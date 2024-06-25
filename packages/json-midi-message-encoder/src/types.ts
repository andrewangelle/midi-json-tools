import type { TextEncoder } from 'node:util';
import type { MidiEvent, MidiMetaEvent } from '@midi-json-tools/midi-to-json';

/**
 * Type def for CreateArrayBufferWithDataViewFunction
 */
export type CreateArrayBufferWithDataViewFunction = (length: number) => {
  arrayBuffer: ArrayBuffer;
  dataView: DataView;
};

/**
 * Type def for EncodeMidiEventFactory
 */
export type EncodeMidiEventFactory = (
  createArrayBufferWithDataView: CreateArrayBufferWithDataViewFunction,
  encodeMidiMetaEventWithText: EncodeMidiMetaEventWithTextFunction,
  joinArrayBuffers: JoinArrayBuffersFunction,
  writeVariableLengthQuantity: WriteVariableLengthQuantityFunction,
) => EncodeMidiEventFunction;

/**
 * Type def for EncodeMidiEventFunction
 */
export type EncodeMidiEventFunction = (
  event: Partial<MidiEvent>,
) => ArrayBuffer;

/**
 * Type def for EncodeMidiMetaEventWithTextFactory
 */
export type EncodeMidiMetaEventWithTextFactory = (
  createArrayBufferWithDataView: CreateArrayBufferWithDataViewFunction,
  joinArrayBuffers: JoinArrayBuffersFunction,
  textEncoder: TextEncoder,
  writeVariableLengthQuantity: WriteVariableLengthQuantityFunction,
) => EncodeMidiMetaEventWithTextFunction;

/**
 * Type def for EncodeMidiMetaEventWithTextFunction
 */
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

/**
 * Type def for JoinArrayBuffersFunction
 */
export type JoinArrayBuffersFunction = (
  arrayBuffers: ArrayBuffer[],
) => ArrayBuffer;

/**
 * Type def for WriteVariableLengthQuantityFactory
 */
export type WriteVariableLengthQuantityFactory = (
  createArrayBufferWithDataView: CreateArrayBufferWithDataViewFunction,
) => WriteVariableLengthQuantityFunction;

/**
 * Type def for WriteVariableLengthQuantityFunction
 */
export type WriteVariableLengthQuantityFunction = (
  value: number,
) => ArrayBuffer;
