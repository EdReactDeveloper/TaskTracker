import React from 'react'
import { connect } from 'react-redux';
import Topic from '../../components/Board/Topic';
import { modalHandler } from '../../store/actions/modal';
import {boardTypes} from '../PropTypes'; 

const TopicContainer =(props)=> <Topic {...props} />
  
const mapStateToProps = state => {
  return {
    topic: state.board.topic,
    editMode: state.modal.editMode,
    board: state.board.board
  }
}

TopicContainer.protoTypes={
  board: boardTypes
}

export default connect(mapStateToProps, { modalHandler })(TopicContainer);
