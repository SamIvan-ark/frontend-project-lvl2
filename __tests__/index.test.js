/* eslint-disable no-undef */
import gendiff from '../index';
import readFile from '../src/utils/readFile';

const getFixturePath = (fileName) => `__fixtures__/${fileName}`;

const genTestData = (filepath1, filepath2, rightFilePath, format) => {
  const path1 = getFixturePath(filepath1);
  const path2 = getFixturePath(filepath2);
  const diff = gendiff(path1, path2, format);
  const diffType = typeof (diff);
  const right = readFile(getFixturePath(rightFilePath));

  return [diff, diffType, right];
};

describe('compare recursively files json', () => {
  const [diff, diffType, right] = genTestData('file-recursive1.json', 'file-recursive2.json', 'stylish-right.txt');

  test('output type is must be string', () => {
    expect(diffType).toBe('string');
  });
  test('output is must be as expected', () => {
    expect(diff).toBe(right);
  });
});

describe('compare recursively files yml', () => {
  const [diff, diffType, right] = genTestData('file-recursive1.yml', 'file-recursive2.yml', 'stylish-right.txt');

  test('output type is must be string', () => {
    expect(diffType).toBe('string');
  });
  test('output is must be as expected', () => {
    expect(diff).toBe(right);
  });
});

describe('compare plain output format', () => {
  const [diff, diffType, right] = genTestData('file-recursive1.json', 'file-recursive2.yml', 'plain-right.txt', 'plain');

  test('output type is must be string', () => {
    expect(diffType).toBe('string');
  });
  test('output is must be as expected', () => {
    expect(diff).toBe(right);
  });
});
