import React from 'react';
import style from './Auth.module.scss';
import { Field } from 'redux-form';
import Input from '../misc/Elements/Input';
import { required, maxLengthCreator, isEmail, minLengthCreator } from '../../validators'

const maxLength50 = maxLengthCreator(50)
const minLength6 = minLengthCreator(6)

const Login = ({ handleSubmit, ...props }) => {
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="email" className={style.heading}>email
        <Field component={Input} validate={[maxLength50, required, isEmail]}
          type="email" className={style.input} name="email" />
      </label>
      <label htmlFor="password" className={style.heading}>password
        <Field component={Input} validate={[minLength6, required]}
          type="text" name="password" className={style.input} />
      </label>
      <button type="submit" disabled={!props.valid} className={`${style.submit} ${props.valid ? '' : style.invalid}`}>login</button>
    </form>
  );
};

export default Login;