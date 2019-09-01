import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import Header from '../components/navigation/header'; 
import {logout} from '../store/actions/auth'; 

class HeaderContainer extends Component {
 

  render() {
    const {isLoggedIn, logout} = this.props
    return <Header isLoggedIn={isLoggedIn} logout={logout}/>
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.loggedIn, 
  }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);