import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";

//force hot reload
if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 3"
        avatar={Faker.image.avatar()}
        commentText="Nice one."
      />
      <CommentDetail
        author="James"
        timeAgo="Today at 2"
        avatar={Faker.image.avatar()}
        commentText="Nice two."
      />
      <CommentDetail
        author="Sarah"
        timeAgo="Today at 5"
        avatar={Faker.image.avatar()}
        commentText="Nice three."
      />
      <CommentDetail
        author="Tim"
        timeAgo="Today at 1"
        avatar={Faker.image.avatar()}
        commentText="Nice four."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
