import readFile from './readFile.js';
import getExtension from './getFileExtension.js';
import defineParser from './parsers.js';

export default (pathToFile) => {
  const parser = defineParser(getExtension(pathToFile));
  return parser(readFile(pathToFile));
};
