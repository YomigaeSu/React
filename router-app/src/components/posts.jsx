import React from "react";

const Posts = ({ match }) => {
  // this is a sfc, match needs to be passed to this function
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.month}
    </div>
  );
};

export default Posts;
