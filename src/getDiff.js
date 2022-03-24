import _ from 'lodash';
import parseFile from './utils/parseFile.js';
import convertObjToStrNormalized from './utils/convertObjToStrNormalized.js';


const readAndGetDiffsForPrint = (path1, path2) => {
  const o1 = parseFile(path1);
  const o2 = parseFile(path2);
  const arr1 = Object.keys(o1);
  const arr2 = Object.keys(o2);
  
  const unionKeys = _.intersection(arr1, arr2);
  const allKeys = _.union(arr1, arr2);
  const allKeysSorted = _.sortBy(allKeys);

  const diffObj = allKeysSorted.reduce((acc, key) => {
    if (unionKeys.includes(key)) {
      if (o1[key] === o2[key]) {
        return {...acc, ["  " + key]: o1[key]};
      }
      return {
        ...acc, 
        ["- " + key]: o1[key], 
        ["+ " + key]: o2[key]};
    }
    return Object.prototype.hasOwnProperty.call(o1, key)
      ? {...acc, ["- " + key]: o1[key]}
      : {...acc, ["+ " + key]: o2[key]};
  }, {});
  
  const strObj = convertObjToStrNormalized(diffObj);
  return strObj;
}

export default readAndGetDiffsForPrint;