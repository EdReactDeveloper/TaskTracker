import React, { Component } from 'react';
import Register from '../components/Auth/Register'; 
import {connect} from 'react-redux'; 
import { fetchEmail, fetchPassword, fetchReEterPassword, register } from '../store/actions/auth'; 

class RegisterContainer extends Component {


  submitHandler = (e) => {
    const {email, password, reenterPassword, register, history} = this.props

    e.preventDefault()
    register(email, password, reenterPassword, history)
  }

  render() {

    const { fetchEmail, fetchPassword, fetchReEterPassword, email, password, reenterPassword } = this.props

    return <Register 
    fetchEmail={fetchEmail}
    fetchPassword={fetchPassword}
    fetchReEterPassword={fetchReEterPassword}
    email={email}
    password={password} 
    reenterPassword={reenterPassword}
    submitHandler={this.submitHandler}
    />
  }
}

const mapStateToProps = state => {
  return {
    reenterPassword: state.auth.reenterPassword,
    email: state.auth.email,
    password: state.auth.password,
    errors: state.auth.errors
  }
}

export default connect(mapStateToProps, { fetchEmail, fetchPassword, fetchReEterPassword, register })(RegisterContainer);