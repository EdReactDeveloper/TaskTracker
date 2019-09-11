import React from 'react';
import TopicForm from '../components/Modal/Froms/TopicForm';
import BoardForm from '../components/Modal/Froms/BoardForm'
import BoardsForm from '../components/Modal/Froms/BoardsForm';
import { connect } from 'react-redux';
import {
  fetchTopicItemTitle,
  fetchTopicItmeDescription,
  fetchTopicTitle,
  fetchBoardTitle
} from '../store/actions/forms';
import { 
  addBoard, 
  addTopic,
  addListItem, 
  fetchBoardTitleEdit, 
  fetchTopicTitleEdit,
  updateBoardAction,
  updateTopicAction
 } from '../store/actions/board';
import { modalHandler } from '../store/actions/modal';

const Form = ({
  fetchTopicItemTitle,
  fetchTopicItmeDescription,
  fetchTopicTitle,
  topicTitle,
  topicItemTitle,
  topicItemDescription,
  boardTitle,
  fetchBoardTitle,
  addBoard,
  modalType,
  modalHandler,
  addTopic,
  addListItem,
  topic, 
  board,
  history, 
  edit,
  fetchBoardTitleEdit,
  fetchTopicTitleEdit,
  updateBoardAction,
  updateTopicAction
}) => {

  const submitHandler = e => {
    e.preventDefault()
    switch (modalType) {
      case 'topicModal':
        e.preventDefault()
        addListItem(topic._id, topicItemTitle, topicItemDescription);
        modalHandler(modalType);
        break;
      case 'boardModal':
        if(edit){
          updateTopicAction(topic.title, topic._id)
        }else{
          addTopic(topicTitle, board._id);          
        }
        modalHandler(modalType);
        break;
      case 'boardsModal':
        if(edit){
          updateBoardAction(board.boardTitle, board._id)
        }else{
          addBoard(boardTitle, history);
        }
        modalHandler(modalType);
        break;
      default: e.preventDefault()
    }
  }

  switch (modalType) {
    case 'topicModal':
      return <TopicForm fetchTopicItemTitle={fetchTopicItemTitle}
        fetchTopicItmeDescription={fetchTopicItmeDescription}
        topicItemTitle={topicItemTitle}
        topicItemDescription={topicItemDescription}
        submitHandler={submitHandler}
      />
    case 'boardModal':
      return <BoardForm topicTitle={topicTitle}
        fetchTopicTitle={fetchTopicTitle}
        submitHandler={submitHandler}
        fetchTopicTitleEdit={fetchTopicTitleEdit}
        edit={edit}
        topic={topic}
      />
    case 'boardsModal':
      return <BoardsForm boardTitle={boardTitle}
        fetchBoardTitle={fetchBoardTitle}
        addBoard={addBoard}
        submitHandler={submitHandler}
        edit={edit}
        board={board}
        fetchBoardTitleEdit={fetchBoardTitleEdit}
      />
    default: return 'what is this?'
  }
};

const mapStateToProps = state => {
  return {
    topicItemTitle: state.forms.topicItemTitle,
    topicItemDescription: state.forms.topicItemDescription,
    topicTitle: state.forms.topicTitle,
    boardTitle: state.forms.boardTitle,
    modalType: state.modal.modalType,
    board: state.board.board,
    topic: state.board.topic,
    edit: state.modal.edit
  }
}

export default connect(mapStateToProps,
  {
    fetchTopicItemTitle,
    fetchTopicItmeDescription,
    fetchTopicTitle,
    fetchBoardTitle,
    addBoard,
    addTopic,
    addListItem,
    modalHandler,
    fetchBoardTitleEdit, 
    fetchTopicTitleEdit,
    updateBoardAction,
    updateTopicAction
  })(Form);