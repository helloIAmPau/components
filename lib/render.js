const { patch } = require('incremental-dom');

module.exports = function(root, template) {
  return function(data) {
    patch(root, function() {
      template(data);
    });
  };
};
