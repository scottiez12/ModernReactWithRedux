//Import the react and react dom libraries
import React from "react";
import ReactDOM from "react-dom";

//adding this will fire the hot reload if it's not working by default for whatever reason..
if (module.hot) {
  module.hot.accept();
}

// function getButtonText() {
//   return "Click on me!";
// }

//create a react component
const App = () => {
  const buttonText = "Click Me!@!@!@";

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ color: "white", backgroundColor: "blue" }}>
        {buttonText}
        {/* {getButtonText()} */}
      </button>
    </div>
  );
};

//take the react component and show it in the browser
ReactDOM.render(<App />, document.querySelector("#root"));
