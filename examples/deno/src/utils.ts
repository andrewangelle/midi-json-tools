import { parseArgs } from '@std/cli/parse-args';

export function getOptions() {
  const options = parseArgs(Deno.args, {
    string: ['input', 'output'],
  });

  if (!options.input) {
    throw new Error('You must pass an input file');
  }

  return {
    input: options.input,
    output: options.output,
  };
}

export function getFileInfo() {
  const options = getOptions();
  const outfileName = options.output || options.input?.replace('.mid', '.json');
  const jsonOutputFile = `./json-output/${outfileName}`;
  const midiOutputFile = `./midi-output/${options.input}`;
  const inputFile = `./midi-sources/${options.input}`;

  return {
    input: inputFile,
    output: {
      json: jsonOutputFile,
      midi: midiOutputFile,
    },
  };
}
