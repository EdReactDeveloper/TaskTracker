import React from 'react';
import { Field } from 'redux-form';
import style from './Auth.module.scss';
import Input from '../misc/Elements/Input';
import { required, maxLengthCreator, isEmail, minLengthCreator } from '../../validators'

const maxLength50 = maxLengthCreator(50)
const minLength6 = minLengthCreator(6)

const Login = ({ handleSubmit, valid }) => {
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="email" className={style.heading}>email
        <Field component={Input} validate={[maxLength50, required, isEmail]}
          type="email" name="email" className={style.input} />
      </label>
      <label htmlFor="password" className={style.heading}>password
        <Field component={Input} validate={[minLength6, required]}
          type="text" name="password" className={style.input} />
      </label>
      <button type="submit" disabled={!valid} className={`${style.submit} ${valid ? '' : style.invalid}`}>login</button>
    </form>
  );
};

export default Login;