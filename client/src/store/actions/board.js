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
	UPDATE_LIST_SUCCESS,
  UPDATE_LIST_FAIL,
  LISTITEM_FIELDS,
  ADD_LISTITEM_SUCCESS,
	ADD_LISTITEM_FAIL,
	FETCH_TOPIC_SUCCESS, 
	FETCH_TOPIC_FAIL,
	BOARD_ACTIVE  
} from './types';
import axios from 'axios';

export const fetchBoards = () => async (dispatch) => {
	try {
		const result = await axios.get('/api/board/');
		const boards = [...result.data]
		for(let board of boards){
			board.active = 'no'
			const topics = await axios.get(`/api/topics/${board._id}`)
			board.topics = [...topics.data]
		}
		dispatch({
			type: FETCH_BOARDS_SUCCESS,
			payload: boards
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


	export const getTopics = (id) => async disptch =>{
		try {
			const result = await axios.get(`/api/topics/${id}`)
			disptch({
				type: FETCH_TOPICS_SUCCESS, 
				payload: result.data
			})
		} catch (error) {
			disptch({
				type: FETCH_TOPICS_FAIL,
				payload: error
			})
		}
	} 

	export const boardActive = index=> dispatch=> {
		dispatch({
			type: BOARD_ACTIVE,
			payload: index
		})
	}
	


	export const getTopic = (topicId) => async dispatch => {
		dispatch({
			type: FETCH_TOPIC_SUCCESS,
			payload: topicId
		})
	}

	
	export const addTopic = (title, id) => async (dispatch) => {
		const config={headers: {'Content-Type': 'application/json'}}
		const body = JSON.stringify({title, id})
		try {
			const result = await axios.post('/api/topics/create', body, config)
			dispatch({
				type: ADD_TOPIC_SUCCESS,
				payload: result.data
			})
		} catch (error) {
			console.log(error)
			dispatch({
				type: ADD_TOPIC_FAIL,
				payload: error
			})
		}
	};
	
	export const removeTopic = (boardId, topicId) => async dispatch => {
		try {
	 await axios.delete(`/api/topics/remove/${topicId}`)
			dispatch({
				type: REMOVE_TOPIC_SUCCESS,
				payload: ({boardId, topicId})
			})
		} catch (error) {
			console.log(error)
			dispatch({
				type: REMOVE_TOPIC_FAIL,
				payload: error
			})
		}
	}
	
	export const addListItem = (topicId, title, description) => async dispatch => {
		const config = {headers: {'Content-Type': 'application/json'}}
		const body = JSON.stringify({title, description})
		try {
			const result = await axios.post(`/api/topics/list/add/${topicId}`, body, config)
			console.log(result.data)
			dispatch({
				type: ADD_LISTITEM_SUCCESS,
				payload: result.data
			})
		} catch (error) {
			dispatch({
				type: ADD_LISTITEM_FAIL,
				payload: error
			})
		}
	}
	
	export const updateListItem = (topicId, listItemId, type) => async dispatch=>{
		const config={headers: {'Content-Type': 'application/json'}}
		const body = JSON.stringify({listItemId})
		try {
			const result = await axios.post(`/api/topics/list/${type}/${topicId}`, body, config)
			console.log(result)
			dispatch({
				type: UPDATE_LIST_SUCCESS, 
				payload: result.data
			})
		} catch (error) {
			console.log(error)
			dispatch({
				type: UPDATE_LIST_FAIL,
				payload: error
			})
		}
	}
	
	export const addNewListData = (topicId, text, type) => dispatch=>{
		dispatch({
			type: LISTITEM_FIELDS,
			payload: ({topicId, text, type})
		});
	}