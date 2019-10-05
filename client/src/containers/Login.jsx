import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { func } from 'prop-types'
import Login from '../components/Auth/Login';
import { login } from '../store/actions/auth';
import {formTypes } from './PropTypes'; 

const LoginContainer = ({ login, form, ...props }) => {
  const submitHandler = (e) => {
    e.preventDefault()
    login(form.values)
  }

  return <Login {...props}
    handleSubmit={submitHandler}
  />
}

LoginContainer.propTypes = {
  login: func.isRequired,
  form: formTypes
}

LoginContainer.defaultProps = {
  form: null
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