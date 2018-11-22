import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li
        onClick={this.props.toggleTodo}
        className={
          this.props.isDone
            ? 'todo-list__item--completed'
            : 'todo-list__item--active'
        }
      >
        <input type="checkbox" checked={this.props.isDone} />
        {this.props.task}
      </li>
    );
  }
}

export default Todo;
