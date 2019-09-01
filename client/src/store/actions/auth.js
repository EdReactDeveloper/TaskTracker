import { 
	LOGIN_SUCCESS, 
	LOGIN_FAIL, 
	REGISTER_SUCCESS, 
	REGISTER_FAIL, 
	FETCH_EMAIL, 
	FETCH_PASSWORD, 
	FETCH_REENTERPASSWORD,
	LOGOUT
} from './types';
import axios from 'axios';

export const fetchEmail = (data) => (dispatch) => {
	dispatch({
		type: FETCH_EMAIL,
		payload: data
	});
};


export const fetchPassword = (data) => (dispatch) => {
	dispatch({
		type: FETCH_PASSWORD,
		payload: data
	});
};

export const fetchReEterPassword = (data) => (dispatch) => {
	dispatch({
		type: FETCH_REENTERPASSWORD,
		payload: data
	});
};



export const login = (email, password) => async (dispatch) => {

	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify({ email, password });

	try {
		const result = await axios.post('/api/auth/login', body, config);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: result.data
		});
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL,
			payload: error
		});
	}
};


export const register = (email, password, reenterPassword, history) => async (dispatch) => {

	if(password !== reenterPassword){
		dispatch({
			type: REGISTER_FAIL,
			payload: 'passwords dont match'
		})
	}

	const config = {headers: {
		'Content-Type': 'application/json'
	}
	};
	const body = JSON.stringify({ email, password });

	try {
		const result = await axios.post('/api/auth/register', body, config);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: result.data
		});
		history.push('/login')

	} catch (error) {
		dispatch({
			type: REGISTER_FAIL,
			payload: error
		});
	}
};

export const logout = () => async dispatch => {
	try {
		axios.post('/api/auth/logout')
		dispatch({
			type: LOGOUT
		}) 
	} catch (error) {
		
	}
}
