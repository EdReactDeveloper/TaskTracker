import React, { Component } from 'react';
import Login from '../components/Auth/Login';
import { connect } from 'react-redux';
import { fetchEmail, fetchPassword, login } from '../store/actions/auth';

class LoginContainer extends Component {

  submitHandler = (e) => {
    e.preventDefault()
    this.props.login(this.props.email, this.props.password)
  }

  render() {

    return <Login
      fetchPassword={this.props.fetchPassword}
      fetchEmail={this.props.fetchEmail}
      submitHandler={this.submitHandler}
      email={this.props.email}
      password={this.props.password} />
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, { fetchPassword, fetchEmail, login })(LoginContainer);