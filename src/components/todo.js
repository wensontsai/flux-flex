"use strict";

var React = require("react"),
    TodoStore = require('../stores/todo'),
    Fluxxor = require("fluxxor");

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

// StoreWatchMixin("storeName") binds and watches for 'change' events only.
// typical way is to bind listeners in componentWillMount
// and unbind in componentWillUnmount

var TodoItem = require('./todoItem');

var TodoApp = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("TodoStore")],

  getInitialState() {
    return { newTodoText: "" };
  },

  getStateFromFlux() {
    var flux = this.getFlux();
    // Our entire state is made up of the TodoStore data. In a larger
    // application, you will likely return data from multiple stores, e.g.:
    //
    //   return {
    //     todoData: flux.store("TodoStore").getState(),
    //     userData: flux.store("UserStore").getData(),
    //     fooBarData: flux.store("FooBarStore").someMoreData()
    //   };
    return flux.store("TodoStore").getState();
  },

  render() {
    var todos = this.state.todos;
    return (
      <div>
        <ul>
          {Object.keys(todos).map((id) => {
            return <li key={id}><TodoItem todo={todos[id]} /></li>;
          })}
        </ul>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" size="30" placeholder="New Todo"
                 value={this.state.newTodoText}
                 onChange={this.handleTodoTextChange} />
          <input type="submit" value="Add Todo" />
        </form>
        <button onClick={this.clearCompletedTodos}>Clear Completed</button>
      </div>
    );
  },

  handleTodoTextChange(e) {
    this.setState({newTodoText: e.target.value});
  },

  onSubmitForm(e) {
    e.preventDefault();
    if (this.state.newTodoText.trim()) {
      this.getFlux().actions.addTodo(this.state.newTodoText);
      this.setState({newTodoText: ""});
    }
  },

  clearCompletedTodos(e) {
    this.getFlux().actions.clearTodos();
  }
});

module.exports = TodoApp;