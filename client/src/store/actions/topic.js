import {
  FETCH_TOPIC_TITLE,
  ADD_TOPIC_SUCCESS,
  ADD_TOPIC_FAIL,
  FETCH_TOPICS_SUCCESS,
  FETCH_TOPICS_FAIL,
  CHECK_LIST_SUCCESS,
  CHECK_LIST_FAIL,
  LISTITEM_FIELDS,
  ADD_LISTITEM_SUCCESS,
  ADD_LISTITEM_FAIL,
  REMOVE_LISTITEM_SUCCESS,
  REMOVE_LISTITEM_FAIL
} from './types';
import axios from 'axios';

export const getTopics = (id) => async disptch =>{
  try {
    const result = await axios.get(`/api/topics/${id}`)
    disptch({
      type: FETCH_TOPICS_SUCCESS, 
      payload: result.data
    })
  } catch (error) {
    disptch({
      type: FETCH_TOPICS_FAIL,
      payload: error
    })
  }
} 


export const addTopic = (title, id) => async (dispatch) => {
  
  const config={headers: {'Content-Type': 'application/json'}}
  const body = JSON.stringify({title, id})
  try {
    const result = await axios.post('/api/topics/create', body, config)
    dispatch({
      type: ADD_TOPIC_SUCCESS,
      payload: result.data
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: ADD_TOPIC_FAIL,
      payload: error
    })
  }
};


export const addListItem = (topicId, title, description) => async dispatch => {
  const config = {headers: {'Content-Type': 'application/json'}}
  const body = JSON.stringify({title, description})
  try {
    const result = await axios.post(`/api/topics/list/add/${topicId}`, body, config)
    dispatch({
      type: ADD_LISTITEM_SUCCESS,
      payload: result.data
    })
  } catch (error) {
    dispatch({
      type: ADD_LISTITEM_FAIL,
      payload: error
    })
  }
}

export const updateListItem = (topicId, listItemId, type) => async dispatch=>{
  const config={headers: {'Content-Type': 'application/json'}}
  const body = JSON.stringify({listItemId})
  try {
    const result = await axios.post(`/api/topics/list/${type}/${topicId}`, body, config)
    console.log(result)
    dispatch({
      type: CHECK_LIST_SUCCESS, 
      payload: result.data
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: CHECK_LIST_FAIL,
      payload: error
    })
  }
}


export const fetchTopicTitle = (text) => (dispatch) => {
  dispatch({
    type: FETCH_TOPIC_TITLE,
    payload: text
  });
};

export const addNewListData = (topicId, text, type) => dispatch=>{
  dispatch({
    type: LISTITEM_FIELDS,
    payload: ({topicId, text, type})
  });
}