import nestedRender from './nestedRender';
import plainRender from './plainRender';

const mappingType = {
  nested: nestedRender,
  plain: plainRender,
};

const render = (ast, type) => mappingType[type](ast);

export default render;
