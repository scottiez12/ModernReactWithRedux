import React from "react";
import languageContext from "../contexts/languageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  //have to call this contextType or it's not going to work... "special" name, like mapStateToProps
  //dont need to use contextType when using a consumer
  //static contextType = languageContext;

  renderButton(color) {
    <button className={`ui button ${color}`}>
      <languageContext.Consumer>
        {({ language }) => (language === "english" ? "Submit" : "Sanka suru")}
      </languageContext.Consumer>
    </button>;
  }

  render() {
    //const text = this.context === "english" ? "Submit" : "Sanka suru";
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
