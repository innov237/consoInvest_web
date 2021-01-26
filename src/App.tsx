import React from 'react';
import './App.css';
import Navbar from './component/layout/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'

import ApiService from './services/ApiService'
import StorageService from './services/StorageService'
import ApiContext from './context/ApiContext'
import StorageContext from './context/StorageContext'
import store from './store/configStore'

import Navigation from './component/navigation/Navigation'


import { useDispatch, useSelector } from 'react-redux'

import { LOGIN_ACTION,SHOP_ACTION } from './store/authReducers'


/**j'utilise les function component au lieu des class component l'execution est plus rapide*/
const  App = () => {

  const [prev, setPrev] = React.useState<any>()
  function select(state:any) {
    return state.auth.user
  }
  
  
  function handleChange() {
    let previousValue = prev
    setPrev(select(store.getState()))
    console.log('est')
    if (previousValue !== prev) {
      console.log(
        'Some deep nested property changed from',
        previousValue,
        'to',
        prev
      )
    }
  }
  const unsubscribe = store.subscribe(handleChange)

  unsubscribe()
  return (
    <ApiContext.Provider value={new ApiService()} >
      <StorageContext.Provider value={new StorageService()} >
        <Router>
          <Provider store={store} >
            <div className="App">
              <Navbar />
                <Navigation /> 
            </div>
          </Provider>
        </Router>
    </StorageContext.Provider>
    </ApiContext.Provider>
  );
}

export default App;
