import React from 'react';
import Authorized from './Authorized';
import UnAuthorized from './UnAuthorized'; 

const Auth = ({isLoggedIn, logout}) => {

  const authorized = <Authorized logout={logout}/>
  const unauthorized = <UnAuthorized />

  return (
    <>
      {isLoggedIn ? authorized : unauthorized}
    </>
  );
};

export default Auth;