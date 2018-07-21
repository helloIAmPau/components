'use strict';

var _stores = {};

var factory = function factory() {
  var _actions = {};

  var _data = {};
  var _listeners = [];

  var store = {};

  store.action = function (name, handler) {
    _actions[name] = handler;
  };

  store.dispatch = function (name, payload) {
    if (typeof _actions[name] !== 'function') {
      return;
    }

    var res = _actions[name](payload);

    return Promise.resolve(res).then(function (data) {
      if (data == null) {
        return;
      }

      _data = data;

      _listeners.forEach(function (l) {
        l(store.data());
      });
    });
  };

  store.subscribe = function (listener) {
    _listeners.push(listener);

    return function () {
      _listeners = _listeners.filter(function (l) {
        return l !== listener;
      });
    };
  };

  store.data = function () {
    return Object.assign({}, _data);
  };

  return store;
};

module.exports = function (name) {
  if (_stores[name] == null) {
    _stores[name] = factory();
  }

  return _stores[name];
};