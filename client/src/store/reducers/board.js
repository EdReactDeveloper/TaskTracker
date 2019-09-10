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
	UPDATE_LIST_FAIL,
	FETCH_TOPIC_SUCCESS,
	BOARD_ACTIVE
} from '../actions/types';
import { stat } from 'fs';

const initialState = {
	boards: null,
	loading: true,
	error: null,
	message: '',
	history: null,
	boardTile: '',
	board: null,
	topic: null
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

		case ADD_LISTITEM_SUCCESS: 	
		case UPDATE_LIST_SUCCESS: 	
			return {
				...state, topic: payload
				}

		case BOARD_ACTIVE:{
			const boards = [...state.boards]
			for(let i = 0; i < boards.length; i+=1){
				if(i === payload){
					boards[i].active = true
				}else{
					boards[i].active = false
				}
			}
			return {
				...state, boards
			}
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
			const boards = [...state.boards]
			const boardIndex = boards.findIndex(board => board._id === state.board._id)
			const topics = boards[boardIndex].topics
			for(let topic of topics) {
				if(topic._id === payload){
					topic.active = true
				}else{
					topic.active = false
				}
			}
			const topic = topics.find(topic => topic._id === payload)
		
			return { ...state, boards, topic };
		}

		case ADD_TOPIC_SUCCESS:
			const boards = [...state.boards]
			const index = boards.findIndex(item=> item._id === payload.boardId)
			const board = boards[index]
			board.topics = [payload, ...board.topics]
			for(let topic of board.topics){
				if(topic._id === payload._id){
					topic.active = true
				}else{
					topic.active = false
				}
			}
			boards[index] = board
			return {
				...state, boards, topic: payload			
			};

		case REMOVE_BOARD_SUCCESS: {
			const boards = [ ...state.boards ];
			const index = boards.findIndex((item) => item._id === payload);
			boards.splice(index, 1);
			return {
				...state,
				boards, board: null, topic:null
			};
		}

		case REMOVE_TOPIC_SUCCESS: {
			const boards = [...state.boards]
			const boardIndex = boards.findIndex(item => item._id === state.board._id)
			const board = boards[boardIndex]
			const topics = [ ...state.board.topics ];
			const topicIndex = topics.findIndex((item) => item._id === payload);
			topics.splice(topicIndex, 1);
			board.topics = topics
			boards[boardIndex] = board
			return {
				...state,	boards, board, topic: null
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
			return { ...state, boards: payload.boards, history: payload.history, loading: false };

		case CLEAR_BOARD:
			return { ...state, board: null };
		case GET_BOARD:{
			const boards = [...state.boards]
			const index = state.boards.findIndex((item) => item._id === payload)
			const board = boards[index]
			boards[index].active = 'yes'
			return { ...state, boards, board, topic: null };

		}

		case FETCH_BOARDS_FAIL:
			return { ...state, boards: null, loading: false };

		default:
			return state;
	}
};

export default board;
