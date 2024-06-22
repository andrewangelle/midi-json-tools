# @midi-json-tools/json-to-midi

Library to convert a JSON representation of a MIDI file to an encoded binary MIDI file.

## Credit

This package and the majority of its code originates from [json-midi-encoder](https://github.com/chrisguttandin/json-midi-encoder). I've updated and removed necessary bits to make it work in a node environment.


## Usage

```
npm i @midi-json-tools/json-to-midi
```
or 
```
yarn add @midi-json-tools/json-to-midi
```
or

```
pnpm add @midi-json-tools/json-to-midi
```

#### Example
```typescript

import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import { jsonToMidi } from '@midi-json-tools/json-to-midi';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const filename = path.join(__dirname, './ExampleMIDIJSON.json');
const response = await fs.readFile(filename);
const json = JSON.parse(response.toString());

const midiFile = jsonToMidi(json);

```

The type expected of the function is also exposed

```typescript
import type { MidiFile } from '@midi-json-tools/midi-to-json';

const example: MidiFile = {
  division: 96,
  format: 2,
  tracks: [
    [
      {
        delta: 0,
        text: 'C note',
      },
      {
        delta: 0,
        endOfTrack: true,
      },
    ],
    [
      {
        delta: 0,
        text: 'c',
      },
      {
        channel: 1,
        delta: 0,
        programChange: {
          programNumber: 5,
        },
      },
      {
        channel: 1,
        delta: 0,
        noteOn: {
          noteNumber: 48,
          velocity: 121,
        },
      },
      {
        channel: 1,
        delta: 95,
        noteOn: {
          noteNumber: 48,
          velocity: 0,
        },
      },
      {
        delta: 0,
        endOfTrack: true,
      },
    ],

  ],
};

const midiFile = jsonToMidi(example);
```

Works with Deno as well

```typescript
import { jsonToMidi } from "jsr:@midi-json-tools/json-to-midi";

const inputJSONFile = `./Example.json`;
const jsonFile = await Deno.readFile(inputFile);
const midi = jsonToMidi(jsonFile);
```