import React from 'react';
import style from './Auth.module.scss';
import {Field} from 'redux-form'; 
import Input from '../misc/Elements/Input'; 
import {required, maxLengthCreator, minLengthCreator, isEmail} from '../../validators'; 

const maxLength30 = maxLengthCreator(30)
const minLength6 = minLengthCreator(6)

const Register = ({
  onSubmit, ...props
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
      <button type="submit" disabled={!props.valid} className={`${style.submit} ${props.valid ? '' : style.invalid}`}>submit</button>
    </form>
  );
};

export default Register;