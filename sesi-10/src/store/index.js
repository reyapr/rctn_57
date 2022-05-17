import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import counter from './counter'
import user from './user'
import auth from './auth'

const combinedReducers = combineReducers({ counter, user, auth })

const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk, logger)))

export default store;