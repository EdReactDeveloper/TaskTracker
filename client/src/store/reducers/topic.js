import { 
  FETCH_TOPIC_TITLE 
} from '../actions/types';

const initialState = {
	text: ''
};

const topic = function(state = initialState, action) {
	const { payload, type } = action;
	switch (type) {
		case FETCH_TOPIC_TITLE:
			return { ...state, text: payload }; 
		default:
			return state;
	}
};

export default topic;
