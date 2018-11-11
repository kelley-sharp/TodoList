import React, { Component } from 'react';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ''
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    this.setState({
      newTask: event.target.value
    });
  }

  render() {
    return (
      <form>
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
