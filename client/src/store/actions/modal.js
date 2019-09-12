import {MODAL, EDIT} from './types';

export const modalHandler = (modalType, id) => dispatch =>{
  dispatch({
    type: MODAL,
    payload: modalType,
    id
  })
}

export const editHandler = () => dispatch =>{
  dispatch({
    type: EDIT
  })
}

