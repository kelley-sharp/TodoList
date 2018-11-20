import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h2>Todo List</h2>
        <h3>Here's where you can do all the things.</h3>
        <TodoList />
      </div>
    );
  }
}

export default App;
