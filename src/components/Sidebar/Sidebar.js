import React from "react";
import avatar from "../../images/avatar.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="profile__logo">
      <img
        src={avatar}
        alt="profile__avatar"
        className="profile__avatar-image"
      />
      <p className="profile__avatar-name">name</p>
    </div>
  );
};
export default Sidebar;
