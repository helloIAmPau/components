const sm = require('sandboxed-module');

describe('The custom HTML element', function() {

  let mut;

  beforeEach(function(done) {
    mut = sm.require('../lib/elements');

    done();
  });

  it('should register and trigger dispose functions on disconnect', function(done) {
    const { Element } = mut;
    const element = new Element();
  });

});
