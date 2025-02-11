import React from "react";

import { Avatar } from "@mui/material";
// import { deepOrange } from "@mui/material/colors";
// import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
// import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="common header">
      <h1>
        <a href="#">구동여지도</a>
      </h1>
      <div className="auth">
        <a href="/signin" className="signin-btn">
          {/* <ExitToAppTwoToneIcon /> */}
        </a>
        <a href="/signup" className="signup-btn">
          {/* <AddBoxTwoToneIcon /> */}
        </a>
      </div>
      {/* <div className="user display-none">
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <a href="#"></a>
      </div> */}
    </header>
  );
}
