import getDiff from './getDiff.js';
import parseFile from './utils/parseFile.js';
import formatDiff from './formatters/index.js';


const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const diff = getDiff(parseFile(filepath1), parseFile(filepath2));

  return formatDiff(diff, formatName);
};

export default genDiff;