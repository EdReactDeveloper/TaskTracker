import React from 'react';
import style from '../Forms.module.scss';
import { Field } from 'redux-form';
import Input from '../../../misc/Elements/Input';

const Edit = () => {
  return (
    <>
      <label className={style.heading}>
        title
        <Field type="text" component={Input} name='itemTitle' className={style.input} />
      </label>
      <label className={style.heading}>
        description
        <Field component={"textarea"} className={style.textarea} name="itemDescription" />
      </label>
    </>
  );
};

export default Edit;