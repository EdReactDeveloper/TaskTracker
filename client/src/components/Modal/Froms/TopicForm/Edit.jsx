import React from 'react';
import { Field } from 'redux-form';
import style from '../Forms.module.scss';
import Input from '../../../misc/Elements/Input';

const Edit = () => {
  return (
    <>
      <label htmlFor="itemTitle" className={style.heading}>
        title
        <Field type="text" component={Input} name='itemTitle' className={style.input} />
      </label>
      <label htmlFor="itemDescription" className={style.heading}>
        description
        <Field component="textarea" className={style.textarea} name="itemDescription" />
      </label>
    </>
  );
};

export default Edit;