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

  throw (new Error('no such format, please double check format type (stylish or plain)'));
};

export default formatDiff;
