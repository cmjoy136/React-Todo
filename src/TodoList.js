import React, { Component } from "react";
import TodoItem from './TodoItem';

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

export default TodoList