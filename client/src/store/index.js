import {createStore, combineReducers, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './reducers/auth'; 
import board from './reducers/board';

const reducers = combineReducers({
auth, board
})
const middleware = [thunk]
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

window.store = store

export default store


