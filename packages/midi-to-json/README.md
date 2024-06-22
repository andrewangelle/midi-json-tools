# @midi-json-tools/midi-to-json

Library to convert an encoded binary MIDI file to a human readable JSON format.

## Credit

This package and the majority of its code originates from [midi-json-parser](https://github.com/chrisguttandin/midi-json-parser). I've updated and removed necessary bits to make it work in a node environment.


## Usage

```
npm i @midi-json-tools/midi-to-json
```
or 
```
yarn add @midi-json-tools/midi-to-json
```
or

```
pnpm add @midi-json-tools/midi-to-json
```

#### Example
```typescript

import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import { midiToJson } from '@midi-json-tools/midi-to-json'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const filename = path.join(__dirname, './Example.mid');
const response = await fs.readFile(filename);

const result = midiToJson(response.buffer);

```

Works with Deno as well

```typescript
import { midiToJson } from "jsr:@midi-json-tools/midi-to-json";

const inputMIDIFile = `./Example.mid`;
const midiFile = await Deno.readFile(inputFile);
const json = midiToJson(midiFile.buffer);
```