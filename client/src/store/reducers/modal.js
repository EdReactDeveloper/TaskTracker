import { MODAL } from '../actions/types';

const initialState = {
	boardModal: false,
	topicModal: false,
	id: ''
};

const formData = function(state = initialState, action) {
	const { payload = 'topicModal', type } = action;
	switch (type) {
		case MODAL:
			return { ...state, [payload.modalType]: !state[payload.modalType], id: payload.id };
		default:
			return state;
	}
};

export default formData;
