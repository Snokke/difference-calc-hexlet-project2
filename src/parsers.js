import yaml from 'js-yaml';
import ini from 'ini';

const mappingExtensions = {
  json: JSON.parse,
  yaml: yaml.safeLoad,
  ini: ini.parse,
};

const parse = (data, extension) => mappingExtensions[extension](data);

export default parse;
