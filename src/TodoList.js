import React, { Component } from 'react';
import Todo from './Todo';
import "./todoApp.css"

class TodoList extends Component {

  toggleTodo(id, event) {
    console.log(`%c THE ID IS ${id}`, 'font-size: 25px;');
    let updatedTodos = this.props.todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = todo.isDone ? false : true;
      }
      return todo;
    });

    this.props.updateTodos(updatedTodos);
  }

  render() {
    return (
      <div className="list-container">
        <ul className="list">
          {this.props.todos.map(todo => {
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
