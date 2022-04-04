import getDiff from './src/getDiff.js';
import parseFile from './src/utils/parseFile.js';
import formatDiff from './src/formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const diff = getDiff(parseFile(filepath1), parseFile(filepath2));

  return formatDiff(diff, formatName);
};

export default genDiff;
