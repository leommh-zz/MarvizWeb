import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import { colors } from "../styles";

class Loader extends Component {

  esc = (state) => state ? colors.primary : colors.secundary;

  state = {
    state: false,
    color: this.esc(false)
  }

  timer = null;

  componentDidMount() {
    this.timer = setInterval(() => this.setState({ color: this.esc(!this.state.state), state: !this.state.state }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer) 
  }

  render() {
    const { size } = this.props;
    return <ActivityIndicator size={size ? size : 'small'} color={this.state.color} />;
  }
}

export default Loader;
