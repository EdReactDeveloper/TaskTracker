import React from 'react';
import style from '../Forms.module.scss';
import Input from '../../../misc/Elements/Input'
import { Field } from 'redux-form';

const Add = () => {
  return <Field
    type="text"
    component={Input}
    name='title'
    className={style.input}
  />
};

export default Add;