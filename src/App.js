import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <h1> Ini Header </h1>
        </header>
        <body className="App-body">
          <div> Hello World </div>
        </body>
        <footer className="App-footer">
          <div> ini footer yakan </div>
          <div> copyright FiiD17 </div>
        </footer>
      </div>
    );
  }
}

export default App;
