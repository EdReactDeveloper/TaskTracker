import { MODAL } from '../actions/types';

const initialState = {
	boardModal: false,
	topicModal: false
};

const formData = function(state = initialState, action) {
	const { payload = 'topicModal', type } = action;
	switch (type) {
		case MODAL:
			return { ...state, [payload]: !state[payload] };
		default:
			return state;
	}
};

export default formData;
