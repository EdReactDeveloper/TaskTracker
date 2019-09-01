import React from 'react';
import style from './Auth.module.scss'; 

const Login = ({email, password, submitHandler, fetchEmail, fetchPassword}) => {
  console.log(email, password)
  return (
    <form onSubmit={submitHandler} className={style.form}>
      <label htmlFor="email">email
        <input type="email" name="email" value={email} onChange={(e)=> fetchEmail(e.target.value) }/>
      </label>
      <label htmlFor="password">password
        <input type="text" name="password" value={password} onChange={(e)=> fetchPassword(e.target.value) } />
      </label>
      <button type="submit">login</button>
    </form>
  );
};

export default Login;