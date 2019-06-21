import React, { Component } from "react";
import { connect } from 'react-redux';
import { checkItem, deleteItem } from '../actions/actions'


class TodoItem extends Component {
    render() {
      return (
        <li className={this.props.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={this.props.completed}
              onChange={ () => this.props.checkItem(this.props.todoId)}
            />
            <label>{this.props.title}</label>
            <button onClick={() => this.props.deleteItem(this.props.todoId)} className="destroy" />
          </div>
        </li>
      );
    }
  }

  export default connect(
    null, 
    {checkItem, deleteItem}
  ) (TodoItem);