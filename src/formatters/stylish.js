import _ from 'lodash';

const normalizeStylishOutput = (obj) => {
  const json = JSON.stringify(obj, null, 4);
  return json.replaceAll('   "', ' ').replaceAll(/,|"/g, ''); //crutch!!!
};

const getStylishOutput = (diff) => {

  const addKeyIndentIfObj = (node) => {
    if (!_.isObject(node)) {
      return node;
    }

    const arr = Object.entries(node);
    return arr.reduce((acc, [key, value]) => {
      if (_.isObject(value)) {
        return {
          ...acc, 
          [`  ` + key]: addKeyIndentIfObj(value)
        };
      }
      return {...acc, [`  ` + key]: value};
    }, {});
  };

  const prepareStylishDiff = (diff) => {
    return diff.reduce((acc, prop) => {
      if (prop.valueStatus === 'equial') {
          return {...acc, [`  ` + prop.name]: prop.value};
      }
      if (prop.valueStatus === 'deleted') {
        return {...acc, [`- ` + prop.name]:  addKeyIndentIfObj(prop.value)};
      }
      if (prop.valueStatus === 'added') {
        return {...acc, [`+ ` + prop.name]: addKeyIndentIfObj(prop.value)};
      }
      if (prop.valueStatus === 'changed') {
        const [oldVal, newVal] = prop.value;
        return {
          ...acc,             
          [`- ` + prop.name]: addKeyIndentIfObj(oldVal),
          [`+ ` + prop.name]: addKeyIndentIfObj(newVal)
        }
      }
      if (prop.valueStatus === 'object') {
        const nested = _.cloneDeep(prop.children);
        return {
          ...acc,
          [`  ` + prop.name]: prepareStylishDiff(nested)
        }
      }
    }, {});
  };
  
  const stylishedDiff = prepareStylishDiff(diff);
  return normalizeStylishOutput(stylishedDiff);
};


export default getStylishOutput;
