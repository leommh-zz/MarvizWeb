import React, { PureComponent } from "react";
import styled from "styled-components/native";
import { iOSUIKit } from "react-native-typography";
import { colors } from "../styles";

const TextInputStyled = styled.TextInput`
    ${iOSUIKit.body};
    width: 90%;
    background-color: ${colors.backgroundLight};
    color: ${colors.secundary};
    font-size: 20px;
    border-radius: 8px;
    padding: 10px;
    margin: 5px;
  `;

class TextInput extends PureComponent {
  render() {
    return <TextInputStyled {...this.props} />;
  }
};

export default TextInput;
