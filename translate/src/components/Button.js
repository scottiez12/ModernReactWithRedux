import React from "react";
import languageContext from "../contexts/languageContext";

class Button extends React.Component {
  //have to call this contextType or it's not going to work... "special" name, like mapStateToProps
  static contextType = languageContext;

  render() {
    return <button className="ui button primary">{this.context}</button>;
  }
}

export default Button;
