import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './reducers/auth';
import board from './reducers/board';
import forms from './reducers/forms';
import modal from './reducers/modal';
import dropdown from './reducers/dropdown';
import inProgress from './reducers/inprogress';
import {reducer as formReducer } from 'redux-form'; 

const reducers = combineReducers({
	auth,
	board,
	forms,
	modal,
	dropdown,
	inProgress,
	form: formReducer
});
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;
