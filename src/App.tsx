import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/layout/Navbar/Navbar';
import Home from './component/pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './component/pages/User/Login/Login';
import Register from './component/pages/User/Register/Register';
import ProductDetail from './component/pages/Product/ProductDetail/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" exact >
            <Login />
          </Route>
          <Route path="/register" exact >
            <Register />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/product/detail/" exact>
            <ProductDetail />
          </Route>
          <Route path="/" render={() => <div>404</div>} >
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
