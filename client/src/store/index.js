import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './reducers/auth';
import board from './reducers/board';

import modal from './reducers/modal';
import dropdown from './reducers/dropdown';
import inProgress from './reducers/inprogress';
import { reducer as formReducer } from 'redux-form';
import alerts from './reducers/alert'; 

const reducers = combineReducers({
	auth,
	alerts,
	board,
	modal,
	dropdown,
	inProgress,
	form: formReducer
});
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;
