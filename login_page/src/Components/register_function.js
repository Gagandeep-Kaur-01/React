import React, { useState } from 'react';
import { useInput } from './hooks/input-hook';

export default function Register(props) {
    const { value: email, bind: bindEmail, reset: resetEmail} = useInput('');
    const { value:username, bind:bindUsername, reset:resetUsername } = useInput ('');
    const { value: passWord, bind: bindPassword, reset: resetPassword} = useInput('');
    const { value: age, bind: bindAge, reset: resetAge} = useInput('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting Details: Email: ${email} Username: ${username} ; Password: ${passWord} ; Age: ${age}`);
        resetEmail();
        resetUsername();
        resetPassword();
        resetAge();
    }
    
    return (
        <div className="App">       
                                       
            <h2>Create an account.....</h2> 

            <form onSubmit={handleSubmit}>                 
            <label for="email">
               Email:
               <input type="email" {...bindEmail} id="email" name="email"/>
            </label> <br/> <br/>

            <label for="username">
               Username:
               <input type="text" {...bindUsername}  id="username" name="username"/>
            </label> <br/> <br/>

            <label for="password">
               Password:
               <input type="password" {...bindPassword} id="pass" name="password"/>
            </label> <br/> <br/>

            <label for="age">
               Age:
               <input type="text" {...bindAge} id="age" name="age"/>
            </label> 
             <br></br>    <br/>

             <button> Register </button>  

            </form>            

        </div>
        
      ); 
    
}