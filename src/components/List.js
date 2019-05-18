import React, { Component } from "react";
import styled from "styled-components/native";
import { BigText, RegularText } from "./Text";
import { getValue } from "../services/helpers";
import { colors } from "../styles";

const colorsRefresh = [colors.primary, colors.secundary];

const ViewStyled = styled.View`
  flex: 1;
  width: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  min-height: ${getValue(70)};
`;

const FlatListStyled = styled.FlatList`
  flex: 1;
  padding-bottom: 5px;
  padding-top: 10px;
  min-width: 100%;
  min-height: 100%;
`;

class List extends Component {

  render() {
    const { title, refreshFunc, ...rest } = this.props;
    return (
      <ViewStyled>
        <FlatListStyled
          ListHeaderComponent={
            <ViewStyled>
              <BigText center fontSize={getValue(40)}>{title}</BigText>
            </ViewStyled>
          }
          ListEmptyComponent={
            <ViewStyled>
              <RegularText center fontSize={getValue(20)}>Lista Vazia :(</RegularText>
            </ViewStyled>
          }
          onEndReachedThreshold={1}
          {...rest}
        />
      </ViewStyled>
    );
  }
}

export default List;
