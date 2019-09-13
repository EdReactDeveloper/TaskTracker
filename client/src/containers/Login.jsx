import React, { Component } from 'react';
import Login from '../components/Auth/Login';
import { connect } from 'react-redux';
import { fetchEmail, fetchPassword, login } from '../store/actions/auth';

class LoginContainer extends Component {

  submitHandler = (e) => {
    const { login, email, password } = this.props
    e.preventDefault()
    login(email, password)
  }

  render() {

    return <Login {...this.props}
      submitHandler={this.submitHandler} />
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, { fetchPassword, fetchEmail, login })(LoginContainer);