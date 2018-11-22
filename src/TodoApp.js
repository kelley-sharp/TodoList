import React, { Component } from 'react';
import './todoApp.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import Footer from './Footer';

class TodoApp extends Component {
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
    this.updateTodos = this.updateTodos.bind(this);
  }

  addTodo(newTodo) {
    let newTodos = this.state.todos.slice();
    newTodos.push(newTodo);
    this.setState({
      todos: newTodos
    });
  }

  updateTodos(updatedTodos) {
    this.setState({
      todos: updatedTodos
    });
  };

  render() {
    return (
      <div className="container">
        <div className="todo-app">
        <h2>Todo List</h2>
        <AddTodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} updateTodos={this.updateTodos} />
        <Footer />
        </div>
      </div>
    );
  }
}

export default TodoApp;
