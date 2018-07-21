const { expect } = require('chai');
const sm = require('sandboxed-module');

describe('The custom HTML element', function() {

  let mut;
  let HTMLElement;

  beforeEach(function(done) {
    HTMLElement = function() {};

    mut = sm.require('../src/element', {
      globals: {
        HTMLElement
      }
    });

    done();
  });

  it('should extend HTMLElement', function(done) {
    const element = new mut();

    expect(element).to.be.instanceOf(HTMLElement);
    done();
  });

  it('should register and trigger dispose functions on disconnect', function(done) {
    const element = new mut();

    element._onDispose(function() {
      done();
    });

    element.disconnectedCallback();
  });

});
