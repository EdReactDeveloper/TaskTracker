import {
  FETCH_TOPIC_TITLE,
  FETCH_BOARD_TITLE,
  FETCH_TOPICITEM_TITLE,
  FETCH_TOPICITEM_DESCRIPTION,
  CLEAR_FIELDS
} from './types';


export const fetchTopicTitle = (text) => (dispatch) => {
  dispatch({
    type: FETCH_TOPIC_TITLE,
    payload: text
  });
};

export const fetchBoardTitle = (text) => (dispatch) => {
  dispatch({
    type: FETCH_BOARD_TITLE,
    payload: text
  });
};

export const fetchTopicItemTitle = (text) => dispatch =>{
  dispatch({
    type: FETCH_TOPICITEM_TITLE,
    payload: text
  });
}

export const fetchTopicItmeDescription = (text) => dispatch =>{
  dispatch({
    type: FETCH_TOPICITEM_DESCRIPTION,
    payload: text
  });
}

export const clearFieldsHandler = () => dispatch => {
  dispatch({
    type: CLEAR_FIELDS
  })
}

