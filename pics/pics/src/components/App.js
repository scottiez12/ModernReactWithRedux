import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  //define callback function to pass down as a prop
  onSearchSubmit = async (term) => {
    //console.log(term);
    //this is where we want to call the api thru ajax with axios...
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
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
        {/* Found: {this.state.images.length} images. */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
