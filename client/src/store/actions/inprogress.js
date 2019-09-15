import { IN_PROGRESS } from './types';

export const inProgressAction = (isFetching, id) => (dispatch) => {
	dispatch({
		type: IN_PROGRESS,
		payload: { isFetching, id }
	});
};
