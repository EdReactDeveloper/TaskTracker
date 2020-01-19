import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import auth from './reducers/auth';
import board from './reducers/board';

import modal from './reducers/modal';
import dropdown from './reducers/dropdown';
import inProgress from './reducers/inprogress';
import alerts from './reducers/alert';
import search from './reducers/search';

const reducers = combineReducers({
	auth,
	alerts,
	board,
	modal,
	dropdown,
	inProgress,
	search,
	form: formReducer
});
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;
