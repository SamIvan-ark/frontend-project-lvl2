import getDiff from './getDiff.js';
import readFile from './utils/readFile.js';
import getFileExtension from './utils/getFileExtension.js';
import parseData from './utils/parseData.js';
import formatDiff from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const extension1 = getFileExtension(filepath1);
  const extension2 = getFileExtension(filepath2);
  const parsedData1 = parseData(data1, extension1);
  const parsedData2 = parseData(data2, extension2);

  const diff = getDiff(parsedData1, parsedData2);

  return formatDiff(diff, formatName);
};

export default genDiff;
