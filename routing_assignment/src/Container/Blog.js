import React, {Component} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Persons from '../Components/Persons.js';
import Table from '../Components/Table.js';
import Api_Table from '../Components/Api_table.js';
import Api_List from '../Components/Api_List.js';
import Dropdown from '../Components/3dots/dropdown';
import Text from '../Components/Styled_Component.js';
import './Blog.css';

class Blog extends Component {
  constructor(props){
   super(props);
    
    this.state = {
      data: [],
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      showPersons: false,
      value: '',
      data1: 'Initial data...',
    }
    
  };

  
    render() {   
      
    return(
      <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/persons/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Persons</NavLink></li>

                                <li><NavLink to={{
                                pathname: '/dyn_table'                                
                            }}>Dynamic Table</NavLink></li>

                            <li><NavLink
                                to="/api_table"
                                exact
                                activeClassName="hurray"
                                activeStyle={{
                                    color: '#fa923f',                                    
                                }}>Api_Table</NavLink></li>

                                 <li><NavLink to={{
                                pathname: '/api_list'                                
                            }}>Api_List</NavLink></li>

                               <li><NavLink to={{
                                pathname: '/dropdown'                                
                            }}>3dots</NavLink></li>

                               <li><NavLink to={{
                                pathname: '/styled_component'                                
                            }}>Styled_Component</NavLink></li>
                           
                        </ul>
                    </nav>
                </header>     


                <Switch>
                <Route path="/persons" component={() => <Persons value="Assignment" person={this.state.persons} />} />                                        
                <Route path="/dyn_table" component={Table} />
                <Route path="/api_table" component={Api_Table} />
                <Route path="/api_list" component={Api_List} /> 
                <Route path="/dropdown" component={Dropdown} /> 
                <Route path="/styled_component" component={() => <Text palette="secondary">Hello</Text> }/> 
                </Switch>
            </div>
       
    )
  }
}

export default Blog;
  
