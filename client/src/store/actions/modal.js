import {MODAL} from './types';


export const modalHandler = (modalType) => dispatch =>{
  console.log(modalType)
  dispatch({
    type: MODAL,
    payload: modalType
  })
}