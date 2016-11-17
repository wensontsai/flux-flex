"use strict";

var React = require("react"),
    Fluxxor = require("fluxxor");

var constants = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  CLEAR_TODOS: "CLEAR_TODOS"
};


var actions = {
  addTodo: function(text) {
    this.dispatch(constants.ADD_TODO, {text: text});
  },

  toggleTodo: function(id) {
    this.dispatch(constants.TOGGLE_TODO, {id: id});
  },

  clearTodos: function() {
    this.dispatch(constants.CLEAR_TODOS);
  }
};

exports.constants = constants;
exports.actions = actions;