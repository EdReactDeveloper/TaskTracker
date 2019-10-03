import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Login from '../components/Auth/Login';
import { login } from '../store/actions/auth';

const LoginContainer = ({ login, form, ...props }) => {

  const submitHandler = (e) => {
    e.preventDefault()
    login(form.values)
  }

  return <Login {...props}
    handleSubmit={submitHandler}
  />
}


const mapStateToProps = state => {
  return {
    errors: state.auth.errors,
    form: state.form.login
  }
}

export default compose(
  reduxForm({ form: 'login' }),
  connect(mapStateToProps, { login })
)(LoginContainer);