import {
	FETCH_TOPIC_TITLE,
	FETCH_BOARD_TITLE,
	FETCH_TOPICITEM_TITLE,
	FETCH_TOPICITEM_DESCRIPTION,

} from '../actions/types';

const initialState = {
	topicTitle: '',
	boardTitle: '',
	topicItemTitle: '',
	topicItemDescription: '',
};

const formData = function(state = initialState, action) {
	const { payload, type } = action;
	switch (type) {
		case FETCH_TOPIC_TITLE:
			return { ...state, topicTitle: payload };
		case FETCH_BOARD_TITLE:
			return { ...state, boardTitle: payload };
		case FETCH_TOPICITEM_TITLE:
			return { ...state, topicItemTitle: payload };
		case FETCH_TOPICITEM_DESCRIPTION:
			return { ...state, topicItemDescription: payload };
		default:
			return state;
	}
};

export default formData;
