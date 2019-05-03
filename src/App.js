import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './TodoList';
import './App.css';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsmobile);

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: []
    }
  }

  logOut = () => {
    Auth.signOut();
    window.location.reload();
  }

  getTodos = async() => {
    const result = await API.graphql(graphqlOperation(queries.listTodos)); // API call to get ToDos

    this.setState({items: result.data.listTodos.items});
  }

  addTodo = async() => {
    const createTodoInput = { input: {name: this.refs.newTodo.value, status: "NEW"}};

    await API.graphql(graphqlOperation(mutations.createTodo, createTodoInput));

    this.refs.newTodo.value = '';
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
  return (
    <div className="App">
      <main>
        <h1>TODO List</h1>
        <TodoList items={this.state.items} />
        {/* // ...todo list goes here */}
        <input type="text" ref="newTodo" />
        <button onClick={this.addTodo}>Add Todo</button>
      </main>
      {/* <button onClick={this.logOut}>Log Out</button> */}
    </div>
    );
  }
}

export default withAuthenticator(App, true);
