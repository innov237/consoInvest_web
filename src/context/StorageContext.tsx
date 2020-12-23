import React from 'react'
import StorageService from '../services/StorageService'
const StorageContext=React.createContext(new StorageService)

export default StorageContext