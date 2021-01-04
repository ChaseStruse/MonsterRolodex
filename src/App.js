import React, { Component } from 'react'
import { CardList } from "./components/card-list/card-list.jsx";
import './App.css';

class App extends Component {
  constructor(){
    // Allows us to gain access to state
    super();
    // Default state of the class
    this.state = {
      monsters: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  
  }
  render(){
    return (
      <div className="App">
        <CardList>
          { this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>) /* Map returns and iterates over every monsters */ }
        </CardList>
      </div>
    );
  }
}

export default App;
