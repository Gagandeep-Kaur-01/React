import React, {Component} from 'react';

export default class Validation extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            inputValue: '' ,
            date: new Date(),
        };
    }

    //The componentDidMount() method runs after the component output has been rendered to the DOM. 

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
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
        }    else if (this.state.inputValue.length = 5){
            header = <h1> OKK </h1>
        }       
            else{
                header = '';
        }
    

        return (
        <div>
            {header}        
        <input 
        type= 'text' 
        onChange={this.handleChange} placeholder= "Type Something..."/>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}