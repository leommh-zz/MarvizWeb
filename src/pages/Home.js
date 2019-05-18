import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../components/Container";
import Comic from "../components/Comic";
import Loader from "../components/Loader";
import Menu from "../components/Menu";
import List from "../components/List";
import { getAllComics } from "../services/api";

class Home extends Component {
  state = {
    comics: [],
    number: 100,
  };

  getComics = async () => {
    const comics = await getAllComics({ limit: 50 });
    this.setState({ comics });
  }

  async componentDidMount() {
    await this.getComics();
  }

  render() {
    const { history } = this.props;
    const { comics } = this.state;
    return (
      <Container>
        <Menu user={this.props.user} history={history}/>
        {comics.length > 0 ? (
          <List
            title="Comics"
            data={comics}
            renderItem={({ item }) => <Comic item={item} history={history} />}
            keyExtractor={(item, index) => `${item.id}`}
            numColumns={5}
            refreshFunc={() => this.getComics()}
          />
        ) : (
          <Container flex={1}>
            <Loader size={50} />
          </Container>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.UserReducer.user
});

export default connect(
  mapStateToProps,
)(Home);