import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { func } from 'prop-types';
import { register } from '../store/actions/auth';
import Register from '../components/Auth/Register';
import setAlert from '../store/actions/alerts';
import { formTypes } from './PropTypes';

const RegisterContainer = ({ form, history, register, setAlert, ...props }) => {

  const submitHandler = (e) => {
    e.preventDefault()
    const { email, password } = form.values
    if (form.values.password === form.values.rePassword) {
      register({ email, password, history })
    } else {
      setAlert('passwords should match', 'danger')
    }
  }

  return <Register onSubmit={submitHandler} {...props}
  />
}

RegisterContainer.propTypes = {
  setAlert: func.isRequired,
  register: func.isRequired,
  form: formTypes
}

RegisterContainer.defaultProps = {
  form: null
}


const mapStateToProps = state => {
  return {
    errors: state.auth.errors,
    form: state.form.register
  }
}

export default compose(
  reduxForm({ form: 'register' }),
  connect(mapStateToProps, { register, setAlert })
)(RegisterContainer)