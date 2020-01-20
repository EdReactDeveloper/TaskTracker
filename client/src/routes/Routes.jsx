import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderFooter from '../components/HeaderFooter';
import Login from '../containers/Login';
import Register from '../containers/Register';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import Board from '../containers/Board/Board';
import Boards from '../containers/Boards';
import style from '../App.module.scss';
import Toolbar from '../containers/Toolbar';
import Alert from '../containers/Alert';
import ErrorBoundry from '../containers/ErrorBoundry';
import SearchPage from '../containers/SearchPage';
import Topic from '../containers/Board/Topic';
import Modal from '../containers/Modal';

const BoardsContainer = ({ boards }) => {
  return (
    <div className={style.board}>
      <PrivateRoute path="/" component={Toolbar} />
      <PrivateRoute path="/" component={Boards} />
      <PrivateRoute path="/search" component={SearchPage} />
      {boards && <PrivateRoute exact path="/board/:id" component={Board} />}
      {boards && <PrivateRoute exact path="/board/:id/:topicId" component={Topic} />}
    </div>
  )
}

const Routes = ({ loading, boards }) => {

  return (
    <Router>
      {!loading && (
        <HeaderFooter>
          <Alert />
          <Route path="/" component={Modal} />
          <ErrorBoundry>
            <div className={style.wrapper}>
              <Switch>
                <AuthRoute exact path="/login" component={Login} />
                <Route exact path="/register">
                  <Register />
                </Route>
                <Route render={() => <BoardsContainer boards={boards} />} />
              </Switch>
            </div>
          </ErrorBoundry>
        </HeaderFooter>
      )}
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    boards: state.board.boards
  }
}

export default connect(mapStateToProps)(Routes);