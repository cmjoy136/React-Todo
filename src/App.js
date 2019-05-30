import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";

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
        <TodoList
          todos={this.state.todos}
          deleteItem={this.deleteItem}
          checkItem={this.checkItem}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button onClick={this.deleteCheckedItem} className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onClick={this.props.checkItem}
          />
          <label>{this.props.title}</label>
          <button onClick={this.props.deleteItem} className="destroy" />
        </div>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              checkItem={this.props.checkItem(todo.id)}
              deleteItem={this.props.deleteItem(todo.id)}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
