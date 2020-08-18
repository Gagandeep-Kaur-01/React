import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './Components/login_function.js';
import Login from './Components/login_class.js';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        isLogin: 'false',
      }    
  }

  render() {
    const greeting = 'Welcome to React'; 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            </a>

            <h1>{greeting}</h1>
             
            <Login value="Login Form"/>  
            <Hello/>      
          
        </header>
      </div>          
            
          
    );
  }
}
export default App;
