import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import type { MidiFile } from '@midi-json-tools/midi-to-json';

export async function loadFixtureAsArrayBuffer(fileName: string) {
  const filePath = path.join(__dirname, `../fixtures/${fileName}`);
  const response = await fs.readFile(filePath);
  return response;
}

export async function loadFixtureAsJson(fileName: string) {
  const filePath = path.join(__dirname, `../fixtures/${fileName}`);
  const response = await fs.readFile(filePath);
  return JSON.parse(response.toString()) as unknown as MidiFile;
}
