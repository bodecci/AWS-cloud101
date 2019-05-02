import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [
        {name: "Feed the cat", status: "NEW"},
        {name: "Discover purpose of life", status: "NEW"},
        {name: "Learn to cloud", status: "NEW"}
      ]
    }
  }

  render() {
  return (
    <div className="App">
      <main>
        <h1>TODO List</h1>
        <TodoList items={items.state.items} />
        {/* // ...todo list goes here */}
      </main>
    </div>
    );
  }
}

export default App;
