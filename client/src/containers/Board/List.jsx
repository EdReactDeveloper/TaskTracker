import React, { Component } from 'react';
import List from '../../components/Board/Topics/List';
import { connect } from 'react-redux';
import { updateListItem } from '../../store/actions/board';

class ListContainer extends Component {

  render() {
    const { list, updateListItem } = this.props
    return <List
      list={list}
      updateListItem={updateListItem}
    />
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, { updateListItem })(ListContainer);