import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Rockaway Beach</h2>
        </div>
        <p className="App-intro">
          We are currently under maintenance. We'll be back by the end of the day.
        </p>
      </div>
    );
  }
}

export default App;
