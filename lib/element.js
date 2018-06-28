class Element extends HTMLElement {

  constructor() {
    super();

    this._disposers = [];
  }

  _onDispose(d) {
    this._disposers.push(d);
  }

  disconnectedCallback() {
    this._disposers.forEach(function(d) {
      d();
    });
  }

}

module.exports = Element;
