import yaml from 'js-yaml';
import ini from 'ini';
import path from 'path';
import fs from 'fs';

const mappingExtensions = {
  json: file => JSON.parse(file),
  yaml: file => yaml.safeLoad(file),
  ini: file => ini.parse(file),
};

const parse = (pathToFile) => {
  const file = fs.readFileSync(pathToFile, 'utf-8');
  const extension = path.extname(pathToFile).substr(1);
  return mappingExtensions[extension](file);
};

export default parse;
