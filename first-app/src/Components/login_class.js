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
      <h3>{this.props.value}!</h3>      
    </div> 

    ); 
    
  }
}
export default Login;

/*
•	Props is also an object that holds information to control the behavior of that particular component, sounds familiar to State.
•	Basically props are used to pass data from component to component. 
•	There is no way passing props from a child to a parent component.
•	Everything incoming is props, everything managed by the component itself is state. 
*/
