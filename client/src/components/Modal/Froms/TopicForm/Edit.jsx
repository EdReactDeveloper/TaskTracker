import React from 'react';
import style from '../Forms.module.scss';
import { Field } from 'redux-form';
import Input from '../../../misc/Elements/Input';

const Edit = ({ item }) => {
  return (
    <>
      <label className={style.heading}>
        title
        <Field type="text" component={Input} name='title' className={style.input} />
      </label>
      <label className={style.heading}>
        description
        <Field component={"textarea"} className={style.textarea} name="description" />
      </label>
    </>
  );
};

export default Edit;