import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Container from "../components/Container";
import Image from "../components/Image";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Tag from "../components/Tag";
import List from "../components/List";
import Divider from "../components/Divider";
import { ScrollView } from "react-native";
import { BigText, RegularText } from "../components/Text";
import { getValue } from "../services/helpers";
import { getCharacters, getAuthors } from "../services/api";
import { favorite } from "../actions/UserActions";
import { colors } from "../styles";

const Header = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const Info = styled.View`
  margin-bottom: 40px;
  width: 100%;
  ${{ paddingHorizontal: 40, paddingVertical: 10 }}
`;

const Options = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Padding = styled.View`
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.View`
  margin-right: 10px;
`;

class ComicPage extends Component {
  state = {
    favorited: false,
    characters: [],
    authors: [],
    loading: false,
    indexImage: 0,
    isImageViewVisible: false
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

  getChars = () => {
    const {
      comic: { id }
    } = this.props.location.state;
    getCharacters({
      comicId: id,
      callback: characters => this.setState({ characters })
    });

    getAuthors({
      comicId: id,
      callback: authors => this.setState({ authors })
    });
  };

  componentDidMount() {
    this.favoritedFilter();
    this.getChars();
  }

  async componentDidUpdate(oldProps) {
    const { user } = this.props;
    if (user.comicsFavorite !== oldProps.user.comicsFavorite) {
      await this.setState({ loading: false });
      this.favoritedFilter();
    }
  }

  handleImage = index => {
    this.setState({
      indexImage: index,
      isImageViewVisible: true
    });
  };

  closeImageView = () => {
    this.setState({
      isImageViewVisible: false
    });
  };

  renderCharOrAuthor = (item, color, type) => {
    const { thumbnail } = item;

    let uri = "";

    if (!!thumbnail) {
      const { path, extension } = thumbnail;
      if (!!path && !!extension) {
        uri = path + "." + extension;
      }
    }

    return (
      <TouchableOpacity
        onPressIn={() => this.props.history.push({
          pathname: '/charOrAuthorPage',
          state: { 
            title: type == 'author' ? item.fullName : item.name,
            item,
            color, 
            thumbnail: uri,
            typePage: type,
          }
        })}
      >
        <Tag color={color}>
          {uri.length > 0 && (
            <Avatar>
              <Image
                source={{ uri: uri }}
                width={getValue(50)}
                height={getValue(50)}
                radius={50}
              />
            </Avatar>
          )}

          <RegularText color={color} fontSize={getValue(25)}>
            {type == "author" ? item.fullName : item.name}
          </RegularText>
        </Tag>
      </TouchableOpacity>
    );
  };

  render() {
    const { comic, thumbnail } = this.props.location.state;

    const {
      title,
      description,
      characters: { items: persons },
      creators: { items: creators },
      dates,
      images,
      series,
      prices,
      stories
    } = comic;

    const { favorited, loading, characters, authors } = this.state;
    const { history } = this.props;

    const imagesArray = images.map((img, index) => {
      const uri = img.path + "." + img.extension;
      return {
        source: {
          uri: uri
        },
        title: `Gallery - #` + index,
        width: getValue(200),
        height: getValue(300)
      };
    });

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
              onPressIn={!loading ? () => this.favorite(comic) : () => false}
            >
              {!loading ? (
                <RegularText fontSize={getValue(20)}>
                  {!favorited ? "Favorite" : "Favorited"}
                </RegularText>
              ) : (
                <Loader size={20} />
              )}
            </Button>
          </Options>

          <Divider />

          {persons && persons.length > 0 && (
            <List
              title="Characters"
              data={characters}
              loading={characters.length > 0 ? false : true}
              renderItem={({ item, index }) => {
                const color = index % 2 === 0 ? colors.primary : colors.rose;
                return this.renderCharOrAuthor(item, color, "character");
              }}
              keyExtractor={(item, index) => `${index}_characters`}
              horizontal={true}
            />
          )}

          {creators && creators.length > 0 && (
            <List
              title="Authors"
              data={authors}
              loading={authors.length > 0 ? false : true}
              renderItem={({ item, index }) => {
                const color = index % 2 === 0 ? colors.purple : colors.violet;
                return this.renderCharOrAuthor(item, color, "author");
              }}
              keyExtractor={(item, index) => `${index}_authors`}
              horizontal={true}
            />
          )}

          {!!images && images.length > 0 && (
            <>
              <List
                title="Gallery"
                data={images}
                renderItem={({ item, index }) => {
                  const uri = item.path + "." + item.extension;
                  return (
                    <TouchableOpacity
                      onPressIn={() => this.handleImage(index)}
                      style={{ marginHorizontal: 5, marginVertical: 10 }}
                    >
                      <Image
                        source={{ uri }}
                        width={getValue(250)}
                        height={getValue(250)}
                        radius={10}
                      />
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item, index) => `${index}_gallery`}
                horizontal={true}
              />

            </>
          )}

          {description && (
            <Info>
              <BigText>Description:</BigText>
              <RegularText align="justify">
                {description}
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
