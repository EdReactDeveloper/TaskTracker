import {
	FETCH_BOARDS_SUCCESS,
	FETCH_BOARDS_FAIL,
	GET_BOARD,
	CLEAR_BOARD,
	REMOVE_BOARD_SUCCESS,
	REMOVE_BOARD_FAIL,
	ADD_BOARD_SUCCESS,
	ADD_BOARD_FAIL,
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
	LOGOUT_SUCCESS,
	MOVE_LISTITEM_SUCCESS
} from '../actions/types';
import { findItem, findAndRemoveItem } from './utils';

const initialState = {
	boards: null,
	loading: true,
	message: null,
	board: null,
	topic: null
};

const reducer = (state = initialState, action) => {
	const { payload, type } = action;

	switch (type) {
		// BOARDS
		case FETCH_BOARDS_SUCCESS:
			return { ...state, boards: payload, loading: false };

		// BOARD

		case GET_BOARD: {
			const boards = [ ...state.boards ];
			const board = findItem(boards, payload);
			if (!board) {
				return { ...state, boards, board: null, topic: null, laoding: false  };
			}
			return { ...state, boards, board, topic: null };
		}

		case CLEAR_BOARD: {
			return {
				...state,
				board: null,
				topic: null,
				loading: false
			};
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
			const {topicId, boardId} = payload
			const boards = [ ...state.boards ];
			const board = findItem(boards, boardId);
			const topic = findItem(board.topics, topicId);
			return { ...state, boards, board, topic };
		}

		case ADD_TOPIC_SUCCESS: {
			const boards = [ ...state.boards ];
			const board = findItem(boards, payload.boardId);
			board.topics = [ payload, ...board.topics ];
			return {
				...state,
				boards,
				topic: payload
			};
		}

		case UPDATE_TOPIC_SUCCESS: {
			const boards = [ ...state.boards ];
			const board = findItem(boards, state.board._id);
			const topic = findItem(board.topics, payload._id);
			topic.title = payload.title;
			
			return {
				...state,
				boards,
				board,
				topic: payload
			};
		}

		case MOVE_LISTITEM_SUCCESS: {
			const {topicFromUpdated, topicToUpdated} = payload
			const boards = [ ...state.boards ];

			const boardFrom = findItem(boards, topicFromUpdated.boardId);
			const topicFrom = findItem(boardFrom.topics, topicFromUpdated._id);
			topicFrom.list = topicFromUpdated.list

			const boardTo = findItem(boards, topicToUpdated.boardId);
			const topicTo = findItem(boardTo.topics, topicToUpdated._id);
			topicTo.list = topicToUpdated.list
			return {
				...state, 
				boards, 
				board: boardFrom, 
				topic: topicFrom,
			}
		}

		case REMOVE_TOPIC_SUCCESS: {
			const boards = [ ...state.boards ];
			const board = findItem(boards, state.board._id);
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
			const topic = findItem(board.topics, payload._id);
			topic.list = payload.list.reverse();
			return {
				...state,
				boards,
				topic: payload
			};
		}

		// FAIL

		case FETCH_BOARDS_FAIL:
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

		// LOGOUT
		case LOGOUT_SUCCESS:
			return { ...state, loading: false, boards: null, board: null, topic: null, message: null };

		default:
			return state;
	}
};

export default reducer;
