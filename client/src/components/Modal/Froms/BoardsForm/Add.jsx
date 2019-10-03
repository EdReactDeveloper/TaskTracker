import React from 'react';
import { Field } from 'redux-form';
import style from '../Forms.module.scss';
import Input from '../../../misc/Elements/Input'

const Add = () => {
  return <Field
    type="text"
    component={Input}
    name='title'
    className={style.input}
  />
};

export default Add;