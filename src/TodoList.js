import React, { Component } from 'react';
import Todo from './Todo';
import AddTodoForm from './AddTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: 'remember stuff', id: 1, isDone: true },
        {
          task: 'be good',
          id: 2,
          isDone: false
        }
      ]
    };

  //   addTodo = newTask => {
  //     this.setState({
  //       todos: this.state.todos.push(newTask)
  //     });
  //   };
  // }

  render() {
    return (
      <div>
        <AddTodoForm />
        <ul className="list">
          {this.state.todos.map(todo => {
            return <Todo task={todo.task} isDone={todo.isDone} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
