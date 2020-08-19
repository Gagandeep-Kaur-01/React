import React, {Component} from 'react';

export default class Validation extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            inputValue: '' };
    }

  

    render() {
           

        return (
        <div>
                  
        <input 
        type= 'text' 
        placeholder= "Type Something..."/>
        
        </div>
        );
    }
}