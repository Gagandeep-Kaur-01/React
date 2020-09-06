import React, { Component } from 'react';

export default function Persons(props) {
    console.log(props.person);

    return(
        <div> 
            <h1 id='hd_tit'>{props.value}</h1>

            <h3><b><u>List of Persons:</u></b></h3>             
            <ul>
               {props.person.map((person => 
                <li key={person.id}>    
                <span id={person.id}>My name is {person.name}, I am {person.age} years old</span>
                </li>
               ))}    
            </ul> 

        </div>       
    );
}