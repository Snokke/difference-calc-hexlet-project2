import _ from 'lodash';

const valueToString = (value, depth) => {
  if (!(_.isObject(value))) {
    return value;
  }
  const result = Object.keys(value).map(key => `${'    '.repeat(depth + 2)}${key}: ${value[key]}`).join('\n');
  return `{\n${result}\n${'    '.repeat(depth + 1)}}`;
};

const mappingState = {
  modified: (item, depth) => [`${'    '.repeat(depth)}  + ${item.key}: ${valueToString(item.newValue, depth)}`,
    `${'    '.repeat(depth)}  - ${item.key}: ${valueToString(item.value, depth)}`],
  unchanged: (item, depth) => `${'    '.repeat(depth)}    ${item.key}: ${valueToString(item.value, depth)}`,
  deleted: (item, depth) => `${'    '.repeat(depth)}  - ${item.key}: ${valueToString(item.value, depth)}`,
  new: (item, depth) => `${'    '.repeat(depth)}  + ${item.key}: ${valueToString(item.value, depth)}`,
};

const nestedRender = (ast) => {
  const iter = (data, depth) => {
    const renderedArray = data.map((item) => {
      if (item.children) {
        const newDepth = depth + 1;
        return [`${'    '.repeat(newDepth)}${item.key}: {`, iter(item.children, newDepth)];
      }
      return mappingState[item.state](item, depth);
    });

    return [renderedArray, `${'    '.repeat(depth)}}`];
  };
  const result = ['{', iter(ast, 0)];
  return _.flattenDeep(result).join('\n');
};

export default nestedRender;
