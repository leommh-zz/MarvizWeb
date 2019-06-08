import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import List from "../components/List";
import Comic from "../components/Comic";
import Container from "../components/Container";
import Column from "../components/Column";
import Image from "../components/Image";
import Navbar from "../components/Navbar";
import { BigText } from "../components/Text";
import { stringCut, getValue } from "../services/helpers";

const Header = styled.View`
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
`;

class userPage extends Component {
  render() {
    const {
      user: { name, login, image, comicsFavorite },
      history
    } = this.props;
    return (
      <Container>
        <Navbar 
          history={history}
          navigateInternal={true} 
        />
        <Column flex={1}>
          <Header>
            <BigText fontSize={getValue(30)} align="center">
              {name}
            </BigText>
          </Header>

          <Image
            source={image}
            height={getValue(80)}
            radius={10}
            resizeMode="contain"
          />

          <List
            title="Favorited Comics"
            data={comicsFavorite}
            renderItem={({ item }) => <Comic item={item} history={history} />}
            keyExtractor={(item, index) => `${item.id}`}
            numColumns={2}
          />
        
        </Column>

        
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.UserReducer.user
});

export default connect(mapStateToProps)(userPage);
