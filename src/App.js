import React from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeNavbar from "./components/RecipeNavbar"

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
        <RecipeNavbar activeUser={this.state.activeUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          {/* <Route path="/recipes" component={RecipesPage}/> */}
        </Switch>
      </div>
    );
  }

}

export default App;
