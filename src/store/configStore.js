import { createStore, combineReducers } from 'redux'
import comandReducer from './comandReducers'
import searchReducer from './searchReducers'

const rootReducer=combineReducers({
    comand: comandReducer,
    search: searchReducer
})

const store=createStore(rootReducer)

export default store