import React from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

//so props.match.params.id is the id object fro the url
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading..</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

//so now we can get store, and ownProps is from the component itself..
//we did this before, it's just been awhile.
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
