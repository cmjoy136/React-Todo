import React, { Component } from "react";

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

  export default TodoItem;