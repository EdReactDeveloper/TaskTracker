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
	FETCH_LISTITEM_EDIT,
	END_SESSION
} from '../actions/types';

const initialState = {
	boards: null,
	loading: true,
	message: null,
	boardTile: '',
	board: null,
	topic: null
};

const board = function(state = initialState, action) {
	const { payload, type } = action;

	switch (type) {

		case ADD_LISTITEM_SUCCESS:
		case UPDATE_LIST_SUCCESS:
			{
				const boards = [...state.boards]
				const boardIndex = boards.findIndex(item => item._id === state.board._id)
				const board = boards[boardIndex]
				const topicIndex = board.topics.findIndex(item => item._id === payload._id)
				board.topics[topicIndex] = payload
				board.topics[topicIndex].active = true 
				boards[boardIndex] = board
				return {
					...state, boards,
					topic: payload
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

		case FETCH_TOPIC_SUCCESS: {
			const boards = [ ...state.boards ];
			const boardIndex = boards.findIndex((board) => board._id === state.board._id);
			const topics = boards[boardIndex].topics;
			for (let topic of topics) {
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


		case REMOVE_BOARD_SUCCESS: {
			const boards = [ ...state.boards ];
			const index = boards.findIndex((item) => item._id === payload);
			console.log(index)
			boards.splice(index, 1);
			return {
				...state,
				boards,
				board: null,
				topic: null
			};
		}

		case UPDATE_BOARD_SUCCESS: {
			const boards = [ ...state.boards ];
			const boardIndex = boards.findIndex((item) => item._id === payload._id);
			boards[boardIndex].title = payload.title;
			boards[boardIndex].active = true;
			return {
				...state,
				board: payload,
				boards
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

		case UPDATE_TOPIC_SUCCESS: {
			const boards = [ ...state.boards ];
			const boardIndex = boards.findIndex((item) => item._id === state.board._id);
			const board = boards[boardIndex];
			const topics = board.topics;
			const topicIndex = topics.findIndex((item) => item._id === payload._id);
			topics[topicIndex] = payload;
			topics[topicIndex].active = true
			board.topics = topics;
			boards[boardIndex] = board
			return {
				...state,
				boards,
				board,
				topic: payload
			};
		}


		case FETCH_LISTITEM_EDIT:{
			const boards = [...state.boards]
			const boardIndex = boards.findIndex(item => item._id === state.board._id)
			const board = {...boards[boardIndex]}
			const topicIndex = board.topics.findIndex(item => item._id === state.topic._id)
			const topic = board.topics[topicIndex]
			const itemIndex = topic.list.findIndex(item => item._id === payload.id)
			const item = topic.list[itemIndex]
			item[payload.type] = payload.text
			topic.list[itemIndex] = item
			board.topics[topicIndex] = topic
			boards[boardIndex] = board
			return {
				...state, boards, board, topic
			}
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
		case UPDATE_BOARD_FAIL:
		case UPDATE_TOPIC_FAIL:
			return {
				...state,
				loading: false,
				message: payload
			};

		case FETCH_BOARDS_SUCCESS:
			return { ...state, boards: payload.boards, loading: false };

		case CLEAR_BOARD:
			return { ...state, board: null };

		case GET_BOARD: {
			const boards = [ ...state.boards ];
			const index = state.boards.findIndex((item) => item._id === payload);
			if (index < 0) {
				return { ...state, boards, board: null, topic: null, laoding: false };
			}
			const board = boards[index];
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

		case FETCH_BOARDS_FAIL:
			return { ...state, boards: null, loading: false };

		case END_SESSION: 
		return {...state, loading: false, boards: null, board: null, topic: null, message: null}

		default:
			return state;
	}
};

export default board;
