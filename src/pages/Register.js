import React, { Component } from "react";
import Button from "../components/Button";
import Row from "../components/Row";
import Container from "../components/Container";
import Column from "../components/Column";
import Divider from "../components/Divider";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import {
  BigText,
  ExtraBigText
} from "../components/Text";

class Register extends Component {
  state = {
    login: "",
    password: ""
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleRegister = () => {
    const { login, password } = this.state;
    // return onSignUp({ login, password, favorites: { comics: [], heros: [] } });
  };

  render() {
    return (
      <Container>
        <Navbar />
        <Column flex={1}>
          <ExtraBigText>Registre-se</ExtraBigText>
          <Divider height="4" />
          <TextInput
            placeholder="Login"
            onChangeText={text => this.handleChange("login", text)}
          />
          <TextInput
            placeholder="Senha"
            onChangeText={text => this.handleChange("password", text)}
          />
          <Divider height="2" />
          <Row align="center" justify="center">
            <Button onPress={() => this.handleRegister}>
              <BigText>Concluir</BigText>
            </Button>
          </Row>
          <Divider height="2" />
        </Column>
      </Container>
    );
  }
}

export default Register;
