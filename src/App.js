import React from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/'
import LoginPage from './pages/LoginPage/'
import RecipesPage from './pages/RecipesPage/'
import 'bootstrap/dist/css/bootstrap.min.css';
import allUsers from './data-model/data/users'
import allRecipes from './data-model/data/recipes'


class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      activeUser: null,
      allRecipes,
      allUsers,
      activeUserRecipes: null,
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
  }

  handleLogin(activeUser) {
    const activeUserRecipes = this.state.allRecipes.filter(recipe => recipe.userId === activeUser.id);
    this.setState({activeUser, activeUserRecipes});
  }

  handleLogout() {
    this.setState({
      activeUser: null,
      activeUserRecipes: null
    })
  }

  addRecipe(recipe) {
    recipe.id = this.state.allRecipes[this.state.allRecipes.length - 1].id + 1;
    recipe.userId = this.state.activeUser.id;

    const allRecipes = this.state.allRecipes.concat(recipe);
    const activeUserRecipes = this.state.activeUserRecipes.concat(recipe);

    this.setState({allRecipes, activeUserRecipes});
  }

  render() {
    const {activeUser, allUsers, activeUserRecipes} = this.state;

    return (
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage activeUser={activeUser} handleLogout={this.handleLogout}/>
          </Route>
          <Route path="/login">
            <LoginPage users={allUsers} handleLogin={this.handleLogin}/>
          </Route>          
          <Route path="/recipes">
            <RecipesPage activeUser={activeUser} recipes={activeUserRecipes} handleLogout={this.handleLogout}
              addRecipe={this.addRecipe}/>
          </Route>
        </Switch>
      </div>
    );
  }

}

export default App;
