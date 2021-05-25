import React from "react";
import ReactDOM from "react-dom";

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
    this.state = { lat: null };

    //by putting this here, we're not making this call every time the render() calls..
    //that way we're not double fetching or bogging down the server when the state changes
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we call this function to set our state
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  //React says we have to define render()
  render() {
    return <div>Latitude:{this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
