import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/HeaderFooter/header';
import { logout } from '../store/actions/auth';

class HeaderContainer extends Component {

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.loggedIn,
  }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);