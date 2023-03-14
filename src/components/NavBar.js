import React from "react";
import "./NavBarStyle.css";
import { NotificationsOutlined, Language, Settings } from "@mui/icons-material";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="navbarContainer">
        <div className="navBarLeft">
          <div className="adminLogo">Admin</div>
        </div>
        {/*This will add icons and an avatar for the users profile.*/}
        <div className="navBarRight">
          <div className="iconContainer">
            <NotificationsOutlined />
            <span className="iconNotif">2</span>
          </div>
          <div className="iconContainer">
            <Language />
          </div>
          <div className="iconContainer">
            <Settings />
          </div>
          <img src="https://fillmurray.lucidinternets.com" alt="placeholder" className="navBarAvatar"></img>
        </div>
      </div>
    </div>
  );
}
