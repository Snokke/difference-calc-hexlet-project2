import nestedRender from './nestedRender';
import plainRender from './plainRender';

const mappingType = {
  nested: nestedRender,
  plain: plainRender,
};

const render = (ast, type = 'nested') => mappingType[type](ast);

export default render;
