"use strict";

var React = require("react"),
    NetworkStore = require('../stores/network'),
    Fluxxor = require("fluxxor");

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var NetworkStatus = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("NetworkStore")],

  getInitialState: function() {
    return { newTodoText: "" };
  },

  getStateFromFlux: function() {
    var flux = this.getFlux();
    return flux.store("NetworkStore").getState();
  },

  render: function() {
    var todos = this.state.todos;
    return (
      <div>
        <div>
          Status:
        </div>
        <div>
          <p>
            some info
          </p>
        </div>
      </div>
    );
  }
});

module.exports = NetworkStatus;