import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

//function
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Latitude: </div>;
// };

//class based
class App extends React.Component {
  //JS constructor; not required
  //by convention and codebase, the constructor is called first, so always better to put it at the top of components
  constructor(props) {
    //super is a reference to the React.Component ctor function, and the one we define includes our props
    super(props);
    //once super is initialized, we can use state
    //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE
    this.state = { lat: null, errorMessage: "" };
  }

  //alternative way of declaring state..
  state = { lat: null, errorMessage: "" };

  //using some lifecycle methods
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //we call this function to set our state
      (position) => this.setState({ lat: position.coords.latitude }),
      //we did not assign the states value like below!!!
      //this.state.lat = position.coords.latitude
      (err) => this.setState({ errorMessage: err.message })
    );

    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
    console.log("Component was re-rendered after update");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Err : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  //React says we have to define render()
  //try to avoid conditionals (multiple returns) in your render()... make helper functions if you have to.
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
