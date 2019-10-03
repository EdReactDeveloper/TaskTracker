import React from 'react';
import { Field } from 'redux-form';
import style from '../Forms.module.scss';
import Input from '../../../misc/Elements/Input';

const Create = () => {
  return (
    <>
      <label htmlFor="title" className={style.heading}>
        title
        <Field
          type="text"
          component={Input}
          className={style.input}
          name='title'
        />
      </label>
      <label htmlFor="description" className={style.heading}>
        description
        <Field
          component='textarea'
          className={style.textarea}
          name='description'
        />
      </label>
    </>
  );
};

export default Create;