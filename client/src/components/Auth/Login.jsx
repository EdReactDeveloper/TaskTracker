import React from 'react';
import style from './Auth.module.scss'; 
import { Field } from 'redux-form'; 

const Login = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="email" className={style.heading}>email
        <Field  component={"input"}
        type="email" className={style.input} name="email" />
      </label>
      <label htmlFor="password" className={style.heading}>password
        <Field component={"input"}
        type="text" name="password" className={style.input} />
      </label>
      <button type="submit" className={style.submit}>login</button>
    </form>
  );
};

export default Login;