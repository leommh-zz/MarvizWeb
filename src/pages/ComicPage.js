import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import Container from "../components/Container";
import Image from "../components/Image";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { ScrollView } from "react-native";
import { BigText, RegularText } from "../components/Text";
import { stringCut, getValue } from "../services/helpers";
import { favorite } from "../actions/UserActions";

const Header = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const Info = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const Options = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

class ComicPage extends Component {
  state = {
    favorited: false,
    loading: false
  };

  favoritedFilter = () => {
    this.props.user.comicsFavorite.filter(
      c => c.id === this.props.location.state.comic.id
    ).length > 0
      ? this.setState({ favorited: true })
      : this.setState({ favorited: false });
  };

  favorite = async comic => {
    await this.setState({ loading: true });
    setTimeout(() => this.props.favorite({ comic }), 1000);
  };

  componentDidMount() {
    this.favoritedFilter();
  }

  async componentDidUpdate(oldProps) {
    const { user } = this.props;
    if (user.comicsFavorite !== oldProps.user.comicsFavorite) {
      await this.setState({ loading: false });
      this.favoritedFilter();
    }
  }

  render() {
    const { comic, thumbnail } = this.props.location.state;

    const {
      title,
      description,
      dates,
      images,
      series,
      prices,
      stories
    } = comic;

    const { favorited, loading } = this.state;
    const { history } = this.props;

    return (
      <Container>
        <Navbar history={history} />
        <ScrollView
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <Header>
            <BigText fontSize={getValue(30)} align="center">
              {title}
            </BigText>
          </Header>

          <Image
            source={{ uri: thumbnail }}
            width={getValue(250)}
            height={getValue(350)}
            radius={10}
          />

          <Options>
            <Button
              outline={!favorited ? true : false}
              onPress={!loading ? () => this.favorite(comic) : () => false}
            >
              {!loading ? (
                <RegularText>
                  {!favorited ? "Favoritar" : "Desfavoritar"}
                </RegularText>
              ) : (
                <Loader size={20} />
              )}
            </Button>
          </Options>

          {description && (
            <Info>
              <BigText fontSize={getValue(25)}>Description:</BigText>
              <RegularText fontSize={getValue(15)}>
                {stringCut(description, 200, "...")}
              </RegularText>
            </Info>
          )}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.UserReducer.user
});

export default connect(
  mapStateToProps,
  { favorite }
)(ComicPage);
