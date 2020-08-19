import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
 
   render() {
    const greeting = 'Welcome to my Page';
    
    return (
      <div className="App">
      
            <h1>{greeting}</h1>  
       
      
      </div>
      
    );
  }
}

export default App;
