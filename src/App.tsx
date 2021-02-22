import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Navbar from './component/layout/Navbar/Navbar';
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import ApiService from './services/ApiService'
import StorageService from './services/StorageService'
import ApiContext from './context/ApiContext'
import StorageContext from './context/StorageContext'
import store from './store/configStore'

import Navigation from './component/navigation/Navigation'


import { useDispatch, useSelector } from 'react-redux';

import { LOGIN_ACTION,SHOP_ACTION } from './store/authReducers'

/**j'utilise les function component au lieu des class component l'execution est plus rapide*/
const  App = () => {

 
  return (
    <ApiContext.Provider value={new ApiService()} >
      <StorageContext.Provider value={new StorageService()} >
        <HashRouter>
          <Provider store={store} >
            <div className="App">
              <Navbar />
                <Navigation /> 
            </div>
          </Provider>
        </HashRouter>
    </StorageContext.Provider>
    </ApiContext.Provider>
  );
}

export default App;
