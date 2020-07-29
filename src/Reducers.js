import { combineReducers } from 'redux'
import userReducer from './Reducers/useReducer'

export default combineReducers({
    user : userReducer
})