import { createStore, combineReducers } from 'redux'
import comandReducer from './comandReducers'
import searchReducer from './searchReducers'
import authReducer from './authReducers'

const rootReducer=combineReducers({
    comand: comandReducer,
    search: searchReducer,
    auth: authReducer
})

const store=createStore(rootReducer)

export default store