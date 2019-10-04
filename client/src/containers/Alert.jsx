import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../components/Alert';

const AlertContainer = (props) => <Alert {...props} />

AlertContainer.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
}

const mapStateToProps = state => ({
  alerts: state.alerts
})

export default connect(mapStateToProps)(AlertContainer)