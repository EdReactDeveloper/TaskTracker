import {MODAL} from './types';


export const modalHandler = (modalType, id) => dispatch =>{
  dispatch({
    type: MODAL,
    payload: modalType,
    id
  })
}

