/* eslint-disable no-undef */
import getDiff from '../src/getDiff';
import readFileByPath from '../src/utils/readFile.js';


describe('compare flat files json', () => {
    const path1 = '__tests__/__fixtures__/file1.json';
    const path2 = '__tests__/__fixtures__/file2.json';
    const diff = getDiff(path1, path2);
    const right = readFileByPath('__tests__/__fixtures__/right1.txt');

    test('output type is must be string', () => {
        expect(typeof(diff) === 'string').toBeTruthy;
    })
    test('output is must be as expected', () => {
        expect(diff).toBe(right);
    });
});

describe('compare flat files yaml', () => {
    const path1 = '__tests__/__fixtures__/file1.yml';
    const path2 = '__tests__/__fixtures__/file2.yml';
    const diff = getDiff(path1, path2);
    const right = readFileByPath('__tests__/__fixtures__/right2.txt');

    test('output type is must be string', () => {
        expect(typeof(diff) === 'string').toBeTruthy;
    })
    test('output is must be as expected', () => {
        expect(diff).toBe(right);
    });
});
