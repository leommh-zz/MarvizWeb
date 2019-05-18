import React from "react";
import styled from "styled-components/native";

const Row = ({ children, ...rest }) => {
  const RowStyled = styled.View`
    flex-direction: row;
    width: 90%;
    align-items: ${props => props.align ? props.align : 'center'};
    justify-content: ${props => props.justify ? props.justify : 'center'};
    margin: ${props => props.margin ? props.margin : '0px'};
    padding: ${props => props.padding ? props.padding : '0px'};
  `;

  return <RowStyled {...rest}>{children}</RowStyled>;
};

export default Row;
