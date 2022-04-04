import fs from 'fs';
import path from 'path';
import process from 'process';

const readFile = (filepath) => {
  const currWorkDir = process.cwd();
  return fs.readFileSync(path.resolve(currWorkDir, filepath), 'utf-8');
};

export default readFile;
