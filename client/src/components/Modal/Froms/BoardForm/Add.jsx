import React from 'react';
import style from '../Forms.module.scss';
import { Field } from 'redux-form';
import Input from '../../../misc/Elements/Input'

const Add = () => {
  return <Field
    type="text"
    className={style.input}
    component={Input}
    name="topicTitle"
  />
};

export default Add;