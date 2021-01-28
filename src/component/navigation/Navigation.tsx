import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from '../pages/Home/Home';
import Shop from '../pages/Home/Shop';
import Search from '../pages/Home/Search';
import Login from '../pages/User/Login/Login';
import Register from '../pages/User/Register/Register';
import Account from '../pages/User/Account/Home/Home';
import Detail from '../pages/Detail_produit/Detail_produit';
import Panier from '../pages/Panier/Panier';
import ProductDetail from '../pages/Product/ProductDetail/ProductDetail';

import DataWrapper from '../DataWrapper'

function Navigation() {
    return (
        <Switch>
          <Route path="/produit" component={DataWrapper(Detail)} />
          <Route path="/shop" component={DataWrapper(Shop)} />
          <Route path="/panier" component={DataWrapper(Panier)} />
          <Route path="/account" component={DataWrapper(Account, true)} />
          <Route path="/login" component={DataWrapper(Login)} />
          <Route path="/register" exact component={DataWrapper(Register)} />
          <Route path="/home" exact component={DataWrapper(Home)} />
          <Route path="/search" exact component={DataWrapper(Search)} />
          <Route path="/product/detail/" exact component={DataWrapper(ProductDetail)} />
          {/* <Route path="/" render={() => <div>404</div>} /> */}
          <Route path="/" exact component={DataWrapper(Home)} />
        </Switch>
    )
}

export default Navigation;
