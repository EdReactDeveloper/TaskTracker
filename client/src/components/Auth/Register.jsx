import React from 'react';
import style from './Auth.module.scss';

const Register = ({
  email,
  password,
  rePassword,
  submitHandler,
  fetchCredentialsHandler
}) => {
  return (
    <form onSubmit={submitHandler} className={style.form}>
      <label htmlFor="email" className={style.heading}>email
        <input
          type="email"
          name="email"
          className={style.input}
          value={email}
          onChange={(e) => fetchCredentialsHandler(e)} />
      </label>
      <label htmlFor="password" className={style.heading}>password
        <input
          type="text"
          name="password"
          className={style.input}
          value={password}
          onChange={(e) => fetchCredentialsHandler(e)} />
      </label>
      <label htmlFor="rePassword" className={style.heading}>re-enter password
        <input
          type="text"
          name="rePassword"
          className={style.input}
          value={rePassword}
          onChange={(e) => fetchCredentialsHandler(e)} />
      </label>
      <button type="submit" className={style.submit}>submit</button>
    </form>
  );
};

export default Register;