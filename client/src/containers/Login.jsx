import React, { Component } from 'react';
import Login from '../components/Auth/Login';
import { connect } from 'react-redux';
import { login } from '../store/actions/auth';

class LoginContainer extends Component {

  state={
    email: '',
    password: ''
  }

  submitHandler = (e) => {
    const { login } = this.props
    const {email, password } = this.state
    e.preventDefault()
    login(email, password)
  }

  fetchCredentials=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  render() {

    return <Login {...this.props} {...this.state}
    fetchCredentials={this.fetchCredentials}
      submitHandler={this.submitHandler} />
  }
}

const mapStateToProps = state => {
  return {
    errors: state.auth.errors
  }
}

export default connect(mapStateToProps, { login })(LoginContainer);