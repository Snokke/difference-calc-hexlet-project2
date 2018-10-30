import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs';

const mappingExtensions = {
  json: file => JSON.parse(file),
  yaml: file => yaml.safeLoad(file),
};

const parse = (pathToFile) => {
  const file = fs.readFileSync(pathToFile, 'utf-8');
  const extension = path.extname(pathToFile).substr(1);
  return mappingExtensions[extension](file);
};

export default parse;
