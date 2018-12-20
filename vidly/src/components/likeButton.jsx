import React from "react";

const LikeButton = props => {
  return (
    <i
      className={props.liked === true ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    />
  );
};

export default LikeButton;
