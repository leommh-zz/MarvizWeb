import React from "react";
import styled from "styled-components/native";
import { iOSUIKit } from "react-native-typography";
import { colors } from "../styles";

const TextStyled = styled.Text`
  ${props => props.type};
  ${props => props.center && { textAlign: 'center' }};
  color: ${props => props.color ? props.color : colors.white};
  ${props => props.fontSize && { fontSize: props.fontSize }};
  ${props => props.align && { textAlign: props.align }};
`;

export const SmallText = ({ children, ...rest }) => {
  return (
    <TextStyled type={iOSUIKit.subhead} {...rest}>
      {children}
    </TextStyled>
  );
};

export const RegularText = ({ children, ...rest }) => {
  return (
    <TextStyled type={iOSUIKit.body} {...rest}>
      {children}
    </TextStyled>
  );
};

export const BigText = ({ children, ...rest }) => {
  return (
    <TextStyled type={iOSUIKit.title3Emphasized} {...rest}>
      {children}
    </TextStyled>
  );
};

export const ExtraBigText = ({ children, ...rest }) => {
  return (
    <TextStyled type={iOSUIKit.largeTitleEmphasized} {...rest}>
      {children}
    </TextStyled>
  );
};
