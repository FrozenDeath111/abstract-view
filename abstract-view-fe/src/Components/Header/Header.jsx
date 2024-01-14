//Main
import React, { useState } from "react";
import { Link } from "react-router-dom";

//MUI
import Switch from "@mui/material/Switch";
import HiveIcon from "@mui/icons-material/Hive";
import VillaIcon from "@mui/icons-material/Villa";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

//Other
import "./Header.css";

const Header = (props) => {
  const [mode, setMode] = props.theme;
  const wTheme = "#FFF";
  const bTheme = "#000";

  const [menuToggle, setMenuToggle] = useState(true);
  const handleMenu = () => {
    setMenuToggle(!menuToggle);
    const menuBar = document.getElementById("nav-container");
    const menuBtn = document.getElementById("menu-btn");
    const navItems = document.getElementById("nav-items");
    const navItem = document.getElementsByClassName("nav-item");

    if (menuToggle) {
      menuBar.style.height = "420px";
      navItems.style.visibility = "visible";
      menuBtn.style.transform = "translate(-25px, -25px) rotate(180deg)";
      for(let item of navItem){
        item.style.transform = "scale(1)"
      };
    } else {
      menuBar.style.height = "70px";
      navItems.style.visibility = "hidden";
      menuBtn.style.transform = "translate(-25px, -25px) rotate(-180deg)";
      for(let item of navItem){
        item.style.transform = "scale(0)"
      };
    }
  };

  const handleChange = (event) => {
    setMode(event.target.checked);
  };

  return (
    <div id="nav-container">
      <div id="toggle-box">
        <button id="menu-btn" onClick={handleMenu}>
          <HiveIcon fontSize="large"></HiveIcon>
        </button>
      </div>
      <ul id="nav-items">
        <li className="nav-item">
          <Link to={"/"}>
            <VillaIcon fontSize="large"></VillaIcon>
            <span className="icon-detail">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"}>
            <InfoIcon fontSize="large"></InfoIcon>
            <span>about</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/auth"}>
            <LoginIcon fontSize="large"></LoginIcon>
            <span>login</span>
          </Link>
        </li>
        <li className="nav-item">
          {
            mode ? <p>dark</p> : <p>light</p>
          }
          <span id="theme-switch">
          <Switch
            checked={mode}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
