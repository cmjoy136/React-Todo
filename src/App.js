import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import TodoList from "./TodoList";
import { Switch, Route, NavLink } from "react-router-dom";

class App extends Component {
  state = {
    value: " ",
    todos: todosList
  };

  deleteItem = id => e => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  };

  checkItem = id => e => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  deleteCheckedItem = e => {
    const newTodos = this.state.todos.filter(todo => todo.completed !== true);
    this.setState({
      todos: newTodos
    });
  };

  addItem = e => {
    if (e.key === "Enter") {
      const newTodos = this.state.todos.slice();
      newTodos.push({
        userId: 1,
        id: Math.ceil(Math.random() * 10),
        title: this.state.value,
        completed: false
      });
      this.setState({
        value: "",
        todos: newTodos
      });
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
              <TodoList
                todos={this.state.todos}
                deleteItem={this.deleteItem}
                checkItem={this.checkItem}
              />
            )}
          />
          <Route
            exact
            path="/active"
            render={() => (
              <TodoList
                todos={this.state.todos.filter(todo => !todo.completed)}
                deleteItem={this.deleteItem}
                checkItem={this.checkItem}
              />
            )}
          />
          <Route
            exact
            path="/completed"
            render={() => (
              <TodoList
                todos={this.state.todos.filter(todo => todo.completed)}
                deleteItem={this.deleteItem}
                checkItem={this.checkItem}
              />
            )}
          />
        </Switch>

        <footer className="footer">
          <span className="todo-count">
            <strong>
              {this.state.todos.filter(todo => !todo.completed).length}
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
          <button onClick={this.deleteCheckedItem} className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

export default App;
