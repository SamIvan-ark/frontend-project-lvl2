import _ from 'lodash';

const normalizeValue = (value) => {
  return typeof (value) === 'string' 
    ? `'${value}'`
    : !_.isObject(value) 
    ? value 
    : '[complex value]';
};

const normalizePropPath = (propPath, key) => propPath === '' ? key : propPath + '.' + key;

const getPlainOutput = (diff) => {

  const iter = (node, propPath = '') => {
    const arr = node.map((prop) => {
      const propStatus = prop.valueStatus;
      const key = prop.name;
      
      if (propStatus === 'changed') {
        const [ oldVal, newVal ] = prop.value;
        return [`Property '${normalizePropPath(propPath, key)}' was updated. From ${normalizeValue(oldVal)} to ${normalizeValue(newVal)}`];
      }
      if (propStatus === 'added') {
        return [`Property '${normalizePropPath(propPath, key)}' was added with value: ${normalizeValue(prop.value)}`];
      }
      if (propStatus === 'deleted') {
        return [`Property '${normalizePropPath(propPath, key)}' was removed`];
      }
      if (propStatus === 'equial') {
        return [];
      }
      if (propStatus === 'object') {
        const children = _.cloneDeep(prop.children);
        return iter(children, `${normalizePropPath(propPath, key)}`);
      }
    });
    return arr;
  }
  return iter(diff).flat(Infinity).join('\n');
};

export default getPlainOutput;