import path from 'path';
import yaml from 'js-yaml';

const defineParser = (filePath) => {
  const ext = path.extname(filePath);
  let parser;

  if (['.json', '.', '.txt'].includes(ext)) {
    parser = JSON.parse;
  }
  if (['.yml', '.yaml'].includes(ext)) {
    parser = yaml.load;
  }

  return parser;
};

export default defineParser;
