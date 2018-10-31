import yaml from 'js-yaml';
import ini from 'ini';

const mappingExtensions = {
  json: file => JSON.parse(file),
  yaml: file => yaml.safeLoad(file),
  ini: file => ini.parse(file),
};

const parse = (data, extension) => mappingExtensions[extension](data);

export default parse;
