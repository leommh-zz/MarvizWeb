import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Alert } from 'react-native';
import Button from "../components/Button";
import Row from "../components/Row";
import Container from "../components/Container";
import Column from "../components/Column";
import Divider from "../components/Divider";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import {
  BigText,
  ExtraBigText
} from "../components/Text";

class Register extends Component {
  state = {
    username: 'morini',
    email: "morini.dev@gmail.com",
    password: "102030",
    password2: "102030",
  };

  handleRegister = () => {
    const { username, email, password, password2 } = this.state;
    if (username.length > 0 && email.length > 0 && password.length > 0 && password == password2) {
      this.setState({ loading: true })

    } else {
      Alert.alert("Precisa definir o nome de usuário, email e a senha para cadastrar");
    }
  };

  render() {
    return (
      <Container>
        <Navbar />
        <Column flex={1}>
          <ExtraBigText>Registre-se</ExtraBigText>
          <Divider height="4" />
          <TextInput
            placeholder="Username"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
          <TextInput
            placeholder="Email"
            value={this.state.email}
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            placeholder="Senha"
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
           <TextInput
            placeholder="Insira novamente a senha"
            value={this.state.password2}
            secureTextEntry={true}
            onChangeText={password2 => this.setState({ password2 })}
          />
          <Divider height="2" />
          <Row align="center" justify="center">
            <Button onPress={this.state.loading ? () => false : () => this.handleRegister()}>
              {
                this.state.loading ? (
                  <Loader />
                ) : (
                  <BigText>Concluir</BigText>
                )
              }
            </Button>
          </Row>
          <Divider height="2" />
        </Column>
      </Container>
    );
  }
}

export default Register;
