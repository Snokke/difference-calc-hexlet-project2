import nestedRender from './nestedRender';
import plainRender from './plainRender';

const mappingType = {
  plain: plainRender,
  nested: nestedRender,
};

const render = (ast, type) => mappingType[type](ast);

export default render;
