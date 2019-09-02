import {
	FETCH_BOARDS_SUCCESS,
	FETCH_BOARDS_FAIL,
	GET_BOARD
} from './types';
import axios from 'axios';

export const fetchBoards = () => async (dispatch) => {
	try {
		const result = await axios.get('/api/board/');
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

export const getBoard = (id) => (dispatch) => {
	dispatch({
		type: GET_BOARD,
		payload: id
	});
};


