import React, {Component} from 'react';
import "./login.css";


class Login extends React.Component {
  constructor(props) { //accepts props as input
    super(props); //to pass down whatever is being inherited from the parent class
    this.state= {
      username:'Gagan',
      password:'qwerty',
               
    };
  }  

  handleSubmit= (event) => {
    event.preventDefault();
    alert("Username: " + this.state.username + "; " +"Password: " + this.state.password);
        console.log(this.state);
  
      }



     render()
     {     
      
      let {showSuccess} = this.state;
     
      return (                           
           
        <div className="App">                
           
          <h2>{this.props.value}.....</h2>    <br/>                           
                               
             <label for="username">
               Username:
               <input type="text" value={this.state.username} id="username" name="username"/>
             </label> <br/>
             <label for="pass">
               Password:
               <input type="password" value={this.state.password} id="pass" name="password"/>
             </label> <br>
             </br> <br></br>    

             <button onClick= {this.handleSubmit}>
             Login 
             </button>                                 

        
        </div> 
          
      );
    }
}

export default Login;
