import { combineReducers } from 'redux'
import cart from './cartReducer'
import catalog from './catalogReducer'
import user from './userReducer'

export default combineReducers({ cart, catalog, user })
