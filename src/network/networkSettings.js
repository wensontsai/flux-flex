"use strict";

var React = require("react"),
    NetworkStore = require('../stores/network'),
    Fluxxor = require("fluxxor");

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var NetworkSettings = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("NetworkStore")],

  getInitialState: function() {
    return { newTodoText: "" };
  },

  getStateFromFlux: function() {
    var flux = this.getFlux();
    return flux.store("NetworkStore").getState();
  },

  renderAvailableNetworks: function() {

  },

  render: function() {
    var todos = this.state.todos;
    return (
      <div>
        <div>
          Network Settings:
        </div>
        <div className="available-networks-dropdown">
          <div id="myDropdown" className="dropdown-content">
            <a href="#">Network 1</a>
            <a href="#">Network 2</a>
            <a href="#">Network 3</a>
          </div>
        </div>
          <button onclick="myFunction()" className="select-network-btn">Select</button>
      </div>
    );
  }
});

module.exports = NetworkSettings;