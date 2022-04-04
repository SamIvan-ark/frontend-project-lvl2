import readFile from './readFile.js';
import defineParser from './parsers.js';

const parseFile = (pathToFile) => {
  const parser = defineParser(pathToFile);
  return parser(readFile(pathToFile));
};

export default parseFile;
