import React, { Component } from 'react';
import { connect } from 'react-redux';
import Move from '../../../components/Modal/Froms/TopicForm/Move';
import Form from '../../../components/Modal/Froms/TopicForm/Form';
import { FORM_TYPE } from '../../../components/misc/configs';
import {addListItemAction, updateListItemAction} from '../../../store/actions/board'; 
import { modalHandler } from '../../../store/actions/modal'; 

class TopicForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
    }
  }

  componentDidMount(){
    const {modalForm: {itemId}} = this.props
    if(itemId){
      this.initializeFields(itemId)
    }
  }

  initializeFields = (id) => {
      const item = this.fetchItem(id)
      const {title, description} = item
      this.setState({title, description})
  }

  fetchItem = id => {
    const { topic } = this.props
    const index = topic.list.findIndex(item => item._id === id)
    return topic.list[index]
  }

  onChangeHandler=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const {modalForm: {formType, itemId}, topic, addListItemAction, updateListItemAction, modalHandler} = this.props
    const {title, description} = this.state
    if(title.length > 0){
    switch (formType) {
      case FORM_TYPE.add: addListItemAction(topic._id, title, description);break;
      case FORM_TYPE.edit: updateListItemAction({ itemId, topicId: topic._id, title, description }, 'edit');break;
      default: updateListItemAction({ itemId, topicId: topic._id, title, description }, 'edit');break;
    }
    modalHandler()
  }
  }

  
  renderForm = () => {
    const { modalForm: { formType } } = this.props
    if (formType === FORM_TYPE.add || formType === FORM_TYPE.edit) {
      return <Form {...this.state} onChange={this.onChangeHandler} handleSubmit={this.handleSubmit} />
    }
    if(formType === FORM_TYPE.move){
      return <Move />
    }
    return null
  }

  render() {
    return this.renderForm()
  }
};

const mapStateToProps = state => {
  return {
    modalForm: state.modal.form,
    topic: state.board.topic,
  }
}

export default connect(mapStateToProps, {addListItemAction, updateListItemAction, modalHandler})(TopicForm);