import React from 'react';
import { Field } from 'redux-form';
import { isEmail, maxLengthCreator, minLengthCreator, required } from '../../validators';
import Input from '../misc/Elements/Input';
import style from './Auth.module.scss';

const maxLength30 = maxLengthCreator(30)
const minLength6 = minLengthCreator(6)

const Register = ({
  onSubmit, valid
}) => {
  return (
    <form onSubmit={onSubmit} className={style.form}>
      <label htmlFor="email" className={style.heading}>email
        <Field
          component={Input}
          type="email"
          name="email"
          className={style.input}
          validate={[required, maxLength30, minLength6, isEmail]}
        />
      </label>
      <label htmlFor="password" className={style.heading}>password
        <Field
          component={Input}
          type="text"
          name="password"
          className={style.input}
          validate={[required, maxLength30, minLength6]}
        />
      </label>
      <label htmlFor="rePassword" className={style.heading}>re-enter password
        <Field
          component={Input}
          type="text"
          name="rePassword"
          className={style.input}
          validate={[required, maxLength30, minLength6]}
        />
      </label>
      <button type="submit" disabled={!valid} className={`${style.submit} ${valid ? '' : style.invalid}`}>submit</button>
    </form>
  );
};

export default Register;