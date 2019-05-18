import React, { PureComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../styles";

const CardStyled = styled.TouchableOpacity`
  flex: 1;
  background-color: ${colors.backgroundLight};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  ${props => props.width && { maxWidth: props.width }};
  ${props => props.margin && { margin: props.margin }}
`;

class Card extends PureComponent {
  render() {
    const { children, onPress, ...rest } = this.props;

    return <CardStyled onPress={onPress ? onPress : () => false} {...rest}>{children}</CardStyled>;
  }
}

export default Card;
