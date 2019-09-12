import React from 'react';
import style from './Auth.module.scss'; 

const Login = ({email, password, submitHandler, fetchEmail, fetchPassword}) => {
  return (
    <form onSubmit={submitHandler} className={style.form}>
      <label htmlFor="email" className={style.heading}>email
        <input type="email" className={style.input} name="email" value={email} onChange={(e)=> fetchEmail(e.target.value) }/>
      </label>
      <label htmlFor="password" className={style.heading}>password
        <input type="text" name="password" className={style.input} value={password} onChange={(e)=> fetchPassword(e.target.value) } />
      </label>
      <button type="submit" className={style.submit}>login</button>
    </form>
  );
};

export default Login;