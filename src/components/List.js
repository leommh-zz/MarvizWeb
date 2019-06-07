import React, { Component } from "react";
import styled from "styled-components/native";
import { BigText, RegularText } from "./Text";
import Loader from "./Loader";
import { getValue } from "../services/helpers";
import { RefreshControl } from 'react-native';
import { colors } from "../styles";

const colorsRefresh = [colors.primary, colors.secundary];

const ViewStyled = styled.View`
  flex: 0;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  margin-bottom: 20px;
`;

const FlatListStyled = styled.FlatList`

`;

const Padding = styled.View`
  padding: 40px;
  width: 100%;
`;

class List extends Component {
  state = {
    refreshing: false
  };

  renderTitle = (title) => (
    <ViewStyled>
      <BigText center fontSize={getValue(40)}>{title}</BigText>
    </ViewStyled>
  )

  render() {
    const { title, refreshFunc, loading, ...rest } = this.props;
    return (
      <Padding>
        {this.renderTitle(title)}

        {
          loading ? (
            <Loader />
          ) : (
            <FlatListStyled
              refreshControl={
                refreshFunc && (
                  <RefreshControl
                    colors={colorsRefresh}
                    refreshing={this.state.refreshing}
                    onRefresh={refreshFunc}
                  />
                )
              }
              ListEmptyComponent={
                <ViewStyled>
                  <RegularText center>Lista Vazia :(</RegularText>
                </ViewStyled>
              }
              initialNumToRender={10}
              removeClippedSubviews={true}
              onEndReachedThreshold={1}
              {...rest}
            />
          )
        }
      
      </Padding>
    );
  }
}

export default List;
