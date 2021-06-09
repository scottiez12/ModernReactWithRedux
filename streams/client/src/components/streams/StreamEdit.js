import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

//so props.match.params.id is the id object fro the url
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  //the callback being passed from StreamForm
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading..</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          //this lodash function allows us to just grab the stuff we want, so we're not passing around the
          //record ID and/or the userId... or ultimately any information that really isn't relevant.
          initialValues={_.pick(this.props.stream, "title", "description")}
        />
      </div>
    );
  }
}

//so now we can get store, and ownProps is from the component itself..
//we did this before, it's just been awhile.
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
