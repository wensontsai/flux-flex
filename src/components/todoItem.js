"use strict";

var React = require("react"),
    TodoStore = require('../stores/todo'),
    Fluxxor = require("fluxxor");

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;


var TodoItem = React.createClass({
  mixins: [FluxMixin],

  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render() {
    var style = {
      textDecoration: this.props.todo.complete ? "line-through" : ""
    };

    return <span style={style} onClick={this.onClick}>{this.props.todo.text}</span>;
  },

  onClick() {
    this.getFlux().actions.toggleTodo(this.props.todo.id);
  }
});

module.exports = TodoItem;