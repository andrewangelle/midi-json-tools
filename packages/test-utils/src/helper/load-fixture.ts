import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { MidiFile } from '@midi-json-tools/types';

export async function loadFixtureAsArrayBuffer(fixture: string) {
  const filename = join(import.meta.dirname, 'fixtures', fixture);
  const response = await readFile(filename);
  return response.buffer;
}

export async function loadFixtureAsJson(fixture: string) {
  const filename = join(import.meta.dirname, 'fixtures', fixture);
  const response = await readFile(filename);
  return JSON.parse(response.toString()) as unknown as MidiFile;
}
