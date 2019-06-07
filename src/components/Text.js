import React from "react";
import styled from "styled-components/native";
import { iOSUIKit } from "react-native-typography";
import { getValue } from "../services/helpers";
import { colors } from "../styles";

const TextStyled = styled.Text`
  ${props => props.type};
  ${props => props.center && { textAlign: 'center' }};
  color: ${props => props.color ? props.color : colors.white};
  ${props => props.fontSize && { fontSize: props.fontSize }};
  ${props => props.align && { textAlign: props.align }};
  ${props => props.line && { lineHeight: props.line }};
`;

export const SmallText = ({ children, ...rest }) => {
  return (
    <TextStyled type={iOSUIKit.subhead} fontSize={getValue(15)} {...rest}>
      {children}
    </TextStyled>
  );
};

export const RegularText = ({ children, ...rest }) => {
  return (
    <TextStyled type={iOSUIKit.body} fontSize={getValue(20)} {...rest}>
      {children}
    </TextStyled>
  );
};

export const BigText = ({ children, ...rest }) => {
  return (
    <TextStyled type={iOSUIKit.title3Emphasized} fontSize={getValue(30)} {...rest}>
      {children}
    </TextStyled>
  );
};

export const ExtraBigText = ({ children, ...rest }) => {
  return (
    <TextStyled type={iOSUIKit.largeTitleEmphasized} fontSize={getValue(45)} {...rest}>
      {children}
    </TextStyled>
  );
};
