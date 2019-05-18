import React from "react";
import styled from "styled-components/native";
import { colors } from "../styles";

const Image = (props) => {
  const ImageStyled = styled.Image`
    height: ${props.height ? props.height : "150px"};
    width: ${props.width ? props.width : "100%"};
    ${props => props.radiusBottom && {borderBottomLeftRadius: props.radiusBottom, borderBottomRightRadius: props.radiusBottom}};
    ${props => props.radius && {borderRadius: props.radius}};
  `;

  return (
    <ImageStyled resizeMode={props.resizeMode ? props.resizeMode : 'cover'}  {...props}/> 
  );
};

export default Image;
