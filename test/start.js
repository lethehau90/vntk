var path = require('path');

/**
 * Import specs
 */
var dir = '../test/specs/';
[
  'ws',
  'util',
  'tokenizer_vi',
  'normalizer',
  'stopwords',
].forEach((script) => {
  require(path.join(dir, script));
});