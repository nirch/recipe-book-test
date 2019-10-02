import React from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'


function App() {

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Recipe Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Recipes</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#/signup">Signup</Nav.Link>
            <Nav.Link href="#/login">Login</Nav.Link>
            <Nav.Link href="#/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/login" component={LoginPage}/>
      <Route path="/recipes" component={RecipesPage}/> */}
      </Switch>
    </div>
  );

}

export default App;
