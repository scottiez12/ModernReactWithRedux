import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //callback function
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  //one way to fix the 'this' issue.. arrow functions auto-bind the functions 'this' to the 'this' representing the class
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    //console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
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
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
