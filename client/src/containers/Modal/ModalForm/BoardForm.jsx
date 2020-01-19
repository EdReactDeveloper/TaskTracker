import React, { Component } from 'react';
import {connect} from 'react-redux';
import Form from '../../../components/Modal/Froms/BoardForm/Form'; 
import {FORM_TYPE} from '../../../components/misc/configs'; 
import {updateTopicAction, addTopicAction} from '../../../store/actions/board';

class BoardForm extends Component {
  constructor(props){
    super(props)
    this.state={
      title: ''
    }
  }

  componentDidMount(){
    const {topic, modalForm:{itemId}} = this.props
    if(itemId){
      this.setState({title: topic.title})
    }
  }

  handleSubmit=e=>{
    e.preventDefault()
    const {modalForm: {formType, parentId, itemId}, updateTopicAction, addTopicAction, modalHandler} = this.props
    const {title} = this.state
    if(title.length > 0){
      switch (formType) {
        case FORM_TYPE.add: addTopicAction(title, parentId);break;
        case FORM_TYPE.edit: updateTopicAction(title, itemId);break;
        default: break;
      }
      modalHandler()
    }
  }

  renderForm = () => {
    const { modalForm: { formType } } = this.props
    if (formType === FORM_TYPE.add || formType === FORM_TYPE.edit) {
      return <Form {...this.state} onChange={this.onChangeHandler} handleSubmit={this.handleSubmit}/>
    }
    return null
  }

  onChangeHandler = e => {
     this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return this.renderForm()
}
};

const mapStateToProps = state => {
  return {
    modalForm: state.modal.form,
  }
}

export default connect(mapStateToProps, {updateTopicAction, addTopicAction})(BoardForm);