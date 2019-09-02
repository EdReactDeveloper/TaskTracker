import {
  FETCH_TOPIC_TITLE,
  ADD_TOPIC_SUCCESS,
  ADD_TOPIC_FAIL,
  FETCH_TOPICS_SUCCESS,
  FETCH_TOPICS_FAIL
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
    console.log(error)
    disptch({
      type: FETCH_TOPICS_FAIL
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


export const addListItem = (topicId, text, description) => async dispatch => {
  
  const config = {headers: {'Context-Type': 'application/json'}}
  const body = JSON.stringify({text, description})

  try {
    const result = await axios.post(`/api/topics/list/add/${topicId}`, body, config)
    console.log(result)
  } catch (error) {
    
  }
}


export const fetchTopicTitle = (text) => async (dispatch) => {
  dispatch({
    type: FETCH_TOPIC_TITLE,
    payload: text
  });
};