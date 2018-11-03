import _ from 'lodash';

const parseToAST = (object1, object2) => {
  const allKeys = _.union(_.keys(object1), _.keys(object2));

  return allKeys.reduce((acc, item) => {
    if (_.has(object1, item) && _.has(object2, item)) {
      if (object1[item] instanceof Object && object2[item] instanceof Object) {
        return [...acc, { key: item, type: 'children', children: parseToAST(object1[item], object2[item]) }];
      }
      if (object1[item] === object2[item]) {
        return [...acc, { key: item, type: 'unchanged', value: object1[item] }];
      }
      return [...acc, {
        key: item,
        type: 'modified',
        value: object1[item],
        newValue: object2[item],
      }];
    }
    if (_.has(object1, item) && !_.has(object2, item)) {
      return [...acc, { key: item, type: 'deleted', value: object1[item] }];
    }
    return [...acc, { key: item, type: 'new', value: object2[item] }];
  }, []);
};

export default parseToAST;
