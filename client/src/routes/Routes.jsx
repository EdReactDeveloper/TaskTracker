import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderFooter from '../components/HeaderFooter';
import Home from '../components/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import PrivateRoute from './PrivateRoute'; 
import AuthRoute from './AuthRoute'; 
import {connect} from 'react-redux'; 
import Board from '../containers/Board/Board'; 
import Boards from '../containers/Boards'; 
import style from '../App.module.scss';
import Toolbar from '../containers/Toolbar'; 
import Alert from '../containers/Alert'; 
import ErrorBoundry from '../containers/ErrorBoundry'; 

const Routes = ({loading}) => {
  
  return (
    <Router>
      {!loading && (
      <HeaderFooter>
        <Alert />
        <Switch>
          <Route exact path="/" component={Home}/>
          <AuthRoute exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
        <ErrorBoundry>
        <div className={`${style.container} ${style.board}`}>
          <PrivateRoute path="/boards" component={Toolbar}/>
          <PrivateRoute path="/boards" component={Boards}/>
          <PrivateRoute exact path="/boards/:id" component={Board}/>
        </div>
        </ErrorBoundry>
      </HeaderFooter>
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