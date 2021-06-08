import React from "react";
import { Field, formValues, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

//form validation
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    //only ran if the user didnt enter a title..
    errors.title = "Value required";
  }

  if (!formValues.description) {
    errors.description = "Description required";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
