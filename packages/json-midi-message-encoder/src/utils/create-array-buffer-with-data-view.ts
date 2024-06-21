import type { CreateArrayBufferWithDataViewFunction } from '../types';

export const createArrayBufferWithDataView: CreateArrayBufferWithDataViewFunction =
  (length) => {
    const arrayBuffer = new ArrayBuffer(length);
    const dataView = new DataView(arrayBuffer);

    return { arrayBuffer, dataView };
  };
