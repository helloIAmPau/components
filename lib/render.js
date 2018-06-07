const { compile } = require('handlebars');

module.exports = function(root, html) {
  const template = compile(html);

  return function(data) {
    root.innerHTML = template(data);
  };
};
