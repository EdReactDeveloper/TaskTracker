import { DROPDOWN } from '../actions/types';

const initialState = {
	isOpen: false
};

const dropdown = function(state = initialState, action) {
	const { payload, type } = action;
	switch (type) {
		case DROPDOWN:
      return { ...state, isOpen: payload };
    default: return state
	}
}

export default dropdown
