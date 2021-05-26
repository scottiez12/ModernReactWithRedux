import React from "react";

class SearchBar extends React.Component {
  //callback function
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* if you put () on a callback function like onChange, it will run every time render runs.. so we don't want to do that */}
            {/* <input type="text" onChange={this.onInputChange}></input> */}
            {/* alternate syntax for callback below... */}
            {/* <input
              type="text"
              onChange={(e) => console.log(e.target.value)}
            ></input> */}

            {/* this below refactoring is making this a controlled element... */}
            <input
              type="text"
              calue={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
