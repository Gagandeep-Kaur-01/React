import React, {Component} from 'react';
import Persons from '../Components/Persons.js';


class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor")
  }


  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    value: '',
  };

  render() {

    console.log(this.state.persons)
 
  return (
    <div className="App">      

       <Persons value="Assignment" person = {this.state.persons}/>

    </div>
    );
  }
}

export default App;
