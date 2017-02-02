import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './user-list/UserList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-content">
          <UserList />
        </div>
      </div>
    );
  }
}

export default App;
