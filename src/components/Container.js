import React, { PureComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../styles";

const ContainerStyled = styled.View`
    flex: 1;
    background-color: ${colors.background};
    justify-content: center;
    align-items: center;
  `;

class Container extends PureComponent {
  render() {
    return <ContainerStyled {...this.props}>{this.props.children}</ContainerStyled>;
  }
};

export default Container;
