import { readFile, writeFile } from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import jsonToMidiPackageJson from '../packages/json-to-midi/package.json' with { type: 'json' };
import midiToJsonPackageJson from '@midi-json-tools/midi-to-json/package.json' with { type: 'json' };
import messageEncoderPackageJson from '@midi-json-tools/json-midi-message-encoder/package.json' with { type: 'json' };

import jsonToMidiJSRJson from '../packages/json-to-midi/jsr.json' with { type: 'json' };
import midiToJsonJSRJson from '@midi-json-tools/midi-to-json/jsr.json' with { type: 'json' };
import messageEncoderJSRJson from '@midi-json-tools/json-midi-message-encoder/jsr.json' with { type: 'json' };

const config = {
  versions: {
    packageJson: {
      jsonToMidi: jsonToMidiPackageJson.version,
      midiToJson: midiToJsonPackageJson.version,
      messageEncoder: messageEncoderPackageJson.version
    },
    jsrJson: {
      jsonToMidi: jsonToMidiJSRJson.version,
      midiToJson: midiToJsonJSRJson.version,
      messageEncoder: messageEncoderJSRJson.version
    }
  },
  paths: {
    jsr: {
      jsonToMidi: '../packages/json-to-midi/jsr.json',
      midiToJson: '../packages/midi-to-json/jsr.json',
      messageEncoder: '../packages/json-midi-message-encoder/jsr.json'
    }
  }
}

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

for (const key in config.versions.packageJson){
  let updated;
  const filePath = path.join(__dirname, config.paths.jsr[key]);
  const packageJsonVersion = config.versions.packageJson[key];
  const jsrJsonVersion = config.versions.jsrJson[key]

  if(packageJsonVersion !== jsrJsonVersion) {
    if(key === 'jsonToMidi') {
      updated = {
        ...jsonToMidiJSRJson,
        version: config.versions.packageJson[key]
      }
    }
  
    if(key === 'midiToJson') {
      updated = {
        ...midiToJsonJSRJson,
        version: config.versions.packageJson[key]
      }
    }
  
    if(key === 'messageEncoder') {
      updated = {
        ...messageEncoderJSRJson,
        version: config.versions.packageJson[key]
      }
    }
  
    await writeFile(filePath, JSON.stringify(updated))
  }

}


