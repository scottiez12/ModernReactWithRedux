import React from "react";

//this indicates a "default" value by passing something directly to the createContext()
//can be any valid JS thing..object, array, string, whatever.
const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  state = { language: "store" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
