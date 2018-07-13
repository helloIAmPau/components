const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const sm = require('sandboxed-module');

const { expect } = chai;
chai.use(sinonChai);


describe('The render module', function() {

  let mut;
  let root;
  let template;
  let id;

  beforeEach(function(done) {
    template = sinon.spy();

    root = { root: 'element' };

    id = {
      patch: sinon.spy()
    };

    mut = sm.require('../lib/render', {
      requires: {
        'incremental-dom': id
      }
    });

    done();
  });

  it('should patch the dom using id', function(done) {
    const render = mut(root, template);
    render();

    expect(id.patch).to.be.calledWith(root);
    id.patch.getCall(0).args[1]();
    expect(template).to.be.calledWithExactly(root);

    done();
  });

});
