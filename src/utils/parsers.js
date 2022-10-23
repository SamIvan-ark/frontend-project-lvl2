import yaml from 'js-yaml';

export default (extension) => {
  if (extension === '.yml' || extension === '.yaml') {
    return yaml.load;
  }

  if (extension === '.json') {
    return JSON.parse;
  }

  throw new Error(`Cant read file. Format ${extension} is not supported.`);
};
