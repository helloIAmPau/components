const { expect } = require('chai');
const sm = require('sandboxed-module');

describe('The store module', function() {

  let mut;

  beforeEach(function(done) {
    mut = sm.require('../lib/stores');

    done();
  });

  it('should create stores by name', function(done) {
    expect(mut('test')).to.be.equal(mut('test'));
    expect(mut('test')).to.not.be.equal(mut('another'));

    done();
  });

  it('should register and trigger an action', function(done) {
    const store = mut('test');
    const p = {};
    const newData = { my: 'new data' };

    store.subscribe(function(data) {
      expect(store.data()).to.not.be.equal(store.data());
      expect(store.data()).to.be.deep.equal(newData);
      expect(data).to.be.deep.equal(newData);

      done();
    });

    store.action('test-action', function(payload) {
      expect(payload).to.be.equal(p);

      return Promise.resolve(newData);
    });

    store.dispatch('test-action', p);
  });

  it('should skip updates if an action returns null', function() {
    const store = mut('test');

    store.subscribe(function() {
      throw new Error('Fail if triggered');
    });

    store.action('test-action', function() {
    });

    return store.dispatch('test-action');
  });

  it('should skip an unassigned action', function() {
    const store = mut('test');
    return store.dispatch('test-action');
  });

  it('should disable a listener', function() {
    const store = mut('test');

    const unsubscribe = store.subscribe(function() {
      throw new Error('Fail if triggered');
    });

    store.action('test-action', function() {
      return {};
    });

    unsubscribe();

    return store.dispatch('test-action');
  });

});
