import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory 
} from "react-router-dom";
import './App.css';
import Dashboard from './Components/dashboard';
import Login from './Components/login';
import NavbarComp from './Components/navbarComp';

function App() {

  return (
    <>
    <NavbarComp />
      <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  </>

  );
}

export default App;
