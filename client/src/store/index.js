import {createStore, combineReducers, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './reducers/auth'; 
import board from './reducers/board';
import forms from './reducers/forms'; 
import modal from './reducers/modal'; 

const reducers = combineReducers({
auth, board, forms, modal
})
const middleware = [thunk]
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

window.store = store

export default store


