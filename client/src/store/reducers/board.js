import {
	FETCH_BOARDS_SUCCESS,
	FETCH_BOARDS_FAIL,
	GET_BOARD,
	REMOVE_BOARD_SUCCESS,
	REMOVE_BOARD_FAIL,
	ADD_BOARD_SUCCESS,
	ADD_BOARD_FAIL,
	CLEAR_BOARD,
	FETCH_TOPICS_SUCCESS,
  FETCH_TOPICS_FAIL,
	ADD_TOPIC_SUCCESS,
	ADD_TOPIC_FAIL,
	REMOVE_TOPIC_SUCCESS,
	REMOVE_TOPIC_FAIL,
  LISTITEM_FIELDS,
  ADD_LISTITEM_SUCCESS,
	ADD_LISTITEM_FAIL,
	UPDATE_LIST_SUCCESS,
	UPDATE_LIST_FAIL  
} from '../actions/types';

const initialState = {
	boards: null,
	loading: true,
	error: null,
	message: '',
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

		case REMOVE_BOARD_SUCCESS: {
			const boards = [...state.boards]
			const index = boards.findIndex(item => item._id === payload)
			boards.splice(index, 1)
			return {
				...state,
				boards
			};
		}

		case REMOVE_TOPIC_SUCCESS: {
			const topics = [ ...state.board.topics ];
			const index = topics.findIndex((item) => item._id === payload);
			topics.splice(index, 1);
			return {
				...state,
				board: {
					...state.board,
					topics
				}
			};
		}

		case UPDATE_LIST_SUCCESS:
		{
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

		case ADD_BOARD_SUCCESS:
			return {
				...state,
				boards: [ ...state.boards, { ...payload } ]
			};

		case FETCH_TOPICS_FAIL:
		case ADD_TOPIC_FAIL:
		case ADD_LISTITEM_FAIL:
		case UPDATE_LIST_FAIL:
		case REMOVE_TOPIC_FAIL:
		case ADD_BOARD_FAIL:
			case REMOVE_BOARD_FAIL:
			return {
				...state,
				loading: false,
				error: payload
			};

		case FETCH_BOARDS_SUCCESS:
			return { ...state, boards: payload, loading: false };

		case CLEAR_BOARD:
			return { ...state, board: null, loading: true };
		case GET_BOARD:
			return { ...state, board: state.boards.find((item) => item._id === payload) };

		case FETCH_BOARDS_FAIL:
			return { ...state, boards: null, loading: false };

		default:
			return state;
	}
};

export default board;
