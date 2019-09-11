import { MODAL } from '../actions/types';

const initialState = {
	modalType: '',
	isOpen: '',
	id: null, 
	edit: false
};

const formData = function(state = initialState, action) {
	const { payload = 'topicModal', type, id } = action;
	switch (type) {
		case MODAL:
			let edit = false
			if(id){
				edit = true
			}
			return { ...state, modalType: payload, id: id, isOpen: !state.isOpen, edit };
		default:
			return state;
	}
};

export default formData;
