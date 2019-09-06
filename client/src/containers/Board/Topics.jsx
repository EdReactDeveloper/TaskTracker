import React, { Component } from 'react';
import Topics from '../../components/Boards/Topics'
import {connect} from 'react-redux'; 
import {getTopics} from '../../store/actions/topic';
import Modal from '../../components/misc/Modal/Modal'
import AddTopicItemForm from '../../components/Boards/Topics/Topic/TopicMenu/TopicMenu'
import {fetchTopicItemTitle,
  fetchTopicItmeDescription} from '../../store/actions/formData'; 
import {modalHandler} from '../../store/actions/modal'; 
import { addListItem } from '../../store/actions/topic'
class TopicsContainer extends Component {

  componentDidMount(){
    const id = this.props.boardId
    this.props.getTopics(id)
  }

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
    const { addListItem, modalHandler, topicItemDescription, topicItemTitle, topicId } = this.props
    addListItem(topicId, topicItemTitle, topicItemDescription)
    modalHandler(this.modalType)
  }


  render() {
    const {
      topics, 
      isModalOpen, 
      topicItemDescription, 
      topicItemTitle,
       modalHandler, 
       fetchTopicItemTitle,
       fetchTopicItmeDescription
      } = this.props
    return <> 
    {topics && <Topics topics={topics} modalType={this.modalType}/> } 
    {isModalOpen && <Modal modalHandler={modalHandler} modalType={this.modalType}>
      <AddTopicItemForm
            submitHandler={this.submitHandler}
            topicItemDescription={topicItemDescription}
            topicItemTitle={topicItemTitle}
            fetchTopicItemTitle={fetchTopicItemTitle}
            fetchTopicItmeDescription={fetchTopicItmeDescription}
          />
    </Modal>}
    </>
  }
}

const mapStateToProps = state => {
  return {
    topics: state.board.board.topics,
    isModalOpen: state.modal.topicModal,
    topicItemTitle: state.formData.topicItemTitle,
    topicItemDescription: state.formData.topicItemDescription,
    topicId: state.modal.id
  }
}

export default connect(mapStateToProps, {getTopics, addListItem, modalHandler, fetchTopicItemTitle,
  fetchTopicItmeDescription})(TopicsContainer);