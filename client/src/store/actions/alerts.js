import {SET_ALERT, REMOVE_ALERT} from './types'; 
import uuid from 'uuid'

export const setAlert =(msg, status, timeout = 2500)=> dispatch =>{
  const id = uuid.v4()
  dispatch({
    type: SET_ALERT, 
    payload: {msg, status, id}
  })
  setTimeout(()=>{
    dispatch({
      type: REMOVE_ALERT,
      payload: id
    })
  }, timeout)
} 