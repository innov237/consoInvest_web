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
import Account from './component/pages/User/Account/Home/Home';
import Detail from './component/pages/Detail_produit/Detail_produit';
import Panier from './component/pages/Panier/Panier';
import ProductDetail from './component/pages/Product/ProductDetail/ProductDetail';

/**j'utilise les function component au lieu des class component l'execution est plus rapide*/
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/produit">
            <Detail />
          </Route>
          <Route path="/panier">
            <Panier />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/login">
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
