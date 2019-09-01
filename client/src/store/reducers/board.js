import { FETCH_BOARDS_SUCCESS, FETCH_BOARDS_FAIL, CREATE_BOARDS_SUCCESS, CREATE_BOARDS_FALIL } from '../actions/types';

const initialState = {
	boards: null,
	loading: true,
	error: null
};

const board = function(state = initialState, action) {
	const { payload, type } = action;
	switch (type) {
		case FETCH_BOARDS_SUCCESS:
			return { ...state, boards: payload, loading: false };
		case FETCH_BOARDS_FAIL:
			return { ...state, boards: null, loading: false };
		default:
			return state;
	}
};

export default board;
