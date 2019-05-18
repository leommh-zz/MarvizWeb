import React from "react";
import Button from "../components/Button";
import Row from "../components/Row";
import Column from "../components/Column";
import Container from "../components/Container";
import Divider from "../components/Divider";
import TextInput from "../components/TextInput";
import {
  BigText,
  ExtraBigText
} from "../components/Text";

const Login = props => {
  return (
    <Container>
      <Column minHeight='30%'>
        <ExtraBigText fontSize={120}>Marviz</ExtraBigText>
      </Column>
      <Divider height="4" />
      <TextInput placeholder="Login" />
      <TextInput placeholder="Senha" />
      <Divider height="2" />
      <Row align="center" justify="space-between">
        <Button onPress={() => props.history.push('/home')}>
          <BigText>Entrar</BigText>
        </Button>
        <Button onPress={() => props.history.push('/register')}>
          <BigText>Registre-se</BigText>
        </Button>
      </Row>
      <Divider height="2" />
    </Container>
  );
};

export default Login;
