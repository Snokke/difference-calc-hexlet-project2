import _ from 'lodash';

const parseToAST = (object1, object2) => {
  const allKeys = _.union(_.keys(object1), _.keys(object2));

  return allKeys.reduce((acc, item) => {
    const currentObject = {
      key: item,
      state: '',
      value: '',
      newValue: '',
      children: [],
    };

    if (_.has(object1, item) && _.has(object2, item)) {
      if (object1[item] instanceof Object && object2[item] instanceof Object) {
        currentObject.state = 'changed';
        currentObject.children = parseToAST(object1[item], object2[item]);
        return [...acc, currentObject];
      }
      if (object1[item] === object2[item]) {
        currentObject.state = 'unchanged';
        currentObject.value = object1[item];
        return [...acc, currentObject];
      }
      currentObject.state = 'changed';
      currentObject.value = object1[item];
      currentObject.newValue = object2[item];
      return [...acc, currentObject];
    }
    if (_.has(object1, item) && !_.has(object2, item)) {
      currentObject.state = 'deleted';
      currentObject.value = object1[item];
      return [...acc, currentObject];
    }
    if (!_.has(object1, item) && _.has(object2, item)) {
      currentObject.state = 'new';
      currentObject.value = object2[item];
      return [...acc, currentObject];
    }
    return [...acc];
  }, []);
};

export default parseToAST;
