import type { CreateArrayBufferWithDataViewFunction } from '../types';

/**
 * @name createArrayBufferWithDataView
 * @description This function takes in a byte length and instantiates an ArrayBuffer and DataView instance
 */
export const createArrayBufferWithDataView: CreateArrayBufferWithDataViewFunction =
  (length) => {
    const arrayBuffer = new ArrayBuffer(length);
    const dataView = new DataView(arrayBuffer);

    return { arrayBuffer, dataView };
  };
