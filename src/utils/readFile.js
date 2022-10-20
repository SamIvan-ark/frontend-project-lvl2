import fs from 'fs';
import path from 'path';
import process from 'process';
// По поводу замечания: выносил в отдельную переменную, чтобы
// выражение не было настолько длинным однострочником.
// В любом случае, кажется, особо это не помогало, сейчас аккуратнее :)
const readFile = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf-8');

export default readFile;
