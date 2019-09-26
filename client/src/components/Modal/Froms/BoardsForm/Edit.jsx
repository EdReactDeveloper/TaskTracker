import React from 'react';
import style from '../Forms.module.scss'; 
import {Field} from 'redux-form'; 
import Input from '../../../misc/Elements/Input'
const Edit = () => {
   return <Field
  component={Input}
  type="text"
  name='boardTitle'
  className={style.input}
/>
};

export default Edit;