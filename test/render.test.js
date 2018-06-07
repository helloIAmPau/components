const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const sm = require('sandboxed-module');

const { expect } = chai;
chai.use(sinonChai);


describe('The render module', function() {

  let mut;
  let H;
  let template;
  let root;

  beforeEach(function(done) {
    root = {};

    template = sinon.stub();
    template.returns('the template');

    H = {
      compile: sinon.stub()
    };
    H.compile.returns(template);

    mut = sm.require('../lib/render', {
      requires: {
        'handlebars': H
      }
    });

    done();
  });

  it('should build a render function', function(done) {
    const someData = {};

    const render = mut(root, 'the html template');
    expect(H.compile).to.be.calledWithExactly('the html template');

    render(someData);
    expect(template).to.be.calledWithExactly(someData);
    expect(root.innerHTML).to.be.equal('the template');

    done();
  });

});
