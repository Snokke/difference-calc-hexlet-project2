import fs from 'fs';
import path from 'path';
import parse from './parsers';
import parseToAST from './parseToAST';
import render from './renderers/index';

const readFile = pathToFile => fs.readFileSync(pathToFile, 'utf-8');

const genDiff = (pathToFile1, pathToFile2, type) => {
  const file1 = readFile(pathToFile1);
  const file2 = readFile(pathToFile2);

  const extension1 = path.extname(pathToFile1).substr(1);
  const extension2 = path.extname(pathToFile2).substr(1);

  const object1 = parse(file1, extension1);
  const object2 = parse(file2, extension2);

  const diffAST = parseToAST(object1, object2);
  return render(diffAST, type);
};

export default genDiff;
