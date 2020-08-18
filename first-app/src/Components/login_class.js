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
      <div>
      <h2>Is Login: {this.props.isLogin}</h2>        
    </div> 

    ); 
    
  }
}
export default Login;
