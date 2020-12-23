import React from 'react';
import './App.css';
import Navbar from './component/layout/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";

import ApiService from './services/ApiService'
import StorageService from './services/StorageService'
import ApiContext from './context/ApiContext'
import StorageContext from './context/StorageContext'

import Navigation from './component/navigation/Navigation'


/**j'utilise les function component au lieu des class component l'execution est plus rapide*/
function App() {
  return (
    <ApiContext.Provider value={new ApiService()} >
      <StorageContext.Provider value={new StorageService()} >
        <Router>
          <div className="App">
            <Navbar />
            <Navigation />
          </div>
        </Router>
    </StorageContext.Provider>
    </ApiContext.Provider>
  );
}

export default App;
