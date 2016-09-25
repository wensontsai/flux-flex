"use strict";

var React = require("react"),
    Application = require('./network/network'),
    TodoStore = require('./stores/network'),
    Actions = require('./actions/network'),
    Fluxxor = require("fluxxor");

window.React = React;

var stores = {
  TodoStore: new TodoStore()
};

var flux = new Fluxxor.Flux(stores, Actions.actions);

window.flux = flux;

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

React.render(<Application flux={flux} />, document.getElementById("app"));
