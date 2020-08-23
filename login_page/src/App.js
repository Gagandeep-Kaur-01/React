import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/login_class.js';
import Register from './Components/register_function.js';
import Register1 from './Components/register.js';

class App extends Component {
  
 
   render() {
    const greeting = 'Welcome to my Page';
    
    return (
      <div className="App">
      
            <h1 style={{color: "red"}}>{greeting}</h1>  

           
            <Register/>

                 
      
      </div>
      
    );
  }
}

export default App;
