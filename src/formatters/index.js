import getStylishOutput from './stylish.js';
import getPlainOutput from './plain.js';
import getJSONOutput from './json.js';

const formatDiff = (diff, formatName) => {
  if (formatName === 'stylish') {
    return getStylishOutput(diff);
  }
  if (formatName === 'plain') {
    return getPlainOutput(diff);
  }
  if (formatName === 'json') {
    return getJSONOutput(diff);
  }

  throw (new Error(`Format of output ${formatName} is not supported. Please use one of these formats: "stylish", "plain" or "json"`));
};

export default formatDiff;
