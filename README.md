# MIDI JSON Tools
Packages to convert a binary MIDI file to JSON and back again.

## Credit

These packages and the majority of their code originate from [midi-json-parser](https://github.com/chrisguttandin/midi-json-parser) and [json-midi-encoder](https://github.com/chrisguttandin/json-midi-encoder). I've condensed it to a monorepo and removed necessary bits to make it work in a node environment. 

###  Packages
##### @midi-json-tools/midi-to-json
[![npm version](https://badge.fury.io/js/@midi-json-tools%2Fmidi-to-json.svg)](https://www.npmjs.com/package/@midi-json-tools/midi-to-json) 
[![@midi-json-tools/midi-to-json](https://jsr-badge.deno.dev/@midi-json-tools/midi-to-json/stable.svg?label=jsr-package)](https://jsr.io/@midi-json-tools/midi-to-json)

##### @midi-json-tools/json-to-midi 
[![npm version](https://badge.fury.io/js/@midi-json-tools%2Fjson-to-midi.svg)](https://www.npmjs.com/package/@midi-json-tools/json-to-midi)
[![@midi-json-tools/json-to-midi](https://jsr-badge.deno.dev/@midi-json-tools/json-to-midi/stable.svg?label=jsr-package)](https://jsr.io/@midi-json-tools/json-to-midi)

##### @midi-json-tools/json-midi-message-encoder
[![npm version](https://badge.fury.io/js/@midi-json-tools%2Fjson-midi-message-encoder.svg)](https://www.npmjs.com/package/@midi-json-tools/json-midi-message-encoder)
[![@midi-json-tools/json-midi-message-encoder](https://jsr-badge.deno.dev/@midi-json-tools/json-midi-message-encoder/stable.svg?label=jsr-package)](https://jsr.io/@midi-json-tools/json-midi-message-encoder)

## Getting Started 

Clone the repo
```
git clone https://github.com/andrewangelle/midi-json-tools.git
```

Install packages
```
cd ./midi-json-tools && npm i
```

## Examples
See the examples folder for basic usage

#### Convert a MIDI file to JSON

```ts
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import { midiToJson } from '@midi-json-tools/midi-to-json'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const filename = path.join(__dirname, './Example.mid');
const response = await fs.readFile(filename);
const jsonFile = midiToJson(response.buffer);
```

#### Convert a JSON file to MIDI
```ts
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import { jsonToMidi } from '@midi-json-tools/json-to-midi';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const filename = path.join(__dirname, './ExampleMIDIJSON.json');
const response = await fs.readFile(filename);
const json = JSON.parse(response.toString());

const midiFile = await jsonToMidi(json);
```


## Scripts

```sh
$ npm run examples
```
  - Then see `./examples/example-output` for the result 

```sh
$ npm run build
```

```sh
$ npm run test
```

```sh
$ npm run lint
```

```sh
$ npm run format
```