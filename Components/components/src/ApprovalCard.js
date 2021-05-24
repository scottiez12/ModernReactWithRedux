import React from "react";
import CommentDetail from "./CommentDetail";

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      {/* if props.children is never referenced then the components being passed down wont display! */}
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
