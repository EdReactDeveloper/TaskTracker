import {MODAL} from './types';


export const modalHandler = (modalType) => dispatch =>{
  dispatch({
    type: MODAL,
    payload: modalType
  })
}