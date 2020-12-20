import React, {Component} from 'react';
import './dropdown.css';

class Dropdown extends Component {
    constructor(props) {
        super(props);           

    }
   

    render() {

    return(
        <div className="header">

            {/*--three dots menu-- */}
            <div class="dropdown">
                {/*--three dots--*/}
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                
            </div>
            
        </div>
    )

    }
}

export default Dropdown;