import _ from 'lodash';

export default (data1, data2) => {
  const iter = (obj1, obj2) => {
    const arr1 = Object.keys(obj1);
    const arr2 = Object.keys(obj2);

    const keysUnion = _.union(arr1, arr2);
    const allKeysSorted = _.sortBy(keysUnion);

    const diff = allKeysSorted.map((key) => {
      if (obj1[key] === obj2[key]) {
        return {
          name: key,
          valueStatus: 'equial',
          value: obj2[key],
        };
      }
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return {
          name: key,
          valueStatus: 'object',
          children: iter(obj1[key], obj2[key]),
        };
      }
      if ((_.has(obj1, key) && _.has(obj2, key)) && (obj1[key] !== obj2[key])) {
        return {
          name: key,
          valueStatus: 'changed',
          value: [obj1[key], obj2[key]],
        };
      }

      if (_.has(obj1, key)) {
        return {
          name: key,
          valueStatus: 'deleted',
          value: obj1[key],
        };
      }
      if (_.has(obj2, key)) {
        return {
          name: key,
          valueStatus: 'added',
          value: obj2[key],
        };
      }
      return null;
    });

    return diff;
  };

  return iter(data1, data2);
};
