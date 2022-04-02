import getDiff from './getDiff.js';
import parseFile from './utils/parseFile.js';
import getStylishOutput from './formatters/stylish.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const diff = getDiff(parseFile(filepath1), parseFile(filepath2));
  if (format === 'stylish') {
    return getStylishOutput(diff);
  }
  throw (new Error('no such format, please double check format type'))
};

export default genDiff;