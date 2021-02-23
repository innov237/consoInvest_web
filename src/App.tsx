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


import { useSelector,useDispatch } from 'react-redux';

import { LOGIN_ACTION,SHOP_ACTION,INIT_ACTION } from './store/authReducers'

/**j'utilise les function component au lieu des class component l'execution est plus rapide*/
const  App = () => {
  
  const dispatch = useDispatch()

  const Api = new ApiService();
  
  const auth = useSelector((state: any) => state.auth)

  const getShop = async (data:any) => {
		const user = JSON.parse(data);
    
    var response = await Api.getData("getUserShop?id_user="+user.id);
		dispatch(LOGIN_ACTION(user))
		if (response.data.length){
      dispatch(SHOP_ACTION(response.data[0]))
    }
			
  }
  
  const init = () => {

			const uuid = localStorage.getItem("authConsoInvest")
			
			if (uuid){
        getShop(uuid)
      }
			
			dispatch(INIT_ACTION())
  }
    
  React.useEffect(() => {
    init()
  }, [])
 
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
          { (auth.init) ? <Navigation /> : <></> }
      </div>
    </HashRouter>
  );
}

export default App;
