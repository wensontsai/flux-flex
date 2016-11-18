"use strict";

var React = require("react"),
    Fluxxor = require("fluxxor");

var constants = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  CLEAR_TODOS: "CLEAR_TODOS"
};


var actions = {
  addTodo(text) {
    this.dispatch(constants.ADD_TODO, {text: text});
  },

  toggleTodo(id) {
    this.dispatch(constants.TOGGLE_TODO, {id: id});
  },

  clearTodos() {
    this.dispatch(constants.CLEAR_TODOS);
  }
};

exports.constants = constants;
exports.actions = actions;