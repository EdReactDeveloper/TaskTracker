import React from 'react';
import { connect } from 'react-redux';
import Alert from '../components/Alert';

const AlertContainer = (props) => <Alert {...props} />

const mapStateToProps = state => ({
  alerts: state.alerts
})

export default connect(mapStateToProps)(AlertContainer)