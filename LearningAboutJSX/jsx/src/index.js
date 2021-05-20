//Import the react and react dom libraries
import React from "react";
import ReactDOM from "react-dom";

//create a react component
const App = () => {
  return (
    <div>
      <label className="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ color: "white", backgroundColor: "blue" }}>
        Submit
      </button>
    </div>
  );
};

//take the react component and show it in the browser
ReactDOM.render(<App />, document.querySelector("#root"));
