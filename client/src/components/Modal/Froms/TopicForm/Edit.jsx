import React, { Component } from 'react';
import { Field } from 'redux-form';
import style from '../Forms.module.scss';
import Input from '../../../misc/Elements/Input';

class Edit extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
    this.input = React.createRef()
  }

  componentDidMount(){
    console.log(this.input.current.props._reduxForm)
    this.input.current.props._reduxForm.focus()
  }

  render() {
    return (
      <>
        <label htmlFor="itemTitle" className={style.heading}>
          title
        <Field ref={this.input} type="text" component={Input} name='itemTitle' className={style.input} />
        </label>
        <label htmlFor="itemDescription" className={style.heading}>
          description
        <Field component="textarea" className={style.textarea} name="itemDescription" />
        </label>
      </>
    );
  }
};

export default Edit;