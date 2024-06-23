# @midi-json-tools/json-midi-message-encoder
[![npm version](https://badge.fury.io/js/@midi-json-tools%2Fjson-midi-message-encoder.svg)](https://www.npmjs.com/package/@midi-json-tools/json-midi-message-encoder)
[![@midi-json-tools/json-midi-message-encoder](https://jsr-badge.deno.dev/@midi-json-tools/json-midi-message-encoder/stable.svg?label=jsr-package)](https://jsr.io/@midi-json-tools/json-midi-message-encoder)


This is a helper library used by [json-to-midi](https://www.npmjs.com/package/@midi-json-tools/json-to-midi). It handles encoding the individual events in a given track of a midi file

## Credit

This package and the majority of its code originates from [json-midi-message-encoder](https://github.com/chrisguttandin/json-midi-message-encoder). I've updated and removed necessary bits to make it work in a node environment.


## Usage

See the [tests directory](https://github.com/andrewangelle/midi-json-tools/tree/main/packages/json-midi-message-encoder/test) for example usage

I don't forsee this being useful outside the source code of [json-to-midi](https://www.npmjs.com/package/@midi-json-tools/json-to-midi). However, if you'd like you can install it into your own project.

*NPM*
```
npm i @midi-json-tools/json-midi-message-encoder
```

*Yarn*
```
yarn add @midi-json-tools/json-midi-message-encoder
```

*PNPM*
```
pnpm add @midi-json-tools/json-midi-message-encoder
```

*[JSR](https://jsr.io) / Deno*
```typescript
import * as jsonMidiMessageEncoder from 'jsr:@midi-json-tools/json-midi-message-encoder'
```

*ESM.SH*
```typescript
import * as jsonMidiMessageEncoder from "https://esm.sh/@midi-json-tools/json-midi-message-encoder@latest";
```