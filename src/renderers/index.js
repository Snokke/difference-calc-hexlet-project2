import nestedRender from './nestedRender';
import plainRender from './plainRender';
import jsonRender from './jsonRender';

const mappingType = {
  nested: nestedRender,
  plain: plainRender,
  json: jsonRender,
};

export default (ast, type) => mappingType[type](ast);
