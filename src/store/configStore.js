import { createStore, combineReducers } from 'redux'
import comandReducer from './comandReducers'

const rootReducer=combineReducers({
    comand: comandReducer
})

const store=createStore(rootReducer)

export default store