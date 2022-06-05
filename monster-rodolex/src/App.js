/*
  In order to create class component
  1. import React, { Component } from 'react';
  2. 
*/
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './search-box/search-box.component';
class App extends Component {
  constructor(){
    //super() is to inherit the constructor method from the Component
    //After using super(); method, we can then use this.state

    super();

    this.state = {
      monsters: [],
      searchField: '',
      meaningOfLife: 48
    };
// In order to prevent the this keyword inside the handlechange become undefiend, we can bind the context of component to the handleChange method (if we are not using the arrow function)
    // this.handleChange = this.handleChange.bind(this);

    // This.setState is asynchronous, meaning that it will update sometimes in the future.
  }

  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return{meaningOfLife: prevState}
    },
      () => console.log(this.state.meaningOfLife)
    )

  }

  //componentDidmount method get called automatically when the this component is mounted to the page
  //  Whenever the state changes, it will re-render the component 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
// When we use the method from the component, this keyword is automatically referring to the context of class component
// If we write our own method, the context of this will become undefined

// Else if we are using the arrow function like this, it will automatically bind this to the place that this arrow function was defined in the first place  
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField, meaningOfLife } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">

        {/* The this keyword inside the component method is referring to the current context */}
        <SearchBox placeholder='Search Monster' handleChange = {this.handleChange}/>
        <CardList monsters={filteredMonster}/>
        <h1>{meaningOfLife}</h1>
        <button onClick={this.handleClick}>Update Meanign of Life</button>
      </div>
      
    );
  }
}

export default App;
