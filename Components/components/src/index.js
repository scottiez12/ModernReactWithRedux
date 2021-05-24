import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

//force hot reload
if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure you want chilimac?</ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 3"
          avatar={Faker.image.avatar()}
          commentText="Nice one."
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="James"
          timeAgo="Today at 2"
          avatar={Faker.image.avatar()}
          commentText="Nice two."
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sarah"
          timeAgo="Today at 5"
          avatar={Faker.image.avatar()}
          commentText="Nice three."
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Tim"
          timeAgo="Today at 1"
          avatar={Faker.image.avatar()}
          commentText="Nice four."
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
