import fs from 'fs';
import path from 'path';
import parse from './parsers';
import parseToAST from './parseToAST';
import { defaultRender, plainRender } from './renderers';

const readFile = pathToFile => fs.readFileSync(pathToFile, 'utf-8');
const getExtension = pathToFile => path.extname(pathToFile).substr(1);

const genDiff = (pathToFile1, pathToFile2, type) => {
  const file1 = readFile(pathToFile1);
  const file2 = readFile(pathToFile2);

  const extension1 = getExtension(pathToFile1);
  const extension2 = getExtension(pathToFile2);

  const object1 = parse(file1, extension1);
  const object2 = parse(file2, extension2);

  const diffAST = parseToAST(object1, object2);

  console.log(`!!! Type: ${type}`);

  if (type === 'plain') {
    return plainRender(diffAST, type);
  }
  return defaultRender(diffAST);
};

// genDiff('./__tests__/__fixtures__/tree/before.json', './__tests__/__fixtures__/tree/before.json', 'plain');

export default genDiff;
