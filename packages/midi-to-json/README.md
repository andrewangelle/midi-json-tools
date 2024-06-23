# @midi-json-tools/midi-to-json
  [![npm version](https://badge.fury.io/js/@midi-json-tools%2Fmidi-to-json.svg)](https://www.npmjs.com/package/@midi-json-tools/midi-to-json) 
  [![@midi-json-tools/midi-to-json](https://jsr-badge.deno.dev/@midi-json-tools/midi-to-json/stable.svg?label=jsr-package)](https://jsr.io/@midi-json-tools/midi-to-json)

Library to convert an encoded binary MIDI file to a human readable JSON format.

## Credit

This package and the majority of its code originates from [midi-json-parser](https://github.com/chrisguttandin/midi-json-parser). I've updated and removed necessary bits to make it work in a node environment.


## Usage

*NPM*
```
npm i @midi-json-tools/midi-to-json
```

*Yarn*
```
yarn add @midi-json-tools/midi-to-json
```

*PNPM*
```
pnpm add @midi-json-tools/midi-to-json
```

*[JSR](https://jsr.io) / Deno*
```typescript
import { midiToJson } from 'jsr:@midi-json-tools/midi-to-json'
```

*ESM.SH*
```typescript
import { midiToJson } from "https://esm.sh/@midi-json-tools/midi-to-json@latest";
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