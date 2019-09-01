import { GET_USER_SUCCESS, GET_USER_FAIL } from './types';
import axios from 'axios';

export const getUser = () => async (dispatch) => {
	try {
		const result = await axios.get('/api/user/');
		dispatch({
			type: GET_USER_SUCCESS,
			payload: result
		});
	} catch (error) {
		dispatch({
			type: GET_USER_FAIL,
			payload: 'unauthorized'
		});
	}
};
