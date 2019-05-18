import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { BigText, SmallText } from "./Text";
import { getValue } from "../services/helpers";
import { colors } from "../styles";

const Navbar = ({ Children, history, ...rest }) => {
  const NavbarStyled = styled.View`
    width: ${props => (props.width ? props.width : "100%")};
    height: ${props => (props.height ? props.height : "80px")};
    background-color: ${colors.backgroundLight};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 50px;
    margin-bottom: 10px;
  `;

  const leftRender = (history) => {
    return (
      <TouchableOpacity onPress={() => history.goBack()}>
        <BigText fontSize={getValue(40)}>Voltar</BigText>
      </TouchableOpacity>
    );
  };

  const rightRender = message => {
    return <SmallText>{message}</SmallText>;
  };

  return <NavbarStyled {...rest}>{leftRender(history)}</NavbarStyled>;
};

export default Navbar;
