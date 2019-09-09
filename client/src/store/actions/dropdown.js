import {DROPDOWN} from './types'; 

export const dropdownHandler = (isOpen) => dispatch => {
  dispatch({
    type: DROPDOWN,
    payload: isOpen
  })
}