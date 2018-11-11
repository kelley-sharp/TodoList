import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: 'remember stuff', id: 1, isDone: false },
        {
          task: 'be good',
          id: 2,
          isDone: false
        }
      ]
    };
  }

  render() {
    return (
      <ul className="list">
        {this.state.todos.map(todo => {
          return (
            <li>
              <input type="checkbox" />
              {todo.task}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
