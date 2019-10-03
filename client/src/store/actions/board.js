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
	ADD_LISTITEM_FAIL
} from './types';
import { getBoards, postBoard, removeBoard } from '../api/board';
import { getTopics, postTopic, removeTopic, addListItem, updateListItem } from '../api/topics';
import inProgressAction from './inprogress';
import setAlert from './alerts';

export const fetchBoards = () => async (dispatch) => {
	try {
		const result = await getBoards();
		const boards = [ ...result ];
		for (let board of boards) {
			const topics = await getTopics(board._id);
			board.topics = [ ...topics ];
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

export const removeBoardAction = (boardId, history) => async (dispatch) => {
	try {
		const id = await removeBoard(boardId);
		dispatch({ type: REMOVE_BOARD_SUCCESS, payload: id });
		history.push('/boards');
		dispatch(setAlert('board has removed', 'success'));
	} catch (error) {
		const { errors } = error.response.data;
		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
		}
		dispatch({ type: REMOVE_BOARD_FAIL, paylaod: error });
	}
};

// TOPICS

export const getTopic = (topicId) => async (dispatch) => {
	dispatch({ type: FETCH_TOPIC_SUCCESS, payload: topicId });
};

export const addTopicAction = (title, id) => async (dispatch) => {
	// the id is the board's id
	try {
		const result = await postTopic({ title, id });
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

export const removeTopicAction = (topicId) => async (dispatch) => {
	try {
		await removeTopic(topicId);
		dispatch({
			type: REMOVE_TOPIC_SUCCESS,
			payload: topicId
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
