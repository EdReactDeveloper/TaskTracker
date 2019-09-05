import {
	FETCH_BOARDS_SUCCESS,
	FETCH_BOARDS_FAIL,
	GET_BOARD,
	REMOVE_BOARD_SUCCESS,
	REMOVE_BOARD_FAIL,
	ADD_BOARD_SUCCESS,
	ADD_BOARD_FAIL,
	FETCH_BOARD_TITLE,
	CLEAR_BOARD
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

export const clearBoard = () => dispatch=> {
  dispatch({
    type: CLEAR_BOARD
  })
}

	export const addBoard = (boardTitle) => async dispatch=>{
		const config = {headers: {'Content-Type': 'application/json'}}
		const body = JSON.stringify({boardTitle})
		try {
			const result = await axios.post('/api/board/add', body, config)
			dispatch({
				type: ADD_BOARD_SUCCESS,
				payload: result.data
			})
		} catch (error) {
			dispatch({
				type: ADD_BOARD_FAIL,
				payload: error
			})
		}
	}	

	export const removeBoard = (boardId, history) => async dispatch => {
		try {
			const result = await axios.delete(`/api/board/remove/${boardId}`)	
			dispatch({
				type: REMOVE_BOARD_SUCCESS,
				paylaod: result.data
			})
			history.push('/boards')
		} catch (error) {
			console.log(error)
			dispatch({
				type: REMOVE_BOARD_FAIL,
				paylaod: error
			})
		}
	}

