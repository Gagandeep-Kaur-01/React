import React, {Component} from 'react';
import Persons from '../Components/Persons.js';


class App extends Component {
  state = {
    showPersons: false,
    value: '',
  };

  render() {

 
  return (
    <div className="App">
       <h1>Hello</h1>

       <Persons/>
    </div>
    );
  }
}

export default App;
