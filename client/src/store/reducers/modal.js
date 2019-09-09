import { MODAL } from '../actions/types';

const initialState = {
	modalType: '',
	isOpen: ''
};

const formData = function(state = initialState, action) {
	const { payload = 'topicModal', type } = action;
	switch (type) {
		case MODAL:
			return { ...state, modalType: payload, isOpen: !state.isOpen };
		default:
			return state;
	}
};

export default formData;
