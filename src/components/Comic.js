import React, { Component } from "react";
import styled from "styled-components/native";
import Card from "./Card";
import Image from "./Image";
import { stringCut, getValue } from "../services/helpers";
import { SmallText } from "./Text";
import { colors } from "../styles";

const ComicStyled = styled.View`
  flex: 1;
  min-height: ${getValue(300)};
  min-width: 100%;
  justify-content: center;
  align-items: center;

`;

const HeaderStyled = styled.View`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  min-width: 100%;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  padding: 5px;
`;  

const ImagePanel = styled.View`
  border-radius: 50px;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;  

class Comic extends Component {

  render() {
    const {
      id,
      title,
      thumbnail
    } = this.props.item;

    let uri = '';

    if ( !!thumbnail ) {
      const { path, extension } = thumbnail;
      if ( !!path && !!extension ) {
        uri = path + '.' + extension;
      }
    }

    return (
      <Card 
        onPressIn={() => this.props.history.push({
          pathname: '/comicPage',
          state: { comic: this.props.item, thumbnail: uri }
        })}
      >
        <ComicStyled>
          <HeaderStyled>
            <SmallText fontSize={getValue(18)}>{stringCut(title, 25, "...")}</SmallText>
          </HeaderStyled>

          <ImagePanel>
            <Image
              source={{ uri }}
              height={getValue(225)}
              width={getValue(185)}
              radius={10}
              resizeMode="contain"
              padding={15}
            />
          </ImagePanel>
          
        </ComicStyled>
      </Card>
    );
  }
}

export default Comic;