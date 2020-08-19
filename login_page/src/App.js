import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/login_class.js';


class App extends Component {
  
 
   render() {
    const greeting = 'Welcome to my Page';
    
    return (
      <div className="App">
      
            <h1>{greeting}</h1>  

            <Login value="Login an account" />
       
      
      </div>
      
    );
  }
}

export default App;
