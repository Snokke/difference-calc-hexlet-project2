import _ from 'lodash';

const valueToString = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const mappingType = {
  children: (item, prevItem, f) => f(item.children, `${prevItem}${item.key}.`),
  modified: (item, prevItem) => `Property '${prevItem}${item.key}' was updated. From ${valueToString(item.value)} to ${valueToString(item.newValue)}`,
  unchanged: () => '',
  deleted: (item, prevItem) => `Property '${prevItem}${item.key}' was removed`,
  new: (item, prevItem) => `Property '${prevItem}${item.key}' was added with value: ${valueToString(item.value)}`,
};

const plainRender = (ast) => {
  const iter = (data, prevItem) => data
    .map(item => mappingType[item.type](item, prevItem, iter))
    .filter(item => item);
  const result = iter(ast, '');
  return _.flatten(result).join('\n');
};

export default plainRender;
