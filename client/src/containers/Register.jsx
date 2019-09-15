import React, { Component } from 'react';
import Register from '../components/Auth/Register';
import { connect } from 'react-redux';
import { register } from '../store/actions/auth';

class RegisterContainer extends Component {

  state = {
    email: '',
    password: '',
    rePassword: ''
  }

  submitHandler = (e) => {
    e.preventDefault()
    const { register, history } = this.props
    const { email, password, rePassword } = this.state
    if (password === rePassword) {
      register(email, password, rePassword, history)
    } else {
      alert('passwords should match')
    }
  }

  fetchCredentialsHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {

    return <Register
      {...this.props}
      {...this.state}
      fetchCredentialsHandler={this.fetchCredentialsHandler}
      submitHandler={this.submitHandler}
    />
  }
}

const mapStateToProps = state => {
  return {
    errors: state.auth.errors
  }
}

export default connect(mapStateToProps, { register })(RegisterContainer);