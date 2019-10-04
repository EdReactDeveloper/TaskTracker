import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

ListContainer.propTypes={
  edit: PropTypes.bool.isRequired, 
  editMode: PropTypes.bool.isRequired,
  inProgress: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default connect(mapStateToProps,
  {
    updateListItemAction,
    modalHandler
  })(ListContainer);