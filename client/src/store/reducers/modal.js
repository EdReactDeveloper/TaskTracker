import { MODAL, EDIT } from '../actions/types';

const initialState = {
	modalType: '',
	isOpen: false,
	id: null,
	edit: false,
	editMode: false
};	

const isEdit = (id)=>{
		if(id){
			return true
		}
		return false
	}

const reducer =  (state = initialState, action) => {
	const { payload = 'topicModal', type, id } = action;

	switch (type) {
		case MODAL:
			return { ...state, modalType: payload, id, isOpen: !state.isOpen, edit: isEdit(id) };
	
		case EDIT:
			return { ...state, editMode: !state.editMode };

		default:
			return state;
	}
};

export default reducer;
