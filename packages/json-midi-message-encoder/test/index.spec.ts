import { encodeMidiEvent } from '../src';
import { transformBufferToArray } from './utils';

describe('encodeMidiEvent', () => {
  it('should encode a channel prefix event', () => {
    const arrayBuffer = encodeMidiEvent({ channelPrefix: 12 });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([255, 32, 1, 12]);
  });

  it('should encode a channel pressure event', () => {
    const arrayBuffer = encodeMidiEvent({
      channel: 4,
      channelPressure: { pressure: 46 },
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([13, 46]);
  });

  it('should encode a control change event', () => {
    const arrayBuffer = encodeMidiEvent({
      channel: 7,
      controlChange: { type: 23, value: 50 },
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([183, 23, 50]);
  });

  it('should encode a copyright notice event', () => {
    const arrayBuffer = encodeMidiEvent({
      copyrightNotice: '6/5/2003 by  ANTONIO LAVIANO (montevideo uruguay)',
      delta: 0,
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 2, 49, 54, 47, 53, 47, 50, 48, 48, 51, 32, 98, 121, 32, 32, 65, 78,
      84, 79, 78, 73, 79, 32, 76, 65, 86, 73, 65, 78, 79, 32, 40, 109, 111, 110,
      116, 101, 118, 105, 100, 101, 111, 32, 117, 114, 117, 103, 117, 97, 121,
      41,
    ]);
  });

  it('should encode a cue point event', () => {
    const arrayBuffer = encodeMidiEvent({
      cuePoint: 'a fake cue point',
      delta: 0,
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 7, 16, 97, 32, 102, 97, 107, 101, 32, 99, 117, 101, 32, 112, 111,
      105, 110, 116,
    ]);
  });

  it('should encode a device name event', () => {
    const arrayBuffer = encodeMidiEvent({ deviceName: 'Steinway Grand Piano' });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 9, 20, 83, 116, 101, 105, 110, 119, 97, 121, 32, 71, 114, 97, 110,
      100, 32, 80, 105, 97, 110, 111,
    ]);
  });

  it('should encode an end of track event', () => {
    const arrayBuffer = encodeMidiEvent({ endOfTrack: true });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([255, 47, 0]);
  });

  it('should encode a instrument name event', () => {
    const arrayBuffer = encodeMidiEvent({
      instrumentName: 'Steinway Grand Piano',
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 4, 20, 83, 116, 101, 105, 110, 119, 97, 121, 32, 71, 114, 97, 110,
      100, 32, 80, 105, 97, 110, 111,
    ]);
  });

  it('should encode a key pressure event', () => {
    const arrayBuffer = encodeMidiEvent({
      channel: 4,
      keyPressure: { noteNumber: 54, pressure: 46 },
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([14, 54, 46]);
  });

  it('should encode a key signature event', () => {
    const arrayBuffer = encodeMidiEvent({
      keySignature: { key: 15, scale: 34 },
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 89, 2, 15, 34,
    ]);
  });

  it('should encode a lyric event', () => {
    const arrayBuffer = encodeMidiEvent({ lyric: 'a fake lyric' });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 5, 12, 97, 32, 102, 97, 107, 101, 32, 108, 121, 114, 105, 99,
    ]);
  });

  it('should encode a marker event', () => {
    const arrayBuffer = encodeMidiEvent({ marker: 'a fake marker' });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 6, 13, 97, 32, 102, 97, 107, 101, 32, 109, 97, 114, 107, 101, 114,
    ]);
  });

  it('should encode a midi port event', () => {
    const arrayBuffer = encodeMidiEvent({ midiPort: 42 });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([255, 33, 1, 42]);
  });

  it('should encode a note off event', () => {
    const arrayBuffer = encodeMidiEvent({
      channel: 6,
      noteOff: { noteNumber: 102, velocity: 3 },
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([134, 102, 3]);
  });

  it('should encode a note on event', () => {
    const arrayBuffer = encodeMidiEvent({
      channel: 3,
      noteOn: { noteNumber: 12, velocity: 73 },
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([147, 12, 73]);
  });

  it('should encode a pitch bend event', () => {
    const arrayBuffer = encodeMidiEvent({ channel: 6, pitchBend: 138 });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([230, 10, 1]);
  });

  it('should encode a program change event', () => {
    const arrayBuffer = encodeMidiEvent({
      channel: 1,
      programChange: { programNumber: 65 },
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([193, 65]);
  });

  it('should encode a program name event', () => {
    const arrayBuffer = encodeMidiEvent({ programName: 'a fake program name' });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 8, 19, 97, 32, 102, 97, 107, 101, 32, 112, 114, 111, 103, 114, 97,
      109, 32, 110, 97, 109, 101,
    ]);
  });

  it('should encode a sequencer specific data event', () => {
    const arrayBuffer = encodeMidiEvent({ sequencerSpecificData: '000041' });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 127, 3, 0, 0, 65,
    ]);
  });

  it('should encode a set tempo event', () => {
    const arrayBuffer = encodeMidiEvent({
      setTempo: { microsecondsPerQuarter: 500000 },
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 81, 3, 7, 161, 32,
    ]);
  });

  it('should encode a smpte offset event', () => {
    const arrayBuffer = encodeMidiEvent({
      smpteOffset: {
        frame: 0,
        frameRate: 30,
        hour: 0,
        minutes: 0,
        seconds: 0,
        subFrame: 0,
      },
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 84, 5, 96, 0, 0, 0, 0,
    ]);
  });

  it('should encode a sysex event', () => {
    const arrayBuffer = encodeMidiEvent({ channel: 7, sysex: '7E7F0901F7' });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      240, 5, 126, 127, 9, 1, 247,
    ]);
  });

  it('should encode a text event', () => {
    const arrayBuffer = encodeMidiEvent({ text: 'a fake text' });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 1, 11, 97, 32, 102, 97, 107, 101, 32, 116, 101, 120, 116,
    ]);
  });

  it('should encode a time signature event', () => {
    const arrayBuffer = encodeMidiEvent({
      timeSignature: {
        denominator: 4,
        metronome: 24,
        numerator: 4,
        thirtyseconds: 8,
      },
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 88, 4, 4, 2, 24, 8,
    ]);
  });

  it('should encode a track name event', () => {
    const arrayBuffer = encodeMidiEvent({
      trackName: 'a fake track name',
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 3, 17, 97, 32, 102, 97, 107, 101, 32, 116, 114, 97, 99, 107, 32, 110,
      97, 109, 101,
    ]);
  });

  it('should encode an unknown text event', () => {
    const arrayBuffer = encodeMidiEvent({
      metaTypeByte: '0C',
      text: 'a fake text',
    });

    expect(transformBufferToArray(arrayBuffer)).to.deep.equal([
      255, 12, 11, 97, 32, 102, 97, 107, 101, 32, 116, 101, 120, 116,
    ]);
  });
});
