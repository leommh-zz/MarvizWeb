import React from "react";
import styled from "styled-components/native";

const Column = ({ children, ...rest }) => {
  const ColumnStyled = styled.View`
    flex: ${props => props.flex ? props.flex : 0};
    flex-direction: column;
    width: 100%;
    align-items: ${props => props.align ? props.align : 'center'};
    margin: ${props => props.margin ? props.margin : '5px'};
    padding: ${props => props.padding ? props.padding : '10px'};
    min-height: ${props => props.minHeight ? props.minHeight : '0px'};
    ${props => props.justify && { ...props.justify }};
    ${props => props.style && { ...props.style }};
  `;

  return <ColumnStyled {...rest}>{children}</ColumnStyled>;
};

export default Column;
