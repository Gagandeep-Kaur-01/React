import React, {Component} from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          username:'',
          password:''
        };
      }
    
  render() {
    return (
        <h3> Login Page</h3>
    ); 
    
  }
}
export default Login;
