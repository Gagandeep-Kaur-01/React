
import React, { useState } from 'react';

export default function Persons(props){
    
    console.log(props.person);

    return(
        <div> 
            <h1 id='tit'>{props.value}</h1> 

            <h3><b><u>List of Persons:</u></b></h3>                     
           <ul>
               {props.person.map((p => 
                   <li key={p.id}>               
                   <span id={p.id}>My name is {p.name}, I am {p.age} years old</span>
                   </li>
               ))}    
               </ul> 
        </div>
    );

}