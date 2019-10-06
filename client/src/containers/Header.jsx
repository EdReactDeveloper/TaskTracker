import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/HeaderFooter/Header';
import { logout } from '../store/actions/auth';

const HeaderContainer = (props) => <Header {...props} />

HeaderContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.loggedIn,
  }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);