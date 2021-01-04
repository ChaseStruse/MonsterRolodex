import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    // Allows us to gain access to state
    super();
    // Default state of the class
    this.state = {
      message: 'I am now a class!'
    };
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.message}</p>
          <button onClick={()=>this.setState({message: 'I changed!'})}>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
