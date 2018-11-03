import nestedRender from './nestedRender';
import plainRender from './plainRender';

const mappingType = {
  nested: nestedRender,
  plain: plainRender,
  default: n => 'check',
};

const render = (ast, type) => mappingType[type](ast);

export default render;
