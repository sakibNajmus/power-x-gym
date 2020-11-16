import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Pricing from './components/Pricing/Pricing';
import Membership from './components/Membership/Membership';
import Classes from './components/Classes/Classes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/pricing">
          <Pricing/>
        </Route>        
        <Route path="/classes">
          <Classes/>
        </Route>
        <Route path="/membership">
          <Membership/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
