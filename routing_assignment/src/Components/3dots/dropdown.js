import React, {Component} from 'react';
import './dropdown.css';

class Dropdown extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            open: false
        };       
    }

    showDropdown = () => {
        this.setState(state=> {
            return {
                open: !state.open,
            };
        });
    };
   

    render() {

    return(
        <div className="header">

            {/*--three dots menu-- */}
            <div class="dropdown">
                {/*--three dots--*/}
                <ul className="dropbtn icons btn-right" onClick={this.showDropdown}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                {this.state.open && (
                     <div style={{ float:'right' }} className="dropdown-content">
                     <a href="#home">Home</a>
                     <a href="#about">About</a>
                     <a href="#contact">Contact</a>
                 </div>   
                )}
                
            </div>
            
        </div>
    )

    }
}

export default Dropdown;