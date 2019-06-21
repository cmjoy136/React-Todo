import React, { Component } from "react";
import "../index.css";
import TodoList from "./TodoList";
import { Switch, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addItem, clearCompletedTodos } from '../actions/actions';

class App extends Component {
  state = {
    value: ""
  };

  addItem = e => {
    if (e.key === "Enter") {
      this.props.addItem(this.state.value)
    }
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autofocus
            onChange={this.handleChange}
            value={this.state.value}
            onKeyDown={this.addItem}
          />
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TodoList todos={this.props.todos} deleteItem={this.deleteItem} />
            )}
          />
          <Route
            exact
            path="/active"
            render={() => (
              <TodoList
                todos={this.props.todos.filter(todo => !todo.completed)}
                deleteItem={this.deleteItem}
              />
            )}
          />
          <Route
            exact
            path="/completed"
            render={() => (
              <TodoList
                todos={this.props.todos.filter(todo => todo.completed)}
                deleteItem={this.deleteItem}
              />
            )}
          />
        </Switch>

        <footer className="footer">
          <span className="todo-count">
            <strong>
              {this.props.todos.filter(todo => !todo.completed).length}
            </strong>{" "}
            item(s) left
          </span>
          <ul className="filters">
            <li>
              <NavLink exact to="/" activeClassName="selected">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/active" activeClassName="selected">
                Active
              </NavLink>
            </li>
            <li>
              <NavLink to="/completed" activeClassName="selected">
                Completed
              </NavLink>
            </li>
          </ul>
          <button onClick={e=>this.props.clearCompletedTodos()} className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

export default connect(
  ({ todos }) => ({
    todos: todos.todos
  }),
  {addItem, clearCompletedTodos}
)(App);
