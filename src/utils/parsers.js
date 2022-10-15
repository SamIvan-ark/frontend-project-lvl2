import path from 'path';
import yaml from 'js-yaml';

const defineParser = (filePath) => {
  const extension = path.extname(filePath);

  if (extension === '.yml' || extension === '.yaml') {
    return yaml.load;
  }

  if (extension === '.json') {
    return JSON.parse;
  }

  throw new Error(`Cant read file. Format ${extension} is not supported.`);
};

export default defineParser;
