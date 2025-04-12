import fs from 'fs/promises';

export async function readPackageJson(path: string) {
  const data = await fs.readFile(path, 'utf-8');
  return JSON.parse(data);
}

