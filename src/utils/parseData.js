import defineParser from './parsers.js';

export default (data, extension) => {
  const parser = defineParser(extension);

  return parser(data);
};
