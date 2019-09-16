import React from 'react';
import style from './Auth.module.scss';
import {Field} from 'redux-form'; 

const Register = ({
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="email" className={style.heading}>email
        <Field
        component='input'
          type="email"
          name="email"
          className={style.input}
          />
      </label>
      <label htmlFor="password" className={style.heading}>password
        <Field
        component='input'
          type="text"
          name="password"
          className={style.input}
          />
      </label>
      <label htmlFor="rePassword" className={style.heading}>re-enter password
        <Field
        component='input'
          type="text"
          name="rePassword"
          className={style.input}
          />
      </label>
      <button type="submit" className={style.submit}>submit</button>
    </form>
  );
};

export default Register;