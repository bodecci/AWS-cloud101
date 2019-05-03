import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './TodoList';
import './App.css';

import Amplify, { Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsmobile);

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

  logOut = () => {
    Auth.signOut();
    window.location.reload();
  }

  render() {
  return (
    <div className="App">
      <main>
        <h1>TODO List</h1>
        <TodoList items={this.state.items} />
        {/* // ...todo list goes here */}
      </main>
      <button onClick={this.logOut}>Log Out</button>
    </div>
    );
  }
}

export default withAuthenticator(App, true);
