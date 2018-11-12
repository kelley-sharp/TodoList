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

  toggleTodo(id, event) {
    console.log(`%c THE ID IS ${id}`, 'font-size: 25px;');
    let updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = todo.isDone ? false : true;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    return (
      <div className="todo-app">
        <AddTodoForm addTodo={this.addTodo} />
        <ul className="list">
          {this.state.todos.map(todo => {
            return (
              <Todo
                task={todo.task}
                isDone={todo.isDone}
                toggleTodo={this.toggleTodo.bind(this, todo.id)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
