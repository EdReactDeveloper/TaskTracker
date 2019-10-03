import React from 'react';
import { Field } from 'redux-form';
import style from '../Forms.module.scss';
import Input from '../../../misc/Elements/Input'

const Add = () => {
  return <Field
    type="text"
    className={style.input}
    component={Input}
    name="title"
  />
};

export default Add;