import React from 'react';
import Header from '../../containers/Header';
import Footer from './footer'; 

const Navigation = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Navigation;