import React, { Component } from 'react';
import List from '../../components/Board/Topics/List';
import { connect } from 'react-redux';
import { updateListItem } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';
class ListContainer extends Component {

  render() {
    const {
      list,
      updateListItem,
      modalHandler
    } = this.props
    return <List
      list={list}
      updateListItem={updateListItem}
      modalHandler={modalHandler}
    />
  }
}

const mapStateToProps = state => {
  return {
    edit: state.modal.edit
  }
}

export default connect(mapStateToProps,
  {
    updateListItem,
    modalHandler
  })(ListContainer);