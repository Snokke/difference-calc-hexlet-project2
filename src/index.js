import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parsers';

const readFile = pathToFile => fs.readFileSync(pathToFile, 'utf-8');
const getExtension = pathToFile => path.extname(pathToFile).substr(1);

const genDiff = (pathToFile1, pathToFile2) => {
  const file1 = readFile(pathToFile1);
  const file2 = readFile(pathToFile2);

  const extension1 = getExtension(pathToFile1);
  const extension2 = getExtension(pathToFile2);

  const object1 = parse(file1, extension1);
  const object2 = parse(file2, extension2);

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
