import React from "react";
import styled from "styled-components/native";
import { colors } from "../styles";

const Panel = ({ children, ...rest }) => {
  const PanelStyled = styled.View`
    flex: 1;
    padding: 10px;
    width: 90%;
    background-color: ${colors.white};
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  `;

  return <PanelStyled {...rest}>{children}</PanelStyled>;
};

export default Panel;
