import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from '../Forms.module.scss'
import Edit from './Edit';
import Move from './Move';
import Add from './Add';
import { FORM_TYPE } from '../../../misc/configs';
import {addListItemAction, updateListItemAction} from '../../../../store/actions/board'; 
import { modalHandler } from '../../../../store/actions/modal'; 

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
    switch (formType) {
      case FORM_TYPE.add: addListItemAction(topic._id, title, description);break;
      case FORM_TYPE.edit: updateListItemAction({ itemId, topicId: topic._id, title, description }, 'edit');break;
      default: updateListItemAction({ itemId, topicId: topic._id, title, description }, 'edit');break;
    }
    modalHandler()
  }

  render() {

    const { modalForm: {formType}} = this.props
    let form = null
    switch (formType) {
      case FORM_TYPE.add: form = <Add onChange={this.onChangeHandler} {...this.state} />; break;
      case FORM_TYPE.edit: form = <Edit onChange={this.onChangeHandler} {...this.state} />; break;
      case FORM_TYPE.move: form = <Move />; break;
      default: form = <Add />; break;
    }
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        {form}
        <button
          type="submit"
          className={style.submit}
        >submit</button>
      </form>
    );
  }
};

const mapStateToProps = state => {
  return {
    modalForm: state.modal.form,
    topic: state.board.topic,
  }
}

export default connect(mapStateToProps, {addListItemAction, updateListItemAction, modalHandler})(TopicForm);