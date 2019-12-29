import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import Recipes from './Recipes';
import './App.css';
import Nav from './Nav';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/recipes" component={ Recipes } />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default App;
