import {
  FETCH_TOPIC_TITLE,
  FETCH_BOARD_TITLE
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