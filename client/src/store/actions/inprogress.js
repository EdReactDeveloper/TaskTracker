import { IN_PROGRESS } from './types';

export const inProgressAction = (isFetching, id) => (dispatch) => {
  console.log(isFetching, id)
	dispatch({
		type: IN_PROGRESS,
		payload: { isFetching, id }
	});
};
