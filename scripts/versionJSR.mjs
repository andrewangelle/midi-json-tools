import { writeFile } from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import jsonToMidiPackageJson from '../packages/json-to-midi/package.json' with { type: 'json' };
import midiToJsonPackageJson from '../packages/midi-to-json/package.json' with { type: 'json' };
import messageEncoderPackageJson from '../packages/json-midi-message-encoder/package.json' with { type: 'json' };

import jsonToMidiJSRJson from '../packages/json-to-midi/jsr.json' with { type: 'json' };
import midiToJsonJSRJson from '../packages/midi-to-json/jsr.json' with { type: 'json' };
import messageEncoderJSRJson from '../packages/json-midi-message-encoder/jsr.json' with { type: 'json' };

const packages = [
  'jsonToMidi',
  'midiToJson',
  'messageEncoder'
];

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

for (const packageName of packages){
  let updated;

  const jsrConfigPath = config.paths.jsr[packageName];
  const packageJsonVersion = config.versions.packageJson[packageName];
  const jsrJsonVersion = config.versions.jsrJson[packageName]

  if(packageJsonVersion !== jsrJsonVersion) {
    if(packageName === 'jsonToMidi') {
      updated = {
        ...jsonToMidiJSRJson,
        version: packageJsonVersion
      }
    }
  
    if(packageName === 'midiToJson') {
      updated = {
        ...midiToJsonJSRJson,
        version: packageJsonVersion
      }
    }
  
    if(packageName === 'messageEncoder') {
      updated = {
        ...messageEncoderJSRJson,
        version: packageJsonVersion
      }
    }
    const filePath = path.join(__dirname, jsrConfigPath);

    await writeFile(filePath, JSON.stringify(updated))
  }

}


