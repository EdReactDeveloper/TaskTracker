import React, { Component } from 'react';
import Login from '../components/Auth/Login';
import { connect } from 'react-redux';
import { login } from '../store/actions/auth';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

class LoginContainer extends Component {

  submitHandler = (e) => {
    e.preventDefault()
    const { login, form } = this.props
    login(form.values)
  }

  render() {
    return <Login {...this.props}
      handleSubmit={this.submitHandler}
    />
  }
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