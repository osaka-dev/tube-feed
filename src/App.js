import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import firebase from 'firebase/app';
import HeaderContainer from './components/container/Header/HeaderContainer';
import TestContainer from './components/container/TestContainer';
import LoginDialog from './components/presentational/LoginDialog';
import DashboardContainer from './components/container/DashboardContainer';
import {bindActionCreators} from 'redux';
import {successLogin} from './actions/auth';

class App extends Component {
  componentWillMount() {
    if (firebase.auth().currentUser !== null) {
      this.props.successLogin();
    }
  }

  render() {
    return (
      <Router>
        <div className="root">
          <HeaderContainer />
          <Switch>
            <Route path="/Test" component={TestContainer} />
            <Route
              exact
              path="/"
              render={() => <LoginDialog open={!this.props.isLogin} />}
            />
            <Route path="/home" component={DashboardContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      successLogin
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
