/* eslint-disable no-undef */
import gendiff from '../src/index.js';
import readFile from '../src/utils/readFile.js';

const getFixturePath = (fileName) => `__fixtures__/${fileName}`;

const genTestData = (filepath1, filepath2, rightFilePath, format) => {
    const path1 = getFixturePath(filepath1);
    const path2 = getFixturePath(filepath2);
    const diff = gendiff(path1, path2, format);
    const right = readFile(getFixturePath(rightFilePath));

    return [diff, right];
};

describe('compare flat files json', () => {
    const [ diff, right ] = genTestData('file1.json', 'file2.json', 'right-flat.txt');
    
    test('output type is must be string', () => {
        expect(typeof(diff) === 'string').toBeTruthy;
    });
    test('output is must be as expected', () => {
        expect(diff).toBe(right);
    });
});

describe('compare flat files yaml', () => {
    const [ diff, right ] = genTestData('file1.yml', 'file2.yml', 'right-flat.txt');

    test('output type is must be string', () => {
        expect(typeof(diff) === 'string').toBeTruthy;
    });
    test('output is must be as expected', () => {
        expect(diff).toBe(right);
    });
});

describe('compare recursively files json', () => {
    const [ diff, right ] = genTestData('file-recursive1.json', 'file-recursive2.json', 'right-recursive.txt');

    test('output type is must be string', () => {
        expect(typeof(diff) === 'string').toBeTruthy;
    });
    test('output is must be as expected', () => {
        expect(diff).toBe(right);
    });
});

describe('compare recursively files yml', () => {
    const [ diff, right ] = genTestData('file-recursive1.yml', 'file-recursive2.yml', 'right-recursive.txt');

    test('output type is must be string', () => {
        expect(typeof(diff) === 'string').toBeTruthy;
    });
    test('output is must be as expected', () => {
        expect(diff).toBe(right);
    });
});

describe('compare plain format', () => {
    const [ diff, right ] = genTestData('file-recursive1.json', 'file-recursive2.yml', 'plain-right.txt', 'plain');

    test('output type is must be string', () => {
        expect(typeof(diff) === 'string').toBeTruthy;
    });
    test('output is must be as expected', () => {
        expect(diff).toBe(right);
    });
});