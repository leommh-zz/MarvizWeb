import React from "react";
import styled from "styled-components/native";

const Tag = ({ children, ...rest }) => {
  const TagStyled = styled.View`
    flex-direction: row;
    align-items: ${props => props.align ? props.align : 'center'};
    justify-content: ${props => props.justify ? props.justify : 'center'};
    margin: ${props => props.margin ? props.margin : '10px'};
    border-radius: 10px;
    border-color: ${props => props.color ? props.color : '#333'}; 
    ${{ borderWidth: 1, paddingVertical: 5, paddingHorizontal: 40 }};
  `;

  return <TagStyled {...rest}>{children}</TagStyled>;
};

export default Tag;
