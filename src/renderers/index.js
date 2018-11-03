import nestedRender from './nestedRender';
import plainRender from './plainRender';
import jsonRender from './jsonRender';

const mappingType = {
  nested: nestedRender,
  plain: plainRender,
  json: jsonRender,
};

const render = (ast, type) => mappingType[type](ast);

export default render;
