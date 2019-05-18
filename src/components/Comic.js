import React, { Component } from "react";
import styled from "styled-components/native";
import Card from "./Card";
import Image from "./Image";
import { stringCut, getValue } from "../services/helpers";
import { SmallText } from "./Text";
import { colors } from "../styles";

class Comic extends Component {

  render() {
    const {
      id,
      title,
      thumbnail: { path, extension }
    } = this.props.item;

    const ComicStyled = styled.View`
      flex: 0;
      min-height: ${getValue(200)};
      min-width: 100%;
    `;

    const HeaderStyled = styled.View`
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: ${colors.primary};
      justify-content: center;
      align-items: center;
      padding: 5px;
    `;

    const url = `${path}.${extension}`;

    return (
      <Card
        margin={25}
        onPress={() => this.props.history.push({
          pathname: '/comicPage',
          state: { comic: this.props.item, thumbnail: url }
        })}
      >
        <ComicStyled>
          <HeaderStyled>
            <SmallText fontSize={getValue(18)}>{stringCut(title, 15, "...")}</SmallText>
          </HeaderStyled>
          <Image
            width={'100%'}
            height={getValue(180)}
            source={{ uri: url }}
            radiusBottom={10}
          />
        </ComicStyled>
      </Card>
      
    );
  }
}

export default Comic;
