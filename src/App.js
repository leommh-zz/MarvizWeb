import React, { Component } from "react";
import { StatusBar, Platform } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Routes from "./Routes";
import Reducers from "./reducers";
import { colors } from "./styles";

class App extends Component {
  render() {
    return (
      <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
        <StatusBar backgroundColor={colors.backgroundLight} barStyle="light-content" />
        <Routes />
      </Provider>
    );
  }
}

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App)
