"use strict";

var React = require("react"),
    Application = require('./todo/todo'),
    TodoStore = require('./stores/todo'),
    Actions = require('./actions/todo'),
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
