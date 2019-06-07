import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../components/Container";
import Comic from "../components/Comic";
import Loader from "../components/Loader";
import Menu from "../components/Menu";
import List from "../components/List";
import { getComics } from "../actions/MarvelActions";

class Home extends Component {

  initialLimit = 10;
  limit = 20;
  skip = 0;

  getComics = (newLimit) => {
    this.props.getComics(newLimit);

    if (newLimit !== this.initialLimit) {
      this.skip += this.limit;
      this.limit = newLimit;
    }
  }

  componentDidMount() {
    if (!!this.props.comics && this.props.comics.length <= 0) {
      this.getComics(this.limit);
    }
  }

  render() {
    const { history } = this.props;
    const { comics } = this.props;
    return (
      <Container>
        <Menu user={this.props.user} history={history}/>
        {comics.length > 0 ? (
          <List
            title="Comics"
            data={comics}
            renderItem={({ item }) => <Comic item={item} history={history} />}
            keyExtractor={(item, index) => `${item.id}`}
            numColumns={4}
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
  user: state.UserReducer.user,
  comics: state.MarvelReducer.comics
});

export default connect(
  mapStateToProps, { getComics }
)(Home);