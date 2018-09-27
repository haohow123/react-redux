import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counters'

export default combineReducers({
    routing: routerReducer,
    counter
})