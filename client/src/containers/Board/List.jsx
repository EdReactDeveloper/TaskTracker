import React from 'react';
import { connect } from 'react-redux';
import {bool, arrayOf, func, string} from 'prop-types';
import List from '../../components/Board/Topic/List';
import { updateListItemAction } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';

const ListContainer = (props) => <List {...props} />

const mapStateToProps = state => {
  return {
    editMode: state.modal.editMode,
    inProgress: state.inProgress.inProgress
  }
}

ListContainer.propTypes={
  editMode: bool,
  inProgress: arrayOf(string.isRequired).isRequired,
  updateListItemAction: func.isRequired
}

ListContainer.defaultProps={
  editMode: false
}

export default connect(mapStateToProps,
  {
    updateListItemAction,
    modalHandler
  })(ListContainer);