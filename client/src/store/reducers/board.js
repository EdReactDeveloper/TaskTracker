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
			// 1. get the board data
			const boards = [ ...state.boards ];
			const index = state.boards.findIndex((item) => item._id === payload);
			if (index < 0) {
				return { ...state, boards, board: null, topic: null, laoding: false };
			}
			const board = boards[index];
			// 2. add active: true to the board in the list of board, and false to the rest
			board.active = true;
			boards[index] = board;
			for (let board of boards) {
				if (board._id === payload) {
					board.active = true;
				} else {
					board.active = false;
				}
			}
			return { ...state, boards, board, topic: null };
		}

		case ADD_BOARD_SUCCESS:
			return { ...state, boards: [ ...state.boards, { ...payload } ] };

		case UPDATE_BOARD_SUCCESS: {
			const boards = [ ...state.boards ];
			const boardIndex = boards.findIndex((item) => item._id === payload._id);
			boards[boardIndex].title = payload.title;
			// make the board active on the boards list
			boards[boardIndex].active = true;
			return { ...state, board: payload, boards };
		}

		case REMOVE_BOARD_SUCCESS: {
			const boards = [ ...state.boards ];
			const index = boards.findIndex((item) => item._id === payload);
			boards.splice(index, 1);
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
			const boardIndex = boards.findIndex((board) => board._id === state.board._id);
			const topics = boards[boardIndex].topics;
			for (let topic of topics) {
				// make the topic active on the ui topics list
				if (topic._id === payload) {
					topic.active = true;
				} else {
					topic.active = false;
				}
			}
			const topic = topics.find((topic) => topic._id === payload);

			return { ...state, boards, topic };
		}

		case ADD_TOPIC_SUCCESS:
			const boards = [ ...state.boards ];
			const index = boards.findIndex((item) => item._id === payload.boardId);
			const board = boards[index];
			board.topics = [ payload, ...board.topics ];
			for (let topic of board.topics) {
				if (topic._id === payload._id) {
					topic.active = true;
				} else {
					topic.active = false;
				}
			}
			boards[index] = board;
			return {
				...state,
				boards,
				topic: payload
			};

		case UPDATE_TOPIC_SUCCESS: {
			const boards = [ ...state.boards ];
			const boardIndex = boards.findIndex((item) => item._id === state.board._id);
			const board = boards[boardIndex];
			const topics = board.topics;
			const topicIndex = topics.findIndex((item) => item._id === payload._id);
			topics[topicIndex] = payload;
			topics[topicIndex].active = true;
			board.topics = topics;
			boards[boardIndex] = board;
			return {
				...state,
				boards,
				board,
				topic: payload
			};
		}

		case REMOVE_TOPIC_SUCCESS: {
			const boards = [ ...state.boards ];
			const boardIndex = boards.findIndex((item) => item._id === state.board._id);
			const board = boards[boardIndex];
			const topics = [ ...state.board.topics ];
			const topicIndex = topics.findIndex((item) => item._id === payload);
			topics.splice(topicIndex, 1);
			board.topics = topics;
			boards[boardIndex] = board;
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
			const boardIndex = boards.findIndex((item) => item._id === state.board._id);
			const board = boards[boardIndex];
			const topicIndex = board.topics.findIndex((item) => item._id === payload._id);
			board.topics[topicIndex] = payload;
			board.topics[topicIndex].active = true;
			boards[boardIndex] = board;
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
