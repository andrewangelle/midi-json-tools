import { writeFile, readFile, opendir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * @typedef {Record<'jsrJsonVersion' | 'jsrJsonPath' | 'packageJsonVersion' | 'name', string>} PackageInfo
 */

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const packagesDirectory = join(__dirname, '../packages');
const denoExamplesJsonPath = join(__dirname, '../examples/deno/deno.json')

/**
 * Compare the jsr.json versions with the package.json versions.
 * Update the jsr.json to match package.json if they differ.
 */
for(
  const { packageJsonVersion, jsrJsonVersion, jsrJsonPath } 
  of 
  await getPackageInfo()
){

  if(packageJsonVersion !== jsrJsonVersion){
    const jsrJson = await readFile(jsrJsonPath, 'utf-8');

    let updated = {
      ...JSON.parse(jsrJson),
      version: packageJsonVersion
    }

    if(jsrJsonPath.includes('json-to-midi')) {
      updated = {
        ...updated,
        imports: {
          "@midi-json-tools/midi-to-json": `jsr:@midi-json-tools/midi-to-json@^${packageJsonVersion}`,
          "@midi-json-tools/encode-midi-event": `jsr:@midi-json-tools/encode-midi-event@^${packageJsonVersion}`
        },
      }


      // update /examples/deno/deno.json
      const denoExamplesJson = await getExamplesDenoJson();
      await writeFile(denoExamplesJsonPath, JSON.stringify({
        ...denoExamplesJson,
        imports: {
          ...denoExamplesJson.imports,
          "@midi-json-tools/json-to-midi": `jsr:@midi-json-tools/json-to-midi@^${packageJsonVersion}`, 
        }
      }))
    }

   
    if(jsrJsonPath.includes('midi-to-json')) { 
      // update /examples/deno/deno.json
      const denoExamplesJson = await getExamplesDenoJson() 

      await writeFile(denoExamplesJsonPath, JSON.stringify({
        ...denoExamplesJson,
        imports: {
          ...denoExamplesJson.imports,
          "@midi-json-tools/midi-to-json": `jsr:@midi-json-tools/midi-to-json@^${packageJsonVersion}`, 
        }
      }))
    }


    await writeFile(jsrJsonPath, JSON.stringify(updated))
 
  }
}

/**
 * Walk the packages directory returning the paths for each package.json and jsr.json
 * 
 * @generator walk
 * @param {string} directoryPath
 * @yields {string}
 */
async function* walk(directoryPath) {
  for await (const target of await opendir(directoryPath)) {
    const entry =  join(directoryPath, target.name);
    const isFileMatch = target.isFile() && /(package\.json|jsr\.json)/.test(entry);

    if (target.isDirectory()) {
      if (entry === join(packagesDirectory, 'test-utils')) continue;
      yield* walk(entry);
    }
    else if (isFileMatch) yield entry;
  }
}

/**
 * Extract the version numbers for each package and return the path to the jsr json file
 * 
 * @returns {Promise<PackageInfo[]>}
 */
async function getPackageInfo() {
  const packageInfo = {}

  for await (const filePath of walk(packagesDirectory)) {
    const result = await readFile(filePath, 'utf-8')
    const { name, version } = JSON.parse(result)

    if(!packageInfo[name]){
      packageInfo[name] = {
        packageJsonVersion: '',
        jsrJsonVersion: '',
        jsrJsonPath: ''
      }
    }

    if(/(package\.json)/.test(filePath)) {
      packageInfo[name].packageJsonVersion = version
    }

    if(/(jsr\.json)/.test(filePath)) {
      packageInfo[name].jsrJsonVersion = version
      packageInfo[name].jsrJsonPath = filePath
    }
  }

  return Object
    .entries(packageInfo)
    .map(([name, value]) => ({...value, name }))
}

async function getExamplesDenoJson() {
  const denoExamplesJsonFile  = await readFile(denoExamplesJsonPath, 'utf-8');
  return JSON.parse(denoExamplesJsonFile);
}



