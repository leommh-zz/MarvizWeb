import React from "react";
import styled from "styled-components/native";
import { iOSUIKit } from "react-native-typography";
import { colors } from "../styles";

const TextInput = (props) => {
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

  return <TextInputStyled {...props} />;
};

export default TextInput;
