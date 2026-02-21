import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import type { MidiFile } from '@midi-json-tools/types';

export const loadFixtureAsArrayBuffer = async (fixture: string) => {
  const filename = path.join(import.meta.dirname, `../fixtures/${fixture}`);
  const response = await fs.readFile(filename);
  return response.buffer;
};

export const loadFixtureAsJson = async (fixture: string) => {
  const filename = path.join(import.meta.dirname, `../fixtures/${fixture}`);
  const response = await fs.readFile(filename);
  return JSON.parse(response.toString()) as unknown as MidiFile;
};
