import React from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/'
import LoginPage from './pages/LoginPage/'
import RecipesPage from './pages/RecipesPage/'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      activeUser: null,
      activeUserRecipes: null,
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(activeUser) {
    this.setState({activeUser});
  }

  handleLogout() {
    this.setState({
      activeUser: null,
      activeUserRecipes: null
    })
  }

  render() {
    const {activeUser } = this.state;

    return (
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage activeUser={activeUser} handleLogout={this.handleLogout}/>
          </Route>
          <Route path="/login">
            <LoginPage handleLogin={this.handleLogin}/>
          </Route>          
          <Route path="/recipes">
            <RecipesPage activeUser={activeUser} handleLogout={this.handleLogout}/>
          </Route>
        </Switch>
      </div>
    );
  }

}

export default App;
