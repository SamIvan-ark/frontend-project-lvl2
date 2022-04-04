import _ from 'lodash';

const normalizeValue = (value) => {
  if (typeof (value) === 'string') {
    return `'${value}'`;
  }
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return value;
};

const normalizePropPath = (propPath, key) => (propPath === '' ? key : `${propPath}.${key}`);

const getPlainOutput = (diff) => {
  const iter = (node, propPath = '') => {
    const arr = node.map((prop) => {
      const propStatus = prop.valueStatus;
      const key = prop.name;

      if (propStatus === 'changed') {
        const [oldVal, newVal] = prop.value;
        return [`Property '${normalizePropPath(propPath, key)}' was updated. From ${normalizeValue(oldVal)} to ${normalizeValue(newVal)}`];
      }
      if (propStatus === 'added') {
        return [`Property '${normalizePropPath(propPath, key)}' was added with value: ${normalizeValue(prop.value)}`];
      }
      if (propStatus === 'deleted') {
        return [`Property '${normalizePropPath(propPath, key)}' was removed`];
      }
      if (propStatus === 'object') {
        const children = _.cloneDeep(prop.children);
        return iter(children, `${normalizePropPath(propPath, key)}`);
      }
      return [];
    });
    return arr;
  };
  return iter(diff).flat(Infinity).join('\n');
};

export default getPlainOutput;
