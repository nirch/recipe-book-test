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
      activeUser: null
    }
  }
  

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage activeUser={this.state.activeUser}/>
          </Route>
          <Route path="/login" component={LoginPage} />
          <Route path="/recipes" component={RecipesPage}/>
        </Switch>
      </div>
    );
  }

}

export default App;
