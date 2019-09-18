import React, { Component } from 'react';
import Alert from '../components/Alert';
import { connect } from 'react-redux';

class AlertContainer extends Component {
  render() {
    return <Alert {...this.props} />
  }
}

const mapStateToProps = state => ({
  alerts: state.alerts
})

export default connect(mapStateToProps)(AlertContainer)