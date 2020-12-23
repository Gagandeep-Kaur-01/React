import React, {Component} from 'react';
import './dropdown.css';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.state = {
            open: false,
        };        
    }  

   
/*wire up click listeners on the document for mousedown */
    componentDidMount() {
        document.addEventListener("mousedown", this.ClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.ClickOutside);
    } 

    showDropdown = () => {
        this.setState(state=> {
            return {
                open: !state.open,
            };
        });
    };   

   /* showDropdown = () => {
        this.setState({
            open: true,
        }) , () => {
            document.addEventListener('click', this.closeDropdown);
          });
         // event.preventDefault(); 
        };   

   closeDropdown = () => {
        this.setState({ openDropdown: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
    } */    

    ClickOutside = (event) => {   
        if (this.container.current && !this.container.current.contains(event.target)) {     
            this.setState({
                open: false,
            });
        }
    };

    render() {
    return(
        <div className="header" ref={this.container}>

            {/*--three dots menu-- */}
            <div class="dropdown">
                {/*--three dots--*/}
              {/* <ul className="dropbtn icons btn-right" onClick={this.showDropdown}>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul> */}
                <button class="button" onClick={this.showDropdown}>
                  ☰
                </button>

                {this.state.open && (
                    <div className="dropdown-content">
                     <a href="#home">Home</a>
                     <a href="#about">About</a>
                     <a href="#contact">Contact</a>
                    {/* <ul>
                         <li href="#home">Home</li>
                         <li href="#about">About</li>
                        </ul> */}
                    </div>   
                )}
            </div>
            
        </div>
    )

    }
}

export default Dropdown;