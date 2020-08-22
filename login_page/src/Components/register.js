import React, { useState } from 'react';


export default function Register1(props) {
    const [ email, setEmail ] = useState('');
    const [ username, setUsername ] = useState ('');
    const [ password, setPassword] = useState('');
    const [ age, setAge] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting Details: Email: ${email} Username: ${username} ; Password: ${password} ; Age: ${age}`);
       }
     
    return (
        <div >       
                                       
            <h2>Create an account.....</h2> 

            <form onSubmit={handleSubmit}>                 
            <label for="email">
               Email:
               <input type="email" value={email} id="email" name="email" 
               onChange={e => setEmail(e.target.value)}/>
            </label> <br/> <br/>

            <label for="username">
               Username:
               <input type="text" value={username}  id="username" name="username"
               onChange={e => setUsername(e.target.value)}/>
            </label> <br/> <br/>

            <label for="password">
               Password:
               <input type="password" value={password} id="pass" name="password"
               onChange={e => setPassword(e.target.value)}/>
            </label> <br/> <br/>

            <label for="age">
               Age:
               <input type="text" value={age}  id="age" name="age"
               onChange={e => setAge(e.target.value)}/>
            </label> 
             <br></br>    <br/>

             <button> Register </button>  

            </form>            

        </div>
        
      ); 
    
};