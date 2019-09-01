import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/navigation';
import Home from '../components/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import PrivateRoute from './PrivateRoute'; 
import AuthRoute from './AuthRoute'; 
import {connect} from 'react-redux'; 
const Routes = ({loading}) => {
  return (
    <Router>
      {!loading && (
      <Navigation>
        <Switch>
          <Route exact path="/" component={Home}/>
          <AuthRoute exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          {/* <PrivateRoute exact path="/register" component={Profile}/> */}
        </Switch>
      </Navigation>
      )}
    </Router>
  );
};

const mapStateToProps = state =>{
  return {
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps)(Routes);