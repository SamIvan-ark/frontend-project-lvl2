import path from 'path';
import yaml from 'js-yaml';

const defineParser = (filePath) => {
  const ext = path.extname(filePath);

  if (ext === '.yml' || ext === '.yaml') {
    return yaml.load;
  }

  if (ext === '.json') {
    return JSON.parse;
  }

  throw new Error(`Cant read file. Format ${ext} is not supported.`);
};

export default defineParser;
