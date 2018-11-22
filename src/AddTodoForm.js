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
      <div className="add-todo__container">
        <form className="add-todo" onSubmit={this.handleSubmit}>
          <label htmlFor="task" />
          <input
            placeholder="New todo"
            className="add-todo__input"
            type="text"
            name="task"
            value={this.state.newTask}
            onChange={this.handleFormChange}
          />
          <div className="add-todo__btn-container">
            <button className="add-todo__button" type="submit">
              +
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodoForm;
