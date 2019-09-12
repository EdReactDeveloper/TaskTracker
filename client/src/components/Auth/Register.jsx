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
      <label htmlFor="email" className={style.heading}>email
        <input type="email" name="email" className={style.input} value={email} onChange={(e)=> fetchEmail(e.target.value) }/>
      </label>
      <label htmlFor="password" className={style.heading}>password
        <input type="text" name="password" className={style.input} value={password} onChange={(e)=> fetchPassword(e.target.value) } />
      </label>
      <label htmlFor="re-enter-password" className={style.heading}>re-enter password
        <input type="text" name="re-enter-password" className={style.input} value={reenterPassword} onChange={(e)=> fetchReEterPassword(e.target.value) } />
      </label>
      <button type="submit" className={style.submit}>submit</button>
    </form>
  );
};

export default Register;