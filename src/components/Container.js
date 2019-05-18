import React from "react";
import styled from "styled-components/native";
import { colors } from "../styles";

const Container = ({ children, ...rest }) => {
  const ContainerStyled = styled.View`
    flex: 1;
    background-color: ${colors.background};
    justify-content: center;
    align-items: center;
  `;

  return <ContainerStyled {...rest}>{children}</ContainerStyled>;
};

export default Container;
