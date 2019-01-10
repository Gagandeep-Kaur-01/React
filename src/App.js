import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Carousel } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Nav bsStyle="tabs" activeKey="1">
             <NavItem eventKey="1" href="/home">
               Hello
             </NavItem>
             <NavItem eventKey="2" title="Item">
               Home
             </NavItem>
             <NavItem eventKey="3" disabled>
               About
             </NavItem>
             <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
               <MenuItem eventKey="4.1">1</MenuItem>
               <MenuItem eventKey="4.2">2</MenuItem>
               <MenuItem eventKey="4.3">3</MenuItem>
               <MenuItem divider />
               <MenuItem eventKey="4.4">4</MenuItem>
             </NavDropdown>
           </Nav>

      <h>I like to learn by practice</h>

        <Button bsStyle="success">Success</Button>

        <Carousel>
          <Carousel.Item>
            <img width={1000} height={800} alt="Image1" src=".images/hd2.jpg"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="Image2" src="images\005.jpg" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="Image3" src="images\8.jpg" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
    );
  }
}

export default App;
