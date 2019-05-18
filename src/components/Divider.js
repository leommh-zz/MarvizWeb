import React from "react";
import styled from "styled-components/native";
import { iOSUIKit } from "react-native-typography";
import { colors } from "../styles";

const Divider = (props) => {
  const DividerStyled = styled.View`
    width: ${props => props.width ? props.width : '90%'};
    height: ${props => props.height ? props.height : '2px'};
    background-color: ${colors.backgroundLight};
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  `;

  return <DividerStyled {...props} />;
};

export default Divider;
