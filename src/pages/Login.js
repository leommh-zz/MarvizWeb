import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { Alert } from 'react-native';
import Button from "../components/Button";
import Row from "../components/Row";
import Column from "../components/Column";
import Container from "../components/Container";
import Divider from "../components/Divider";
import Loader from "../components/Loader";
import TextInput from "../components/TextInput";
import {
  BigText,
  ExtraBigText
} from "../components/Text";

import { getUser } from "../actions/UserActions";

class Login extends Component {
  state = {
    email: 'beta@beta.com.br',
    password: 'beta123',
    loading: false,
  }

  componentDidMount() {
    this.props.getUser();
  }

  handleLogin = async () => {
    const { email, password } = this.state;
    if (email.length <=0 || password.length <=0) {
      return Alert.alert('Email ou senha sem preencher!');
    }

    this.setState({ loading: true });

    if (!!this.props.user) {
      this.props.getUser();
    } else {
      // Actions.home();
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user) {
      if (!!this.props.user) {
        Actions.home();
      }
    } 
  }

  render() {
    return (
      <Container>
        <Column minHeight='30%'>
          <ExtraBigText>Marviz</ExtraBigText>
        </Column>
        <Divider height="4" />

        <TextInput 
          key="emailInput" 
          placeholder="email" 
          value={this.state.email} 
          keyboardType="email-address"
          onChangeText={(email) => this.setState({ email })} 
        />

        <TextInput 
          key="senhaInput" 
          placeholder="senha" 
          value={this.state.password} 
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })} 
        />
        
        <Divider height="2" />

        <Row align="center" justify="space-between">
          <Button onPress={this.state.loading ? () => false : this.handleLogin}>
            {
              this.state.loading ? (
                <Loader />
              ) : (
                <BigText>Entrar</BigText>
              )
            }
          </Button>
          <Button onPress={this.state.loading ? () => false : Actions.register}>
            <BigText>Registre-se</BigText>
          </Button>
        </Row>
        <Divider height="2" />
      </Container>
    );
  }
};

const mapStateToProps = state => ({
  user: state.UserReducer.user
});

export default connect(mapStateToProps, { getUser })(Login);
