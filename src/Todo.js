import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.isDone} />
        {this.props.task}
      </li>
    );
  }
}

export default Todo;
