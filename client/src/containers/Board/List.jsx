import React, { Component } from 'react';
import List from '../../components/Boards/Topics/List';
import { connect } from 'react-redux';
import { updateListItem } from '../../store/actions/board';

class ListContainer extends Component {

  componentDidMount() {

  }

  render() {
    const { data, updateListItem } = this.props
    return <List
      list={data}
      updateListItem={updateListItem}
    />
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, { updateListItem })(ListContainer);