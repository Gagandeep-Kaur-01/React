import React, {Component} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';

import Persons from '../Components/Persons.js';

import ReactDOM from 'react-dom';
import Table from '../Components/Table.js'
import Api_Table from '../Components/Api_table.js'
import Api_List from '../Components/Api_List.js'


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
    this.setStateHandler = this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);  
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
  };

  updateState(e) {
    this.setState({data1: e.target.value})
  }

  clearInput() {
    this.setState({data1: ''});
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  
  }

  forceUpdateHandler() {
    this.forceUpdate();
 };

  setStateHandler() {
    var item = "setState..."
    var myArray = this.state.data.slice();
        myArray.push(item);
    this.setState({data: myArray})
  };

 

    render() {   
      console.log("[App.js] render :- Persons detail")
      console.log(this.state.persons);
      const { dispatch, visibleTodos } = this.props

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
                           
                        </ul>
                    </nav>
                </header>     


                <Switch>
                    <Route path="/persons" component={() => <Persons value="Assignment-5" person={this.state.persons} />} />                    
                    <Route path="/dyn_table" component={Table} />
                    <Route path="/api_table" component={Api_Table} />
                    <Route path="/api_list" component={Api_List} />                    
                </Switch>
            </div>
       
    )
  }
}

function select(state) {
  return {
     visibleTodos: state.todos
  }
}

export default Blog;
  
