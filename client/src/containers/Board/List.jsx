import React, { Component } from 'react';
import List from '../../components/Board/Topic/List';
import { connect } from 'react-redux';
import { updateListItemAction } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';
class ListContainer extends Component {

  render() {
    return <List {...this.props}  />
  }
}

const mapStateToProps = state => {
  return {
    edit: state.modal.edit,
    editMode: state.modal.editMode
  }
}

export default connect(mapStateToProps,
  {
    updateListItemAction,
    modalHandler
  })(ListContainer);