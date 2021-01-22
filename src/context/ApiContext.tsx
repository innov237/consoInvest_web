import React from 'react'
import ApiService from '../services/ApiService'

const ApiContext=React.createContext(new ApiService())

export default ApiContext