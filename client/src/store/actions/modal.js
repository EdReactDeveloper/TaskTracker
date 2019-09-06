import {MODAL} from './types';


export const modalHandler = (modalType, id) => dispatch =>{
  console.log(modalType)
  dispatch({
    type: MODAL,
    payload: {modalType, id}
  })
}