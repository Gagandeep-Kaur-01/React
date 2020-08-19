import React, {Component} from 'react';

export default class Validation extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            inputValue: '' };
    }

    handleChange = (event) => {
        this.setState({inputValue: event.target.value });
    }

    render() {
        let header = '';
        if (this.state.inputValue.length > 10) {
            header = <h1>Too long </h1>
        } else if (this.state.inputValue.length < 5) {
            header = <h1> Too short </h1>
        }    else {
            header = <h1> OKK </h1>
        }       
    

        return (
        <div>
            {header}        
        <input 
        type= 'text' 
        onChange={this.handleChange} placeholder= "Type Something..."/>
        
        </div>
        );
    }
}