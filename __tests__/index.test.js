/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import process from 'process';
import gendiff from '../index';

const resultStylish = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__/resultStylish.txt'), 'utf-8');
const resultPlain = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__/resultPlain.txt'), 'utf-8');

const extensions = ['.yml', '.json'];

describe(`Result must be as expected at stylish and plain output format. 
  Case without passing output format returns stylish. 
  JSON output format is parsed without errors.`, () => {
  test.each(extensions)('Compare files with %p extension', (extension) => {
    const pathToFileBefore = `__fixtures__/file-before${extension}`;
    const pathToFileAfter = `__fixtures__/file-after${extension}`;

    expect(gendiff(pathToFileBefore, pathToFileAfter, 'stylish')).toBe(resultStylish);
    expect(gendiff(pathToFileBefore, pathToFileAfter, 'plain')).toBe(resultPlain);
    expect(gendiff(pathToFileBefore, pathToFileAfter)).toBe(resultStylish);
    expect(() => JSON.parse(gendiff(pathToFileBefore, pathToFileAfter, 'json'))).not.toThrow();
  });
});
