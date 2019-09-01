import { FETCH_BOARDS_SUCCESS, FETCH_BOARDS_FAIL, CREATE_BOARDS_SUCCESS, CREATE_BOARDS_FALIL } from './types';
import axios from 'axios';

export const fetchBoards = () => async (dispatch) => {
	try {
		const result = await axios.get('/api/board/');
		console.log(result)
		dispatch({
			type: FETCH_BOARDS_SUCCESS,
			payload: result.data
		});
	} catch (error) {
		dispatch({
			type: FETCH_BOARDS_FAIL,
			error
		});
	}
};

