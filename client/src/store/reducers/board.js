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
	ADD_LISTITEM_SUCCESS,
	ADD_LISTITEM_FAIL,
	UPDATE_LIST_SUCCESS,
	UPDATE_LIST_FAIL,
	FETCH_TOPIC_SUCCESS,
	UPDATE_BOARD_SUCCESS,
	UPDATE_BOARD_FAIL,
	UPDATE_TOPIC_SUCCESS,
	UPDATE_TOPIC_FAIL,
	LOGOUT_SUCCESS
} from '../actions/types';
import { findItem, setActive, findAndRemoveItem } from './utils';

const initialState = {
	boards: null,
	loading: true,
	message: null,
	board: null,
	topic: null
};

const board = function(state = initialState, action) {
	const { payload, type } = action;

	switch (type) {
		// BOARDS
		case FETCH_BOARDS_SUCCESS:
			return { ...state, boards: payload.boards, loading: false };

		// BOARD

		case GET_BOARD: {
			let boards = [ ...state.boards ];
			let board = findItem(boards, payload);
			if (!board) {
				return { ...state, boards, board: null, topic: null, laoding: false };
			}
			boards = setActive(boards, payload);
			board.topics = setActive(board.topics, null);
			return { ...state, boards, board, topic: null };
		}

		case ADD_BOARD_SUCCESS:
			return { ...state, boards: [ ...state.boards, { ...payload } ] };

		case UPDATE_BOARD_SUCCESS: {
			const boards = [ ...state.boards ];
			const board = findItem(boards, payload._id);
			board.title = payload.title;
			return { ...state, board, boards };
		}

		case REMOVE_BOARD_SUCCESS: {
			let boards = [ ...state.boards ];
			boards = findAndRemoveItem(boards, payload);
			return { ...state, boards, board: null, topic: null };
		}

		case CLEAR_BOARD:
			return { ...state, board: null };

		// TOPICS

		case FETCH_TOPICS_SUCCESS:
			return {
				...state,
				board: {
					...state.board,
					topics: [ ...state.board.topics, ...payload ] // this payload is itterable since it is an array of topics
				}
			};

		// TOPIC

		case FETCH_TOPIC_SUCCESS: {
			const boards = [ ...state.boards ];
			const board = findItem(boards, state.board._id);
			board.topics = setActive(board.topics, payload);
			const topic = findItem(board.topics, payload);
			return { ...state, boards, topic };
		}

		case ADD_TOPIC_SUCCESS: {
			const boards = [ ...state.boards ];
			let board = findItem(boards, payload.boardId);
			board.topics = [ payload, ...board.topics ];
			board.topics = setActive(board.topics, payload._id);
			return {
				...state,
				boards,
				topic: payload
			};
		}

		case UPDATE_TOPIC_SUCCESS: {
			const boards = [ ...state.boards ];
			let board = findItem(boards, state.board._id);
			let topic = findItem(board.topics, payload._id);
			topic.title = payload.title;
			return {
				...state,
				boards,
				board,
				topic: payload
			};
		}

		case REMOVE_TOPIC_SUCCESS: {
			const boards = [ ...state.boards ];
			let board = findItem(boards, state.board._id);
			board.topics = findAndRemoveItem(board.topics, payload);
			return {
				...state,
				boards,
				board,
				topic: null
			};
		}

		// TOPIC ITEMS

		case ADD_LISTITEM_SUCCESS:
		case UPDATE_LIST_SUCCESS: {
			const boards = [ ...state.boards ];
			const board = findItem(boards, state.board._id);
			let topic = findItem(board.topics, payload._id);
			topic = payload;
			board.topics = setActive(board.topics, topic._id);
			return {
				...state,
				boards,
				topic: payload
			};
		}

		// FAIL

		case FETCH_BOARDS_FAIL:
			return { ...state, boards: null, loading: false };

		case FETCH_TOPICS_FAIL:
		case ADD_TOPIC_FAIL:
		case ADD_LISTITEM_FAIL:
		case UPDATE_LIST_FAIL:
		case REMOVE_TOPIC_FAIL:
		case ADD_BOARD_FAIL:
		case REMOVE_BOARD_FAIL:
		case UPDATE_BOARD_FAIL:
		case UPDATE_TOPIC_FAIL:
			return {
				...state,
				loading: false,
				message: payload
			};

		//LOGOUT
		case LOGOUT_SUCCESS:
			return { ...state, loading: false, boards: null, board: null, topic: null, message: null };

		default:
			return state;
	}
};

export default board;
