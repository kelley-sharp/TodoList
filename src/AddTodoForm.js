import React, { Component } from 'react';
import uuid from 'uuid/v1';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ''
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange(event) {
    this.setState({
      newTask: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newTodo = {
      task: this.state.newTask,
      isDone: false,
      id: uuid()
    };
    this.props.addTodo(newTodo);
    this.setState({
      newTask: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task" />
        <input
          type="text"
          name="task"
          value={this.state.newTask}
          onChange={this.handleFormChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddTodoForm;
