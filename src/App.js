import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Saroj', age: 35},
      {name: 'Raj', age: 37},
      {name: 'Manu', age: 40}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('It is clicked');
    // Dont do this //this.state.persons[0].name = "Roy";

    this.setState({
      persons: [
      {name: newName, age: 35},
      {name: 'Raj', age: 37},
      {name: 'Manu', age: 40}
    ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      {name: 'Saroj', age: 35},
      {name: event.target.value, age: 37},
      {name: 'Manu', age: 40}
    ]
  })
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid #eee',
      padding: '10px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi! I am React App!</h1>
        {/* <button style={style} onClick={() => this.switchNameHandler('Saroj Kamal')}>Switch name</button> */}
        <button style={style} onClick={this.tooglePersonsHandler}>Switch name</button>
        { this.state.showPersons === true ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Poddar')} 
            changed={this.nameChangedHandler}>My hobbies Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
          </div> 
          : null
        } 
      </div>
      
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I\'m React'));
  }
}

export default App;
