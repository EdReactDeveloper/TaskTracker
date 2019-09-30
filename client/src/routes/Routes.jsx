import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderFooter from '../components/HeaderFooter';
import Login from '../containers/Login';
import Register from '../containers/Register';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import { connect } from 'react-redux';
import Board from '../containers/Board/Board';
import Boards from '../containers/Boards';
import style from '../App.module.scss';
import Toolbar from '../containers/Toolbar';
import Alert from '../containers/Alert';
import ErrorBoundry from '../containers/ErrorBoundry';

const BoardsContainer = ({ boards }) => {
  return (
    <div className={style.board}>
      <PrivateRoute path="/" component={Toolbar} />
      <PrivateRoute path="/" component={Boards} />
      {boards &&
        <PrivateRoute exact path="/board/:id" component={Board} />
      }
    </div>
  )
}

const Routes = ({ loading, boards }) => {

  return (
    <Router>
      {!loading && (
        <HeaderFooter>
          <Alert />
          <ErrorBoundry>
            <div className={style.wrapper}>
              <Switch>
                <AuthRoute exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
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