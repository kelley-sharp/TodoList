import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h2>Todo List</h2>
        <div>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
