import React from "react";
import languageContext from "../contexts/languageContext";

class LanguageSelector extends React.Component {
  static contextType = languageContext;
  render() {
    return (
      <div>
        Select a langauge:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag jp"
          onClick={() => this.context.onLanguageChange("japanese")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
