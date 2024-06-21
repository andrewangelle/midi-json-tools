import { createArrayBufferWithDataView } from '../src/utils/create-array-buffer-with-data-view';
import { createWriteVariableLengthQuantity } from '../src/utils/write-variable-length-quantity';
import { transformBufferToArray } from './utils';

describe('writeVariableLengthQuantity', () => {
  it('should encode a number which fits into a single byte', () => {
    const value = Math.floor(Math.random() * 128);
    const writeVariableLengthQuantity = createWriteVariableLengthQuantity(
      createArrayBufferWithDataView,
    );
    const arrayBuffer = writeVariableLengthQuantity(value);

    expect(arrayBuffer.byteLength).to.equal(1);
    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([value]);
  });

  it('should encode 128 in two bytes', () => {
    const writeVariableLengthQuantity = createWriteVariableLengthQuantity(
      createArrayBufferWithDataView,
    );
    const arrayBuffer = writeVariableLengthQuantity(128);

    expect(arrayBuffer.byteLength).to.equal(2);
    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([129, 0]);
  });

  it('should encode a number which needs to be encoded in two bytes', () => {
    const value = Math.floor(128 + Math.random() * 16256);
    const writeVariableLengthQuantity = createWriteVariableLengthQuantity(
      createArrayBufferWithDataView,
    );
    const arrayBuffer = writeVariableLengthQuantity(value);

    expect(arrayBuffer.byteLength).to.equal(2);
    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      ((value >> 7) & 0x7f) | 0x80,
      value & 0x7f,
    ]);
  });

  it('should encode 16384 in three bytes', () => {
    const writeVariableLengthQuantity = createWriteVariableLengthQuantity(
      createArrayBufferWithDataView,
    );
    const arrayBuffer = writeVariableLengthQuantity(16384);

    expect(arrayBuffer.byteLength).to.equal(3);
    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([129, 128, 0]);
  });

  it('should encode a number which needs to be encoded in three bytes', () => {
    const value = Math.floor(16384 + Math.random() * 2080768);
    const writeVariableLengthQuantity = createWriteVariableLengthQuantity(
      createArrayBufferWithDataView,
    );
    const arrayBuffer = writeVariableLengthQuantity(value);

    expect(arrayBuffer.byteLength).to.equal(3);
    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      ((value >> 14) & 0x7f) | 0x80,
      ((value >> 7) & 0x7f) | 0x80,
      value & 0x7f,
    ]);
  });
});
