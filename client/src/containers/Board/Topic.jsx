import React, { Component } from 'react'
import { connect } from 'react-redux';
import Topic from '../../components/Boards/Topics/Topic';
import { addNewListData, addListItem, removeTopic } from '../../store/actions/topic';
import { modalHandler } from '../../store/actions/modal';

class TopicContainer extends Component {

   render() {

    const {
      data,
      removeTopic,
      modalHandler,
      modalType
    } = this.props

    return <Topic
      data={data}
      removeTopic={removeTopic}
      modalHandler={modalHandler}
      modalType={modalType}
    />
  }
}



export default connect(null, { addNewListData, addListItem, removeTopic, modalHandler })(TopicContainer);
