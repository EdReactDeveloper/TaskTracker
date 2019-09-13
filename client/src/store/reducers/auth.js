import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	FETCH_EMAIL,
	FETCH_PASSWORD,
	GET_USER_SUCCESS,
	GET_USER_FAIL,
	FETCH_REENTERPASSWORD,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL
} from '../actions/types';

const initialState = {
	user: null,
	loading: true,
	email: '',
	password: '',
	reenterPassword: '',
	loggedIn: false,
	message: ''
};

const auth = function(state = initialState, action) {
	const { payload, type } = action;
	switch (type) {
		case FETCH_EMAIL:
			return { ...state, email: payload };
		case FETCH_PASSWORD:
			return { ...state, password: payload };
		case FETCH_REENTERPASSWORD:
			return { ...state, reenterPassword: payload };
		case LOGIN_SUCCESS:
		case GET_USER_SUCCESS:
			return { ...state, loading: false, user: payload, loggedIn: true };
		case REGISTER_SUCCESS:
			return { ...state, loading: false };
		case REGISTER_FAIL:
		case GET_USER_FAIL:
		case LOGIN_FAIL:
		case LOGOUT_FAIL:
		case LOGOUT_SUCCESS:
			return { ...state, loading: false, user: null, loggedIn: false, message: payload };
		default:
			return state;
	}
};

export default auth;
