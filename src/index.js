import fs from 'fs';
import _ from 'lodash';

const genDiff = (pathToFile1, pathToFile2) => {
  const file1 = fs.readFileSync(pathToFile1, 'utf-8');
  const file2 = fs.readFileSync(pathToFile2, 'utf-8');

  const json1 = JSON.parse(file1);
  const json2 = JSON.parse(file2);

  const keys1 = Object.keys(json1);
  const keys2 = Object.keys(json2);

  const allKeys = _.union(keys1, keys2);

  const result = allKeys.reduce((acc, key) => {
    if (_.has(json1, key) && _.has(json2, key)) {
      if (json1[key] === json2[key]) {
        return `${acc}\n    ${key}: ${json1[key]}`;
      }
      return `${acc}\n  + ${key}: ${json2[key]}\n  - ${key}: ${json1[key]}`;
    }
    if (_.has(json1, key) && !_.has(json2, key)) {
      return `${acc}\n  - ${key}: ${json1[key]}`;
    }
    if (!_.has(json1, key) && _.has(json2, key)) {
      return `${acc}\n  + ${key}: ${json2[key]}`;
    }
    return acc;
  }, '{');

  // console.log(`${result}\n}`);
  return `${result}\n}`;
};

export default genDiff;
