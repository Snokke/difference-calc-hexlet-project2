import _ from 'lodash';
import parse from './parsers';

const genDiff = (pathToFile1, pathToFile2) => {
  const object1 = parse(pathToFile1);
  const object2 = parse(pathToFile2);

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  const allKeys = _.union(keys1, keys2);

  const result = allKeys.reduce((acc, key) => {
    if (_.has(object1, key) && _.has(object2, key)) {
      if (object1[key] === object2[key]) {
        return `${acc}\n    ${key}: ${object1[key]}`;
      }
      return `${acc}\n  + ${key}: ${object2[key]}\n  - ${key}: ${object1[key]}`;
    }
    if (_.has(object1, key) && !_.has(object2, key)) {
      return `${acc}\n  - ${key}: ${object1[key]}`;
    }
    if (!_.has(object1, key) && _.has(object2, key)) {
      return `${acc}\n  + ${key}: ${object2[key]}`;
    }
    return acc;
  }, '{');

  return `${result}\n}`;
};

export default genDiff;
