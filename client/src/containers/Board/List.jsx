import React from 'react';
import { connect } from 'react-redux';
import List from '../../components/Board/Topic/List';
import { updateListItemAction } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';

const ListContainer = (props) => <List {...props} />

const mapStateToProps = state => {
  return {
    edit: state.modal.edit,
    editMode: state.modal.editMode,
    inProgress: state.inProgress.inProgress
  }
}

export default connect(mapStateToProps,
  {
    updateListItemAction,
    modalHandler
  })(ListContainer);