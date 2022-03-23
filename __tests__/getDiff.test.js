/* eslint-disable no-undef */
import getDiff from '../src/getDiff';
import readFileByPath from '../src/utils/readFile.js';


describe('compare flat files', () => {
    const path1 = '__fixtures__/file1.json';
    const path2 = '__fixtures__/file2.json';
    const diff = getDiff(path1, path2);
    const right = readFileByPath('__fixtures__/test1.json');

    test('output is must be string', () => {
        expect(typeof(diff) === 'string').toBeTruthy;
    })
    test('output is must be as expected', () => {
        expect(diff).toBe(right);
    });
})