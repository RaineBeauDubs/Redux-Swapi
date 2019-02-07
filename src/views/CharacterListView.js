import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { getChars } from '../actions/index';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChars();
  }

  render() {
    {this.props.fetching ? <h2>Loading characters...</h2> : null}
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
})

export default connect(
  mapStateToProps,
  {
    getChars
  }
)(CharacterListView);
