import React from 'react';
import { Scene, Actions } from "react-native-router-flux";
import { connect } from 'react-redux';

const PrivateScene = props => {
    const { login } = props;
    if (login) {
        return <Scene {...props} />
    } else {
        return Actions.login();
    }
}

const mapStateToProps = state => {
    return { login: state.LoginReducer.login };
  };
  

export default connect(mapStateToProps)(PrivateScene);