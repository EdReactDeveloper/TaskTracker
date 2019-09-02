import {
	FETCH_BOARDS_SUCCESS,
	FETCH_BOARDS_FAIL,
	CREATE_BOARDS_SUCCESS,
	CREATE_BOARDS_FALIL,
	FETCH_LIST_SUCCESS,
	FETCH_LIST_FAIL,
	GET_BOARD,
	ADD_TOPIC_SUCCESS,
	ADD_TOPIC_FAIL,
	FETCH_TOPICS_SUCCESS,
	FETCH_TOPICS_FAIL,
	CHECK_LIST_SUCCESS,
	CHECK_LIST_FAIL,
	LISTITEM_FIELDS,
	ADD_LISTITEM_SUCCESS,
	ADD_LISTITEM_FAIL,
	REMOVE_LISTITEM_SUCCESS,
	REMOVE_LISTITEM_FAIL
} from '../actions/types';

const initialState = {
	boards: null,
	loading: true,
	error: null,
	boardTile: '',
	board: null
};

const board = function(state = initialState, action) {
	const { payload, type } = action;

	switch (type) {
		case LISTITEM_FIELDS: {
			const topics = [ ...state.board.topics ];
			const index = topics.findIndex((item) => item._id === payload.topicId);
			topics[index][payload.type] = payload.text;
			return {
				...state,
				board: {
					...state.board,
					topics
				}
			};
		}

		case ADD_LISTITEM_SUCCESS: {
			const topics = [ ...state.board.topics ];
			const index = topics.findIndex((item) => item._id === payload._id);
			topics[index] = payload;
			return {
				...state,
				board: {
					...state.board,
					topics
				}
			};
		}

		case FETCH_TOPICS_SUCCESS:
			return {
				...state,
				board: {
					...state.board,
					topics: [ ...state.board.topics, ...payload ] // this payload is itterable since it is an array of topics
				}
			};

		case ADD_TOPIC_SUCCESS:
			return {
				...state,
				board: {
					...state.board,
					topics: [ ...state.board.topics, { ...payload } ] // this is a single topic, not itterable
				}
			};

		case CHECK_LIST_SUCCESS:
		case REMOVE_LISTITEM_SUCCESS: {
			const topics = [ ...state.board.topics ];
			const index = topics.findIndex((item) => item._id === payload._id);
			topics[index] = payload;
			return {
				...state,
				board: {
					...state.board,
					topics: topics
				}
			};
		}

		case FETCH_TOPICS_FAIL:
		case ADD_TOPIC_FAIL:
		case ADD_LISTITEM_FAIL:
		case CHECK_LIST_FAIL:
			return {
				...state,
				loading: false,
				error: payload
			};

		case FETCH_BOARDS_SUCCESS:
			return { ...state, boards: payload, loading: false };

		case GET_BOARD:
			return { ...state, board: state.boards.find((item) => item._id === payload) };

		case FETCH_BOARDS_FAIL:
			return { ...state, boards: null, loading: false };

		default:
			return state;
	}
};

export default board;
