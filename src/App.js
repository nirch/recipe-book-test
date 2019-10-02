import React from 'react';
import {Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage'

function App() {

  return (

    <Switch>
      <Route exact path="/" component={HomePage}/>
      {/* <Route path="/login" component={LoginPage}/>
      <Route path="/recipes" component={RecipesPage}/> */}
    </Switch>
  );

}

export default App;
