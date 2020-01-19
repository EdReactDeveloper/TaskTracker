import React from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types'; 
import Nav from '../components/Toolbar'
import { modalHandler, editHandler } from '../store/actions/modal';
import {boardTypes, boardsTypes} from './PropTypes'; 

const ToolbarContainer = ({loading, ...props}) => <>{!loading && <Nav {...props} /> }</>

ToolbarContainer.propTypes = {
  board: boardTypes,
  boards: boardsTypes, 
  editMode: bool,
  loading: bool.isRequired,
  modalHandler: func.isRequired, 
  editHandler: func.isRequired,
}

ToolbarContainer.defaultProps = {
  board: null,
  boards: [],
  editMode: false
}

const mapStateToProps = state => {
  return {
    history: state.board.history,
    board: state.board.board,
    editMode: state.modal.editMode,
    boards: state.board.boards,
    loading: state.board.loading
  }
}

export default connect(mapStateToProps, { modalHandler, editHandler })(ToolbarContainer);