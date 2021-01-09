import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from '../pages/Home/Home';
import Login from '../pages/User/Login/Login';
import Register from '../pages/User/Register/Register';
import Account from '../pages/User/Account/Home/Home';
import Detail from '../pages/Detail_produit/Detail_produit';
import Panier from '../pages/Panier/Panier';
import ProductDetail from '../pages/Product/ProductDetail/ProductDetail';

function Navigation() {
    return (
        <Switch>
          <Route path="/produit" component={Detail} />
          <Route path="/panier" component={Panier} />
          <Route path="/account" component={Account} />
          <Route path="/login" component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/home" exact component={Home} />
          <Route path="/product/detail/" exact component={ProductDetail} />
          {/* <Route path="/" render={() => <div>404</div>} /> */}
          <Route path="/" exact component={Home} />
        </Switch>
    )
}

export default Navigation
