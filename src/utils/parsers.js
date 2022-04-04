import path from 'path';
import yaml from 'js-yaml';

const defineParser = (filePath) => {
  const ext = path.extname(filePath);

  if (['.yml', '.yaml'].includes(ext)) {
    return yaml.load;
  }
  return JSON.parse;
};

export default defineParser;
