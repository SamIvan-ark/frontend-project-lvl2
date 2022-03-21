import _ from 'lodash';

const parseJSONToObj = (json) => JSON.parse(json);

const convertObjToStr = (obj) => {
    const json = JSON.stringify(obj, null, '  ');
  
    return json.replaceAll('"', '');
};

const getDiffsForPrint = (file1, file2) => {
    const o1 = parseJSONToObj(file1);
    const o2 = parseJSONToObj(file2);
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
  
  const strObj = convertObjToStr(diffObj);
  return strObj;
}

export default getDiffsForPrint;