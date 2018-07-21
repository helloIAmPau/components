'use strict';

var _require = require('incremental-dom'),
    patch = _require.patch;

module.exports = function (root, template) {
  return function () {
    patch(root, function () {
      template(root);
    });
  };
};