const { patch, skip } = require('incremental-dom');

module.exports = function(root, template) {
  return function() {
    patch(root, function() {
      template(root);
      skip();
    });
  };
};
