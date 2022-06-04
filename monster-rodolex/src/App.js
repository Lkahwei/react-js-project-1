/*
  In order to create class component
  1. import React, { Component } from 'react';
  2. 
*/
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    //super() is to inherit the constructor method from the Component
    //After using super(); method, we can then use this.state

    super();

    this.state = {
      monster: [
        {
          name: 'Franken'
        },
        {
          name: 'Dracula'
        },
        {
          name: 'Zombie'
        },
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* {} will tell react that the code inside this curly brackets is going to be javascript code */}
            Hello {this.state.string}
          </p>
          <button onClick={() => this.setState({string: 'Hello Brixton'})}>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
