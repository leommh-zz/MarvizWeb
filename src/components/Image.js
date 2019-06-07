import React from "react";
import styled from "styled-components/native";
import { colors } from "../styles";

const Image = (props) => {
  const ImageStyled = styled.Image`
    height: ${props.height ? props.height : "150px"};
    width: ${props.width ? props.width : "100%"};
    ${props => props.radiusBottom && {borderBottomLeftRadius: props.radiusBottom, borderBottomRightRadius: props.radiusBottom}};
    ${props => props.radius && {borderRadius: props.radius}};
    ${props => props.padding && {padding: props.padding}};
    ${props => props.resizeMode ? {resizeMode: props.resizeMode} : {resizeMode: 'cover'}}
  `;

  return (
    <ImageStyled {...props}/> 
  );
};

export default Image;
