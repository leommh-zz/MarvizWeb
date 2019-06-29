import React, { Component } from "react";
import { Linking } from 'react-native';
import styled from "styled-components/native";
import Container from "../components/Container";
import Image from "../components/Image";
import Navbar from "../components/Navbar";
import Comic from "../components/Comic";
import List from "../components/List";
import Button from "../components/Button";
import Divider from "../components/Divider";
import { ScrollView } from "react-native";
import { getSeries } from "../services/api";
import { BigText, RegularText } from "../components/Text";
import { getValue } from "../services/helpers";
import { colors } from "../styles";

const Header = styled.View`
  padding: 40px;
  justify-content: center;
  align-items: center;
`;

const Info = styled.View`
  padding: 40px;
  justify-content: center;
  align-items: center;
`;

const TopMargin = styled.View`
  margin-top: 5px;
`;

class CharOrAuthorPage extends Component {

  state = {
    seriesFull: [],
  }

  getSeries = () => {
    const { item: { id }, typePage } = this.props.location.state;

    getSeries({ 
      id: id, 
      type: typePage,
      callback: (seriesFull) => this.setState({ seriesFull })
    });
  }

  componentDidMount() {
    this.getSeries();
  }

  handleSerie = (item) => {
    const { thumbnail } = item;

    let uri = '';

    if ( !!thumbnail ) {
      const { path, extension } = thumbnail;
      if ( !!path && !!extension ) {
        uri = path + '.' + extension;
      }
    }

    this.props.history.push({
      pathname: '/comicPage',
      state: { 
        comic: item, 
        thumbnail: uri
      }
    })

  }

  render() {
    const { item, thumbnail, title, typePage } = this.props.location.state;

    const { history } = this.props;

    const { description, series, urls } = item;

    const { seriesFull } = this.state;
    
    return (
      <Container>
        <Navbar 
          history={history}
          navigateInternal={true} 
        />
        <ScrollView
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={{ alignItems: "center" }}
        >
            <Header>
              <Image
                source={{ uri: thumbnail }}
                width={getValue(150)}
                height={getValue(150)}
                radius={10}
              />
            
                <BigText fontSize={getValue(40)} align="center">{title}</BigText>

                <TopMargin>
                  <RegularText fontSize={getValue(25)} color={colors.backgroundLight}>
                      {typePage == 'author' ? '(Author)' : '(Character)'}
                  </RegularText>
                </TopMargin>
                
              
            </Header>

            {
                  !!urls && urls.map( url => {
                    if (url.type == 'wiki') {
                      return (
                        <TopMargin>
                          <Button onPressIn={() => Linking.openURL(url.url)}>
                            <RegularText>Wiki</RegularText>
                          </Button>
                        </TopMargin>
                      )
                    } else {
                      return false
                    }
                  })
                } 

            {
                !!description && description.length > 0 && (
                    <Info>
                        <BigText>Description:</BigText>
                        <RegularText align="justify">
                          { description }
                        </RegularText>
                    </Info>
                )
            }

            <Divider />

            {
                !!series && !!series.items && series.items.length > 0 && (
                    <List
                      title={`${typePage == 'author' ? 'Author' : 'Character'} Comics`}
                      data={seriesFull}
                      loading={seriesFull.length > 0 ? false : true}
                      renderItem={({ item }) => <Comic item={item} history={history} />}
                      keyExtractor={(item, index) => `${item.id}`}
                      numColumns={4}
                      refreshFunc={() => this.getComics(this.initialLimit)}
                    />
                )
            }

        </ScrollView>
      </Container>
    );
  }
}


export default CharOrAuthorPage;
