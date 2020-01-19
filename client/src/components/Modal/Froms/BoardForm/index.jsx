import React, { Component } from 'react';
import {connect} from 'react-redux';
import style from '../Forms.module.scss';
import Form from './Form'; 
import {FORM_TYPE} from '../../../misc/configs'; 
import {updateTopicAction, addTopicAction} from '../../../../store/actions/board';

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
    switch (formType) {
      case FORM_TYPE.add: addTopicAction(title, parentId);break;
      case FORM_TYPE.edit: updateTopicAction(title, itemId);break;
      default: break;
    }
    modalHandler()
  }

  onChangeHandler = e => {
     this.setState({[e.target.name]: e.target.value})
  }

  render(){
    const {modalForm:{formType}} = this.props
    let form = null
    switch (formType) {
      case FORM_TYPE.add: form = <Form {...this.state} onChange={this.onChangeHandler}/>;break;
      case FORM_TYPE.edit: form = <Form {...this.state} onChange={this.onChangeHandler}/>;break;
      default: form = null;break;
      }

    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
      <label htmlFor="title" className={style.heading}>
        topic tiltle
        {form}
      </label>
      <button className={style.submit} type="submit">add topic</button>
    </form>
  );
}
};

const mapStateToProps = state => {
  return {
    modalForm: state.modal.form,
  }
}

export default connect(mapStateToProps, {updateTopicAction, addTopicAction})(BoardForm);