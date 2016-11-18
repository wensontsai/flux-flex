"use strict";

var React = require("react"),
    TodoApp = require('./components/todo'),
    TodoStore = require('./stores/todo'),
    TodoActions = require('./actions/todo'),
    Fluxxor = require("fluxxor");

window.React = React;

var stores = {
  TodoStore: new TodoStore()
};

var flux = new Fluxxor.Flux(stores, TodoActions.actions);

window.flux = flux;

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

React.render(<TodoApp flux={flux} />, document.getElementById("app"));
