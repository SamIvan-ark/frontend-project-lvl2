/* eslint-disable no-undef */
import gendiff from '../index';
import readFile from '../src/utils/readFile';

const resultStylish = readFile('__fixtures__/resultStylish.txt');
const resultPlain = readFile('__fixtures__/resultPlain.txt');

const extensions = ['.yml', '.json'];

describe('Result must be as expected at stylish and plain output format. JSON output format is parsed without errors', () => {
  test.each(extensions)('Compare files with %p extension', (extension) => {
    const pathToFileBefore = `__fixtures__/file-before${extension}`;
    const pathToFileAfter = `__fixtures__/file-after${extension}`;

    expect(gendiff(pathToFileBefore, pathToFileAfter)).toBe(resultStylish);
    expect(gendiff(pathToFileBefore, pathToFileAfter, 'plain')).toBe(resultPlain);
    expect(() => JSON.parse(gendiff(pathToFileBefore, pathToFileAfter, 'json'))).not.toThrow();
  });
});
