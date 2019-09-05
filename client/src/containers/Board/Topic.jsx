import React, { Component } from 'react'
import { connect } from 'react-redux';
import Topic from '../../components/Boards/Topics/Topic';
import { addNewListData, addListItem, removeTopic } from '../../store/actions/topic';
import { modalHandler } from '../../store/actions/modal';

class TopicContainer extends Component {

  constructor(props){
    super(props)
    this.modalType = 'topicModal'
    this.fieldType = {
      newListTitle: 'newListTitle',
      newListDescription: 'newListDescription'
    }
  }  

  submitHandler = (e) => {
    e.preventDefault()
    const { data, addListItem, modalHandler } = this.props
    addListItem(data._id, data[this.fieldType.newListTitle], data[this.fieldType.newListDescription])
    modalHandler(this.modalType)
  }

  render() {

    const {
      data,
      addNewListData,
      removeTopic,
      modalHandler,
      modal
    } = this.props

    return <Topic
      data={data}
      submitHandler={this.submitHandler}
      addNewListData={addNewListData}
      fieldType={this.fieldType}
      removeTopic={removeTopic}
      modalHandler={modalHandler}
      modal={modal}
      modalType={this.modalType}
    />
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal.topicModal
  }
}



export default connect(mapStateToProps, { addNewListData, addListItem, removeTopic, modalHandler })(TopicContainer);
