import React from 'react';
import style from './Auth.module.scss'; 

const Register = ({
  email, 
  password, 
  reenterPassword, 
  submitHandler, 
  fetchEmail, 
  fetchPassword, 
  fetchReEterPassword
}) => {
  return (
    <form onSubmit={submitHandler} className={style.form}>
      <label htmlFor="email">email
        <input type="email" name="email" value={email} onChange={(e)=> fetchEmail(e.target.value) }/>
      </label>
      <label htmlFor="password">password
        <input type="text" name="password" value={password} onChange={(e)=> fetchPassword(e.target.value) } />
      </label>
      <label htmlFor="re-enter-password">re-enter password
        <input type="text" name="re-enter-password" value={reenterPassword} onChange={(e)=> fetchReEterPassword(e.target.value) } />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};

export default Register;