import fs from 'fs';
import path from 'path';
import process from 'process';


const readFileByPath = (filepath) => {
    const currWorkDir = process.cwd();
    return fs.readFileSync(path.resolve(currWorkDir, filepath), 'utf-8');
};

export default readFileByPath;