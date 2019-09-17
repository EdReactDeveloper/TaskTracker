import React from 'react';
import style from '../Forms.module.scss'; 
import {Field} from 'redux-form'; 
import Input from '../../../misc/Elements/Input'
const Edit = ({initialValues, ...props}) => {
  console.log(initialValues)

  return <Field
  component={'input'}
  type="text"
  name='boardTitle'
  className={style.input}
/>
};

export default Edit;