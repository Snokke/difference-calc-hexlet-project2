import prettyRender from './prettyRender';
import plainRender from './plainRender';
import jsonRender from './jsonRender';

const mappingType = {
  pretty: prettyRender,
  plain: plainRender,
  json: jsonRender,
};

export default (ast, type) => mappingType[type](ast);
