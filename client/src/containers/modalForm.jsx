import React from 'react';
import TopicForm from '../components/misc/Modal/Froms/TopicForm';
import BoardForm from '../components/misc/Modal/Froms/BoardForm'
import BoardsForm from '../components/misc/Modal/Froms/BoardsForm';
import { connect } from 'react-redux';
import {
  fetchTopicItemTitle,
  fetchTopicItmeDescription,
  fetchTopicTitle,
  fetchBoardTitle
} from '../store/actions/forms';
import { addBoard, addTopic, addListItem } from '../store/actions/board';
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
  topic, board
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
        addTopic(topicTitle, board._id);
        modalHandler(modalType);
        break;
      case 'boardsModal':
        addBoard(boardTitle);
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
      />
    case 'boardsModal':
      return <BoardsForm boardTitle={boardTitle}
        fetchBoardTitle={fetchBoardTitle}
        addBoard={addBoard}
        submitHandler={submitHandler}
      />
    default: return <BoardsForm boardTitle={boardTitle}
      fetchBoardTitle={fetchBoardTitle}
      addBoard={addBoard}
      submitHandler={submitHandler}
    />
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
    topic: state.board.topic
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
    modalHandler
  })(Form);