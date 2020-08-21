import React, {Component} from 'react';
import "./login.css";
import Welcome from "./Welcome.js"


class Login extends React.Component {
  constructor(props) { //accepts props as input
    super(props); //to pass down whatever is being inherited from the parent class
    this.state= {
      username:'',
      password:'',
      showSuccess: false,
               
    };
  }  

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState(prevState => ({
      ...prevState,
      [name] : value
    }))
   
  }

  handleSubmit= (event) => {
    event.preventDefault();
    alert("Username: " + this.state.username + "; " +"Password: " + this.state.password);
        console.log(this.state);
        this.setState({showSuccess: true}) 
  
      }



     render()
     {     
      
      let {showSuccess} = this.state;
     
      return (                           
           
        <div className="App">      

        {showSuccess ? <Welcome/> : <div>           
           
          <h2>{this.props.value}.....</h2>    <br/>                           
                               
             <label for="username">
               Username:
               <input type="text" value={this.state.username} onChange={this.handleChange} id="username" name="username"/>
             </label> <br/> <br/>

             <label for="pass">
               Password:
               <input type="password" value={this.state.password} onChange={this.handleChange} id="pass" name="password"/>
             </label> <br>

             </br> <br></br>    

             <button onClick= {this.handleSubmit}>
             Login 
             </button>    
             </div>                              

        }
        </div> 
          
      );
    }
}

export default Login;
