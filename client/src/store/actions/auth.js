import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	FETCH_EMAIL,
	FETCH_PASSWORD,
	FETCH_REENTERPASSWORD,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL
} from './types';
import { endSession } from './board';
import { auth } from '../../api/auth';

export const login = (email, password) => (dispatch) => {
	const payload = { email, password };

	try {
		const result = auth('login', payload);
		dispatch({ type: LOGIN_SUCCESS, payload: result });
	} catch (error) {
		dispatch({ type: LOGIN_FAIL, payload: error });
	}
};

export const register = (email, password, reenterPassword, history) => (dispatch) => {
	const payload = { email, password };
	try {
		const result = auth('register', payload);
		dispatch({ type: REGISTER_SUCCESS, payload: result });
		history.push('/login');
	} catch (error) {
		dispatch({ type: REGISTER_FAIL, payload: error });
	}
};

export const logout = () => (dispatch) => {
	try {
		auth('logout');
		dispatch({ type: LOGOUT_SUCCESS });
		dispatch(endSession());
	} catch (error) {
		console.log(error);
		dispatch({ type: LOGOUT_FAIL, paylaod: error });
	}
};
