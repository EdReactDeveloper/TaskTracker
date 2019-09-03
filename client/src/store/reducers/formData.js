import { 
	FETCH_TOPIC_TITLE,
	FETCH_BOARD_TITLE
} from '../actions/types';

const initialState = {
	topicTitle: '',
	boardTitle: ''
};

const formData = function(state = initialState, action) {
	const { payload, type } = action;
	switch (type) {
		case FETCH_TOPIC_TITLE:
			return { ...state, topicTitle: payload }; 
			case FETCH_BOARD_TITLE:
			return { ...state, boardTitle: payload }; 
		default:
			return state;
	}
};

export default formData;
