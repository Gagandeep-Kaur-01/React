import React, {Component} from 'react';
import "./login.css";


class Login extends React.Component {
  constructor(props) { //accepts props as input
    super(props); //to pass down whatever is being inherited from the parent class
    this.state= {
      username:'',
      password:'',
               
    };
  }  
     

     render()
     {     
      
      let {showSuccess} = this.state;
     
      return (                           
           
        <div className="App">  

               
           
          <h2>{this.props.value}.....</h2>    <br/>                           
                               
             <label for="username">
               Username:
               <input type="text" id="username" name="username"/>
             </label> <br/>
             <label for="pass">
               Password:
               <input type="password" id="pass" name="password"/>
             </label> <br>
             </br> <br></br>    

             <button>
             Login 
             </button>                                 

        
        </div> 
          
      );
    }
}

export default Login;
