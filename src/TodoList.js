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
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    let newTodos = this.state.todos.slice();
    newTodos.push(newTodo);
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div>
        <AddTodoForm addTodo={this.addTodo} />
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
