import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(){
    // Allows us to gain access to state
    super();
    // Default state of the class
    this.state = {
      monsters: [
        {
          id: 1,
          name: 'Frankenstein'
        },
        {
          id: 1,
          name: 'Dracula'
        },
        {
          id: 1,
          name: 'Zombie'
        }
      ]
    };
  }
  render(){
    return (
      <div className="App">
        {
          // Map returns and iterates over every monsters
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
