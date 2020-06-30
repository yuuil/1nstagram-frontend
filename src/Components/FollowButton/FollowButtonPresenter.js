import React from "react";
import Button from "../Button";

const FollowButtonPresenter = ({ isFollowing, onClick }) => {
  return (
    <Button text={isFollowing ? "Unfollow" : "Follow"} onClick={onClick} />
  );
};

export default FollowButtonPresenter;
