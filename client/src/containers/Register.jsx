import React, { Component } from 'react';
import Register from '../components/Auth/Register';
import { connect } from 'react-redux';
import { register } from '../store/actions/auth';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';

class RegisterContainer extends Component {

  submitHandler = (e) => {
    e.preventDefault()
    const { form, history, register } = this.props
    const { email, password } = form.values
    if (form.values.password === form.values.rePassword) {
      register({ email, password, history })
    } else {
      alert('passwords should match')
    }
  }

  render() {

    return <Register handleSubmit={this.submitHandler} {...this.props}
    />
  }
}

const mapStateToProps = state => {
  return {
    errors: state.auth.errors,
    form: state.form.register
  }
}

export default compose(
  reduxForm({ form: 'register' }),
  connect(mapStateToProps, { register })
)(RegisterContainer)