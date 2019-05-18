import React from "react";
import styled from "styled-components/native";
import { colors } from "../styles";

const Button = ({ children, ...rest }) => {
  const ButtonStyled = styled.TouchableOpacity`
    padding: 10px;
    background-color: ${colors.primary};
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    min-width: 30%;
    ${props => props.outline && { backgroundColor: 'rgba(0,0,0,0)', borderWidth: 1, borderColor: colors.primary }}
  `;

  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

export default Button;
