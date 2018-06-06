const Elements = require('./lib/elements');
const store = require('./lib/store');
const render = require('./lib/render');

const Components = Object.assign({
  store,
  render
}, Elements);

module.exports = Components;
