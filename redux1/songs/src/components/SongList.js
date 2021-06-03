import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList = () => {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//convention is where we're getting the name of this function to setup the connect()
const mapStateToProps = (state) => {
  //console.log(state);
  //so taking state object (data from the store) and turn it into props, basically
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
