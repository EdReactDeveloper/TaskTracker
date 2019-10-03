import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/HeaderFooter/header';
import { logout } from '../store/actions/auth';

const HeaderContainer = (props) => <Header {...props} />

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.loggedIn,
  }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);