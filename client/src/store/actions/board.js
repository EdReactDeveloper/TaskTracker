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
  ADD_LISTITEM_FAIL  
} from './types';
import axios from 'axios';

export const fetchBoards = () => async (dispatch) => {
	try {
		const result = await axios.get('/api/board/');
		const boards = result.data
		for(let board of boards){
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
	
	export const removeTopic = (id) => async dispatch => {
		try {
			await axios.delete(`/api/topics/remove/${id}`)
			dispatch({
				type: REMOVE_TOPIC_SUCCESS,
				payload: id
			})
		} catch (error) {
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