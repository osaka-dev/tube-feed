import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import HeaderContainer from "./components/container/Header/HeaderContainer";
import TestContainer from "./components/container/TestContainer";

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div>
            <Switch>
              <Route path="/Test" component={TestContainer} />
              <Route path="/" component={HeaderContainer} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
