import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  //define callback function to pass down as a prop
  onSearchSubmit = async (term) => {
    //console.log(term);
    //this is where we want to call the api thru ajax with axios...
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID EdqjX_wmTnKa73-od-GfAVwCJI9zz6sBNGqFnjCUasA",
      },
    });
    //one way to do the callback
    // .then((response) => {
    //   console.log(response.data.results);
    // });

    //console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images.
      </div>
    );
  }
}

export default App;
