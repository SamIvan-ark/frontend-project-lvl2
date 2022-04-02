/* eslint-disable no-undef */
import gendiff from '../src/index.js';
import readFile from '../src/utils/readFile.js';

const getFixturePath = (fileName) => `__fixtures__/${fileName}`;

describe('compare flat files json', () => {
    const path1 = getFixturePath('file1.json');
    const path2 = getFixturePath('file2.json');
    const diff = gendiff(path1, path2);
    const right = readFile(getFixturePath('right-flat.txt'));

    test('output type is must be string', () => {
        expect(typeof(diff) === 'string').toBeTruthy;
    })
    test('output is must be as expected', () => {
        expect(diff).toBe(right);
    });
});

describe('compare flat files yaml', () => {
    const path1 = getFixturePath('file1.yml');
    const path2 = getFixturePath('file2.yml');
    const diff = gendiff(path1, path2);
    const right = readFile(getFixturePath('right-flat.txt'));

    test('output type is must be string', () => {
        expect(typeof(diff) === 'string').toBeTruthy;
    })
    test('output is must be as expected', () => {
        expect(diff).toBe(right);
    });
});

describe('compare recursively files json', () => {
    const path1 = getFixturePath('file-recursive1.json');
    const path2 = getFixturePath('file-recursive2.json');
    const diff = gendiff(path1, path2);
    const right = readFile(getFixturePath('right-recursive.txt'));

    test('output type is must be string', () => {
        expect(typeof(diff) === 'string').toBeTruthy;
    })
    test('output is must be as expected', () => {
        expect(diff).toBe(right);
    });
});

describe('compare recursively files yml', () => {
    const path1 = getFixturePath('file-recursive1.yml');
    const path2 = getFixturePath('file-recursive2.yml');
    const diff = gendiff(path1, path2);
    const right = readFile(getFixturePath('right-recursive.txt'));

    test('output type is must be string', () => {
        expect(typeof(diff) === 'string').toBeTruthy;
    })
    test('output is must be as expected', () => {
        expect(diff).toBe(right);
    });
});