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
import Classes from './components/Classes/Classes';
import Product from './components/Product/Product';
import Footer from './components/Home/Footer/Footer';
import ClassDetails from './components/ClassDetails/ClassDetails';

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

        <Route path="/classes">
          <Classes></Classes>
        </Route>
        <Route path="/product">
            <Product></Product>
          </Route>
          <Route path='/classDetails/:Id'>
            <ClassDetails></ClassDetails>
          </Route>
          <Route>
            <Footer></Footer>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
