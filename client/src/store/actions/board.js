import {
	FETCH_BOARDS_SUCCESS,
	FETCH_BOARDS_FAIL,
	ADD_BOARD_SUCCESS,
	ADD_BOARD_FAIL,
	GET_BOARD,
	UPDATE_BOARD_SUCCESS,
	CLEAR_BOARD,
	UPDATE_BOARD_FAIL,
	REMOVE_BOARD_SUCCESS,
	REMOVE_BOARD_FAIL,
	FETCH_TOPIC_SUCCESS,
	ADD_TOPIC_SUCCESS,
	ADD_TOPIC_FAIL,
	UPDATE_TOPIC_SUCCESS,
	UPDATE_TOPIC_FAIL,
	REMOVE_TOPIC_SUCCESS,
	REMOVE_TOPIC_FAIL,
	UPDATE_LIST_SUCCESS,
	UPDATE_LIST_FAIL,
	ADD_LISTITEM_SUCCESS,
	ADD_LISTITEM_FAIL,
	MOVE_LISTITEM_SUCCESS,
	MOVE_LISTITEM_FAIL
} from './types';
import { getBoards, postBoard, removeBoard } from '../api/board';
import { getTopics, postTopic, removeTopic, addListItem, updateListItem, moveListItem } from '../api/topics';
import inProgressAction from './inprogress';
import setAlert from './alerts';

export const fetchBoards = () => async (dispatch) => {
	try {
		const result = await getBoards();
		const boards = [ ...result ];
		for (let board of boards) {
			const topics = await getTopics(board._id);
			board.topics = [ ...topics ];
			for (let i = 0; i < board.topics.length; i++) {
				board.topics[i].list = board.topics[i].list.reverse();
			}
		}
		dispatch({
			type: FETCH_BOARDS_SUCCESS,
			payload: boards
		});
	} catch (error) {
		const errors = error.response.data;
		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
		}
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

export const clearBoard = () => (dispatch) => {
	dispatch({
		type: CLEAR_BOARD
	});
};

export const addBoard = (title, history) => async (dispatch) => {
	try {
		const result = await postBoard({ title });
		history.push(`/boards/${result._id}`);
		dispatch({
			type: ADD_BOARD_SUCCESS,
			payload: result
		});
		dispatch(getBoard(result._id));
	} catch (error) {
		const { errors } = error.response.data;
		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
		}
		dispatch({
			type: ADD_BOARD_FAIL,
			payload: error
		});
	}
};

export const eidtBoardTitleAction = (title, id) => async (dispatch) => {
	try {
		const result = await postBoard({ title, id });
		dispatch({
			type: UPDATE_BOARD_SUCCESS,
			payload: result
		});
	} catch (error) {
		const { errors } = error.response.data;
		if (errors) {
			errors.forEach((err) => dispatch(err.msg, 'danger'));
		}
		dispatch({
			type: UPDATE_BOARD_FAIL
		});
	}
};

export const removeBoardAction = (board, history) => async (dispatch) => {
	const allow = prompt('enter the board name');
	if (allow === board.title) {
		try {
			const id = await removeBoard(board._id);
			dispatch({ type: REMOVE_BOARD_SUCCESS, payload: id });
			history.push('/');
			dispatch(setAlert('board has been removed', 'success'));
		} catch (error) {
			const { errors } = error.response.data;
			if (errors) {
				errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
			}
			dispatch({ type: REMOVE_BOARD_FAIL, paylaod: error });
		}
	} else {
		alert('wrong name');
	}
};

// TOPICS

export const getTopic = (payload) => async (dispatch) => {
	dispatch({ type: FETCH_TOPIC_SUCCESS, payload });
};

export const addTopicAction = (title, id, history) => async (dispatch) => {
	// the id is the board's id
	try {
		const result = await postTopic({ title, id });
		history.push(`/board/${id}/${result._id}`);
		dispatch({ type: ADD_TOPIC_SUCCESS, payload: result });
	} catch (error) {
		const { errors } = error.response.data;
		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
		}
		dispatch({ type: ADD_TOPIC_FAIL, payload: error });
	}
};

export const updateTopicAction = (title, id) => async (dispatch) => {
	// the id is the topic's id
	try {
		const result = await postTopic({ title, id });
		dispatch({
			type: UPDATE_TOPIC_SUCCESS,
			payload: result
		});
	} catch (error) {
		const { errors } = error.response.data;
		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
		}
		dispatch({
			type: UPDATE_TOPIC_FAIL
		});
	}
};

// remove topic
export const removeTopicAction = (topic) => async (dispatch) => {
	const allow = prompt('enter the board name');
	if (allow.toLocaleLowerCase() === topic.title.toLocaleLowerCase()) {
		try {
			await removeTopic(topic._id);
			dispatch({
				type: REMOVE_TOPIC_SUCCESS,
				payload: topic._id
			});
			dispatch(setAlert('topic has been removed', 'success'));
		} catch (error) {
			const { errors } = error.response.data;
			if (errors) {
				errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
			}
			dispatch({
				type: REMOVE_TOPIC_FAIL,
				payload: error
			});
		}
	}
};

// TOPIC'S LIST ITEMS

export const addListItemAction = (topicId, title, description) => async (dispatch) => {
	try {
		dispatch(inProgressAction(true, 'addListItem'));
		const result = await addListItem({ title, description }, topicId);
		dispatch({ type: ADD_LISTITEM_SUCCESS, payload: result });
		dispatch(inProgressAction(false, 'addListItem'));
	} catch (error) {
		dispatch({
			type: ADD_LISTITEM_FAIL,
			payload: error
		});
	}
};

export const updateListItemAction = (payload, type) => async (dispatch) => {
	// type ( check, edit, remove )
	// payload ( itemId, title )
	try {
		dispatch(inProgressAction(true, payload.itemId));
		const result = await updateListItem(payload, type);
		dispatch(inProgressAction(false, payload.itemId));
		dispatch({ type: UPDATE_LIST_SUCCESS, payload: result });
	} catch (error) {
		const { errors } = error.response.data;
		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
		}
		dispatch({ type: UPDATE_LIST_FAIL, payload: error });
	}
};

export const moveListItemAction = (payload, type) => async (dispatch) => {
	// type ( check, edit, remove )
	const { item } = payload;
	dispatch(inProgressAction(true, item._id));
	try {
		const result = await moveListItem(payload, type);
		dispatch(inProgressAction(false, item._id));
		dispatch({ type: MOVE_LISTITEM_SUCCESS, payload: result });
	} catch (error) {
		const { errors } = error.response.data;
		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
		}
		dispatch({ type: MOVE_LISTITEM_FAIL, payload: error });
	}
};
